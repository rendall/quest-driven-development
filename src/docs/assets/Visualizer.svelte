<script lang="ts">
  import cytoscape from "cytoscape";
  import { afterUpdate } from "svelte";
  import type { Quest, Transition } from "./QDD";
  export let quest: Quest;

  afterUpdate(() => {
    if (!quest.states) return;

    const elements = quest.states
      .map((s) => (!!s.transitions ? s : { ...s, transitions: [] }))
      .reduce(
        (els, state) => [
          ...els,
          { data: { id: state.id } },
          ...state.transitions.map((tr: Transition, i:number) => ({
            data: { source: state.id, target: tr[1], id: `${state.id}-${i}` },
          })),
        ],
        []
      );

    console.log({ elements });

    var cy = cytoscape({
      container: document.getElementById("viz"), // container to render in

      elements,

      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)",
          },
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],

      layout: {
        name: "grid",
        rows: 1,
      },
    });
  });
</script>

<div>{quest.title}</div>
<div id="viz" />

<style>
  #viz {
    height: 1200px;
    width: 1200px;
  }
</style>
