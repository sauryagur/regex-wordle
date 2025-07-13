<script lang="ts">
	import { regexStack, addRegex } from '$lib/stores';
	import RegexInput from './RegexInput.svelte';
</script>

<div class="space-y-4">
	{#each $regexStack as regex, index (regex.id)}
		<RegexInput {regex} {index} />
	{/each}
	<button
		class="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
		on:click={addRegex}>
		+ Add Regex Filter
	</button>
</div>
