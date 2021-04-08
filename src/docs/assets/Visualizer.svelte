<script lang="ts">
  import { afterUpdate, createEventDispatcher } from "svelte";
  import cytoscape, { NodeSingular } from "cytoscape";
  import type { Quest, State, StateId, Transition } from "./QDD";

  export let quest: Quest;

  const dispatch = createEventDispatcher();

  type VisState = {
    nodes: { id: string; position: { x: number; y: number } }[];
    pan: cytoscape.Position;
    zoom: number;
  };

  let onCenterClick: (e: MouseEvent) => void;
  let onResetClick: (e: MouseEvent) => void;
  let onSnapshotClick: (e: MouseEvent) => void;

  afterUpdate(async () => {
    if (!quest.states) return;

    const visState: VisState = recoverVis();

    /** Helper function for getPos(id) => position */
    const getPosFunc = (visState: {
      nodes: { id: string; position: { x: number; y: number } }[];
    }) => (id: string) => {
      if (!visState || !visState.nodes) return undefined;
      const node = visState.nodes.find((n) => n.id === id);
      return node ? node.position : undefined;
    };
    /** Return a position or undefined given a state id*/
    const getPos: (id: string) => { x: number; y: number } = getPosFunc(
      visState
    );

    const getId = (state?: State) => (state ? state.id : undefined);
    const getNodeIdByName = (name: string) =>
      getId(quest.states.find((s) => s.name === name));

    const elements = quest.states
      .map((s) => (!!s.transitions ? s : { ...s, transitions: [] }))
      // map states and their transitions to cytoscape format
      .reduce(
        (els, state) => [
          // nodes and edges:
          ...els,
          // nodes:
          {
            data: { id: state.id, name: state.name },
            position: getPos(state.id),
          },
          ...state.transitions
            // filter out transitions that contain non-existent targets
            .filter((tr) =>
              quest.states.find((s) => s.id === getNodeIdByName(tr[1]))
            )
            // edges:
            // map state transitions to cytoscape format edges
            .map((tr: Transition, i: number) => ({
              data: {
                source: state.id,
                target: getNodeIdByName(tr[1]),
                id: `${state.id}-${i}`,
                label: tr[0],
              },
            })),
        ],
        []
      );

    const cy = cytoscape({
      container: document.getElementById("graph"), // container to render in
      elements,
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#EEE",
            "border-color": "black",
            "border-width": 1,
            height: 20,
            label: "data(name)",
            width: 20,
          },
        },

        {
          selector: "edge",
          style: {
            "arrow-scale": 2,
            color: "#444",
            "curve-style": "bezier",
            "font-size": 8,
            "line-color": "#ccc",
            "source-label": "data(label)",
            "source-text-offset": 25,
            //@ts-expect-error
            "source-text-rotation": "autorotate",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "text-border-color": "#444",
            "text-border-width": 1,
            "text-halign": "left",
            width: 2,
          },
        },
      ],

      layout: {
        name: "preset",
      },
    });

    const isPositioned = (
      element: cytoscape.NodeSingular | cytoscape.EdgeSingular
    ) =>
      element.isEdge()
        ? isPositioned(element.target()) && isPositioned(element.source())
        : element.position() &&
          !(element.position().x === 0 && element.position().y === 0);

    const unPositionedElements = cy
      .elements()
      .difference(cy.elements().filter(isPositioned));

    //@ts-expect-error
    cy.removeAllListeners();

    const layoutOptions = {
      name: "cose",
      row: 4,
      // Called on `layoutready`
      ready: function () {},

      // Called on `layoutstop`
      stop: function () {},

      // Whether to animate while running the layout
      // true : Animate continuously as the layout is running
      // false : Just show the end result
      // 'end' : Animate with the end result, from the initial positions to the end positions
      animate: false,

      // Easing of the animation for animate:'end'
      animationEasing: undefined,

      // The duration of the animation for animate:'end'
      animationDuration: undefined,

      // A function that determines whether the node should be animated
      // All nodes animated by default on animate enabled
      // Non-animated nodes are positioned immediately when the layout starts
      animateFilter: function (node, i) {
        return true;
      },

      // The layout animates only after this many milliseconds for animate:true
      // (prevents flashing on fast runs)
      animationThreshold: 250,

      // Number of iterations between consecutive screen positions update
      refresh: 20,

      // Whether to fit the network view after when done
      fit: true,

      // Padding on fit
      padding: 30,

      // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      boundingBox: undefined,

      // Excludes the label when calculating node bounding boxes for the layout algorithm
      nodeDimensionsIncludeLabels: true,

      // Randomize the initial positions of the nodes (true) or use existing positions (false)
      randomize: false,

      // Extra spacing between components in non-compound graphs
      componentSpacing: 512,

      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: function (node) {
        return 32;
      },

      // Node repulsion (overlapping) multiplier
      nodeOverlap: 4,

      // Ideal edge (non nested) length
      idealEdgeLength: function (edge) {
        return 1;
      },

      // Divisor to compute edge forces
      edgeElasticity: function (edge) {
        return 2048;
      },

      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 1.2,

      // Gravity force (constant)
      gravity: 1,

      // Maximum number of iterations to perform
      numIter: 1000,

      // Initial temperature (maximum node displacement)
      initialTemp: 1000,

      // Cooling factor (how the temperature is reduced between consecutive iterations
      coolingFactor: 0.99,

      // Lower temperature threshold (below this point the layout will end)
      minTemp: 1.0,
    };

    unPositionedElements.layout(layoutOptions).run();

    if (visState.pan) cy.pan(visState.pan);
    if (visState.zoom) cy.zoom(visState.zoom);

    cy.nodes().addListener("dragfreeon", (e) => {
      e.stopPropagation();
      e.preventDefault();
      storeVis(cy);
    });

    //TODO: This can be made more preformant by storing only pan & zoom in cookie
    cy.on("viewport", () => storeVis(cy));

    cy.nodes().on("select", (e) => {
      const id = (e.target as NodeSingular).data().id;
      dispatch("select", { id });
    });

    onSnapshotClick = (e: MouseEvent) => {
      const blob = cy.png({ full: true, bg: "#EEE", output: "blob", scale: 2 });
      saveAs(blob, `${quest.title}.png`);
    };

    onCenterClick = (e: MouseEvent) => {
      cy.center();
      cy.fit();
    };

    onResetClick = (e: MouseEvent) => {
      cy.layout(layoutOptions).run();
    };

    // Style the start nodes
    const rootNodes = cy.nodes().roots();
    rootNodes.style("background-color", "lightgreen");

    // Style the end nodes
    const leafNodes = cy.nodes().leaves();
    leafNodes.style({
      "background-color": "#CCC",
      "border-width": 2,
      "border-style": "double",
      "border-color": "black",
    });

    storeVis(cy);
  });

  const storeVis = (cy: cytoscape.Core) => {
    const nodes: {
      id: StateId;
      position: { x: number; y: number };
    }[] = cy.nodes().map((n) => ({ id: n.data("id"), position: n.position() }));

    const pan = cy.pan();
    const zoom = cy.zoom();

    const graphCookie = `qdd_graph=${JSON.stringify({ nodes, pan, zoom })}`;
    document.cookie = `${graphCookie}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };

  const recoverVis = () => {
    const graphCookieValue = document.cookie
      .split(";")
      .filter((s) => s.trim().startsWith("qdd_graph="))
      .map((s) => s.split("="))
      .map((a) => a[1])
      .reduce((s, a) => a, "[]");
    return JSON.parse(graphCookieValue);
  };
</script>

<aside>
  <header>
    <h2>{quest.title}</h2>
    <div class="button-group">
      <button on:click={onCenterClick}>center</button>
      <button on:click={onSnapshotClick}>snapshot</button>
      <button on:click={onResetClick}>reset</button>
    </div>
  </header>
  <!-- <input
    type="range"
    id="fader"
    min="1"
    max="100"
    bind:value={sliderValue}
    step="1"
    aria-valuemin="1"
    aria-valuemax="100"
    aria-valuenow="25"
    on:input={outputUpdate}
  />
  <output for="fader" id="volume">{sliderValue}</output> -->
  <div id="graph" />
</aside>

<style></style>
