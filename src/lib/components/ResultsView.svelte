<script lang="ts">
	import { filteredResults, resultLimit } from '$lib/stores';
</script>

<div class="space-y-2">
	<label class="text-sm font-bold border-l-4 border-black pl-2">Show top:
		<select bind:value={$resultLimit} class="ml-2 py-1 border-4 border-black bg-[#FFFCF2] hover:cursor-pointer">
			<option value={10}>10</option>
			<option value={20}>20</option>
			<option value={50}>50</option>
			<option value={-1}>All</option>
		</select>
	</label>

	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
		{#each ($resultLimit === -1 ? $filteredResults : $filteredResults.slice(0, $resultLimit)) as word (word)}
			<div class="px-3 py-2 bg-yellow-200 border-4 border-black hover:bg-yellow-300 transition-colors duration-150">
				{word}
			</div>
		{/each}
	</div>
</div>