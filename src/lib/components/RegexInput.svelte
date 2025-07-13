<script lang="ts">
	export let regex;
	export let index;
	import { updateRegex, removeRegex } from '$lib/stores';
</script>

<div class="flex items-center gap-2">
	<input
		class="flex-1 p-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
		bind:value={regex.pattern}
		on:input={(e) => updateRegex(index, e.target.value)}
		placeholder="Enter regex e.g. ^a.*e$"
	/>
	<button
		class="text-sm px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
		on:click={() => removeRegex(index)}>
		✕
	</button>
</div>
