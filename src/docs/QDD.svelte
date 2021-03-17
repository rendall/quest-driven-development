<script lang="ts">
  import { saveAs } from "file-saver";

  let description

  const collectData = () => ({ description });

  const onExportClick = (e) => {
    const data = collectData();
    const file = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    saveAs(file, "export.json");
  };

  const populateData = (data:string) => {
    const dataObj:{description:string} = JSON.parse(data)
    description = dataObj.description
  }

  const onImportChange = (e:Event) => {
    const input = e.target as HTMLInputElement
    const file = input.files[0]
    console.log({fileList: file})

    const reader = new FileReader();
    reader.onload = (e) => populateData(e.target.result as string)
    reader.readAsText(file);

  }
</script>

<textarea bind:value={description}></textarea>
<button on:click={onExportClick}>export</button>
<input on:change={onImportChange} type="file" />
