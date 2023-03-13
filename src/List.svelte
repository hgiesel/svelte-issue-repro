<script lang="ts">
  import type { Entry } from './types';

  type T = $$Generic;

  export let list: Entry<T>[];
</script>

<ul>
  {#each list as entry}
    <li draggable="{entry.draggable}">
      <slot entry="{entry}" />
    </li>
  {/each}
</ul>
