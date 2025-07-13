<script lang="ts">
	import { filteredResults, resultLimit } from '$lib/stores';
</script>

<div class="space-y-2">
	<label class="text-sm">Show top:
		<select bind:value={$resultLimit} class="ml-2 p-1 rounded border dark:bg-zinc-800">
			<option value={10}>10</option>
			<option value={20}>20</option>
			<option value={50}>50</option>
			<option value={-1}>All</option>
		</select>
	</label>

	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 font-mono text-sm">
		{#each ($resultLimit === -1 ? $filteredResults : $filteredResults.slice(0, $resultLimit)) as word}
			<div class="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded border dark:border-zinc-600">
				{word}
			</div>
		{/each}
	</div>
</div>