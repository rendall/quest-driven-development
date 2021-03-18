<script lang="ts">
  import type { Exit, Quest, State, StateId } from "./assets/QDD";
  import Visualizer from "./assets/Visualizer.svelte";
  import { saveAs } from "file-saver";
  const startState: State = {
    id: "started",
    summary: "Inciting incident",
    description: "",
  };

  let quest = {
    title: "",
    description: "",
    states: [startState],
  };

  const collectData = () => quest;

  const toFileName = (str: string) =>
    str.replace(/[^\u0000-\u007F]+/, "").replace(/\s+/g, "");

  const onExportClick = (e) => {
    const data = collectData();
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    saveAs(file, `${toFileName(quest.title)}.json`);
  };

  const populateData = (data: string) => (quest = JSON.parse(data) as Quest);

  const onImportChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => populateData(e.target.result as string);
    reader.readAsText(file);
  };

  const onAddStateClick = (e: Event) => {
    const newState: State = {
      id: `state-${quest.states.length}`,
      summary: "",
      description: "",
    };

    quest = { ...quest, states:[...quest.states, newState] };
  };

  const onRemoveStateClick = (stateId: StateId) => (e: Event) =>
    (quest = {
      ...quest,
      states: quest.states.filter((s) => s.id !== stateId),
    });
  const onAddStateExit = (state: State, i: Number) => () => {
    if (!state.exits) state = { ...state, exits: [] };
    const newExit: Exit = [`action-${state.exits.length}`, state.id];
    const newState = { ...state, exits: [...state.exits, newExit] };
    quest = {
      ...quest,
      states: quest.states.map((s, idx) => (idx === i ? newState : s)),
    };
  };

  const onRemoveStateExit = (exit: Exit, state: State, i: Number) => () => {
    const updatedExits = state.exits.filter(
      (e) => !(e[0] === exit[0] && e[1] === exit[1])
    );
    const newState = { ...state, exits: updatedExits };
    quest = {
      ...quest,
      states: quest.states.map((s, idx) => (idx === i ? newState : s)),
    };
  };
</script>

<main>
  <label>
    Import:
    <input on:change={onImportChange} type="file" />
  </label>
  <label>Title: <input bind:value={quest.title} /></label>
  <label>Description: <textarea bind:value={quest.description} /></label>
  <ul>
    {#each quest.states as state, i}
      <li class="state">
        <label>
          State: <input bind:value={state.id} />
          <button on:click={onRemoveStateClick(state.id)}>
            Remove {state.id}
          </button>
        </label>
        <label>Summary: <input bind:value={state.summary} /></label>
        <label>Description: <textarea bind:value={state.description} /></label>
        {#if !!state.exits && state.exits.length > 0}
          <table>
            <thead>
              <th>This action...</th>
              <th>...transitions to state</th>
              <th />
            </thead>
            <tbody>
              {#each state.exits as exit}
                <tr>
                  <td> <input bind:value={exit[0]} /></td>
                  <td> <input bind:value={exit[1]} /></td>
                  <td>
                    <button on:click={onRemoveStateExit(exit, state, i)}>
                      Remove
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        {/if}
        <button on:click={onAddStateExit(state, i)}>Add action</button>
      </li>
    {/each}
  </ul>
  <button on:click={onAddStateClick}>Add State</button>
  <label>
    Export: <button on:click={onExportClick}>Choose download location</button>
  </label>
  <Visualizer {quest} />
</main>

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
