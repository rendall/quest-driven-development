<script lang="ts">
  import { saveAs } from "file-saver";
  type StateId = string;
  type Action = string;
  type Exit = [Action, StateId];
  type State = {
    id: StateId;
    summary: string;
    description: string;
    exits?: Exit[];
  };
  type Quest = {
    title: string;
    description: string;
    states: State[];
  };

  const startState: State = {
    id: "start",
    summary: "Inciting incident",
    description: "",
  };

  let title;
  let description;
  let states: State[] = [startState];

  const collectData = () => ({ title, description, states });
  const toFileName = (str: string) =>
    str.replace(/[^\u0000-\u007F]+/, "").replace(/\s+/g, "");
  const onExportClick = (e) => {
    const data = collectData();
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });
    saveAs(file, `${toFileName(title)}.json`);
  };

  const populateData = (data: string) => {
    const dataObj: { [key: string]: string | State[] } = JSON.parse(data);
    description = dataObj.description;
    title = dataObj.title;
    states = dataObj.states as State[];
  };

  const onImportChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => populateData(e.target.result as string);
    reader.readAsText(file);
  };

  const onAddStateClick = (e: Event) => {
    const newState: State = {
      id: `state-${states.length}`,
      summary: "",
      description: "",
    };

    states = [...states, newState];
  };

  const onAddExitState = (state: State, i: Number) => () => {
    if (!state.exits) state = { ...state, exits: [] };
    const newExit: Exit = [`action-${state.exits.length}`, state.id];
    const newState = { ...state, exits: [...state.exits, newExit] };
    states = states.map((s, idx) => (idx === i ? newState : s));
  };
</script>

<label>Title: <input bind:value={title} /></label>
<label>Description: <textarea bind:value={description} /></label>
<ul>
  {#each states as state, i}
    <li>
      <label>State: <input bind:value={state.id} /></label>
      <label>Summary: <input bind:value={state.summary} /></label>
      <label>Description: <textarea bind:value={state.description} /></label>
      {#if !!state.exits && state.exits.length > 0}
        <table>
          <thead>
            <th>Action</th>
            <th>Next State</th>
          </thead>
          <tbody>
            {#each state.exits as exit}
              <tr>
                <td> <input bind:value={exit[0]} /></td>
                <td> <input bind:value={exit[1]} /></td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
      <button on:click={onAddExitState(state, i)}>Add exit</button>
    </li>
  {/each}
</ul>
<button on:click={onAddStateClick}>Add State</button>
<label
  >Export: <button on:click={onExportClick}>Choose download location</button
  ></label
>
<label role="button">
  Import:
  <input on:change={onImportChange} type="file" />
</label>

<style>
  label {
    display: block;
  }
  textarea {
    vertical-align: top;
  }
  table {
    margin-left: 1rem;
  }
  table ~ button {
    margin-left: 1rem;
  }
</style>
