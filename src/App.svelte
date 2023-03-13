<script lang="ts">
  import List from './List.svelte';
  import type { Entry, File, Folder, Inode } from './types';

  const list: Entry<Inode>[] = [
    {
      draggable: false,
      item: {
        type: 'file',
        name: 'foo',
        extension: 'ts',
      },
    },
    {
      draggable: false,
      item: {
        type: 'folder',
        name: 'bar',
        entries: [],
      },
    },
  ];

  function fileClicked(file: File): void {}
  function folderClicked(folder: Folder): void {}
</script>

<List list="{list}" let:entry>
  {#if entry.item.type === 'folder'}
    <button on:click="{() => folderClicked(entry.item)}">
      {entry.item.name}: {entry.item.entries.length}
    </button>
  {:else}
    <button on:click="{() => fileClicked(entry.item)}">
      {entry.item.name}.{entry.item.extension}
    </button>
  {/if}
</List>
