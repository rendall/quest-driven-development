<script lang="ts">
  import type { Transition, Quest, State, StateId } from "./assets/QDD";
  import Visualizer from "./assets/Visualizer.svelte";
  import { saveAs } from "file-saver";
  import { v4 as uuid } from "uuid";
  import { beforeUpdate } from "svelte";

  let selectedId: StateId;

  const handleNodeSelect = (event: CustomEvent) => {
    const nodeId = (event.detail as { id: string }).id;
    const li = document.getElementById(nodeId) as HTMLLIElement;
    li.scrollIntoView({ behavior: "smooth" });
    selectedId = nodeId;
  };

  const startState: State = {
    id: uuid() as string,
    name: "started",
    summary: "Inciting incident",
    description: "",
  };

  let quest: Quest = {
    title: "",
    description: "",
    states: [startState],
  };

  let recoverOnce = false;

  const collectData = () => quest;

  const toFileName = (str: string) =>
    str.replace(/[^\u0000-\u007F]+/, "").replace(/\s+/g, "");

  const onExportClick = (e) => {
    const qData = collectData();
    const file = new Blob([JSON.stringify(qData)], {
      type: "application/json",
    });
    saveAs(file, `${toFileName(quest.title)}.json`);
  };

  const populateData = (qData: string) => (quest = JSON.parse(qData) as Quest);
  const storeQuest = () => {
    const questCookie = `quest=${JSON.stringify(quest)}`;
    document.cookie = `${questCookie}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  };
  const recoverQuest = () => {
    const questStr = document.cookie
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.startsWith("quest="))
      .map((kv) => kv.split("="))
      .map(([k, v]) => v);

    const hasCookie = questStr && Array.isArray(questStr);
    try {
      if (hasCookie) quest = JSON.parse(questStr[0]);
    } catch (error) {
      console.error(`Could not recover quest ${questStr}`);
    }
  };

  const onImportChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      populateData(e.target.result as string);
      storeQuest();
    };
    reader.readAsText(file);
  };

  const onAddStateClick = (e: Event) => {
    const newState: State = {
      id: uuid() as string,
      name: `state-${quest.states.length}`,
      summary: "",
      description: "",
    };

    quest = { ...quest, states: [...quest.states, newState] };
    storeQuest();
  };

  const onRemoveStateClick = (stateId: StateId) => (e: Event) => {
    quest = {
      ...quest,
      states: quest.states.filter((s) => s.id !== stateId),
    };
    //TODO: There should be an option to remove transitions referencing this removed state, or flagging them somehow
    storeQuest();
  };

  const onAddStateTransition = (state: State, i: Number) => () => {
    if (!state.transitions) state = { ...state, transitions: [] };
    const newTransition: Transition = [
      `action-${state.transitions.length}`,
      state.name,
    ];
    const owningState = {
      ...state,
      transitions: [...state.transitions, newTransition],
    };
    quest = {
      ...quest,
      states: quest.states.map((s, idx) => (idx === i ? owningState : s)),
    };
    storeQuest();
  };

  const onRemoveStateTransition = (
    transition: Transition,
    state: State,
    i: Number
  ) => () => {
    const updatedTransitions = state.transitions.filter(
      (e) => !(e[0] === transition[0] && e[1] === transition[1])
    );
    const newState = { ...state, transitions: updatedTransitions };
    quest = {
      ...quest,
      states: quest.states.map((s, idx) => (idx === i ? newState : s)),
    };
    storeQuest();
  };

  beforeUpdate(() => {
    if (!recoverOnce) {
      recoverQuest();
      recoverOnce = true;
    }
    //TODO: Oh... this does not seem performant
    else storeQuest();
  });
</script>

<div class="container">
  <main>
    <label>
      Import:
      <input on:change={onImportChange} type="file" />
    </label>
    <label>Title: <input bind:value={quest.title} /></label>
    <label>Description: <textarea bind:value={quest.description} /></label>
    <ul>
      {#each quest.states as state, i}
        <li
          class="state {state.id === selectedId ? 'is-selected' : ''}"
          id={state.id}
        >
          <label>
            State: <input bind:value={state.name} />
            <button on:click={onRemoveStateClick(state.id)}>
              Remove {state.name}
            </button>
          </label>
          <label>
            Summary:
            <input bind:value={state.summary} />
          </label>
          <label>
            Description:
            <textarea bind:value={state.description} />
          </label>
          {#if !!state.transitions && state.transitions.length > 0}
            <table>
              <thead>
                <th>This action...</th>
                <th>...transitions to state</th>
                <th />
              </thead>
              <tbody>
                {#each state.transitions as transition}
                  <tr>
                    <td> <input bind:value={transition[0]} /></td>
                    <td> <input bind:value={transition[1]} /></td>
                    <td>
                      <button
                        on:click={onRemoveStateTransition(transition, state, i)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          {/if}
          <button on:click={onAddStateTransition(state, i)}>Add action</button>
        </li>
      {/each}
    </ul>
    <button on:click={onAddStateClick}>Add State</button>
    <label>
      Export: <button on:click={onExportClick}>Choose download location</button>
    </label>
  </main>
  <Visualizer {quest} on:select={handleNodeSelect} />
</div>

<style>
  .state {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.5rem;
  }
  .state > button:last-child {
    width: 5rem;
    align-self: flex-end;
  }
  div.container {
    display: flex;
  }
  button {
    white-space: nowrap;
  }
  input {
    width: 100%;
    height: 1rem;
    padding-left: 0.5rem;
    margin-left: 0.5rem;
  }
  input[type="file"] {
    height: unset;
  }
  label {
    display: flex;
    margin-bottom: 0.8rem;
    height: min-content;
  }
  main {
    width: 50%;
    max-width: 40rem;
    min-width: 27rem;
  }
  main > label:last-child {
    margin-top: 1rem;
  }
  table {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
  table ~ button {
    margin-left: 1rem;
  }
  table input {
    margin: 0;
  }
  textarea {
    vertical-align: top;
    width: 100%;
    min-height: 3rem;
    margin-left: 0.5rem;
  }
</style>
