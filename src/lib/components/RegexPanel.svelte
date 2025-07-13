
<script lang="ts">
	import { regexStack, addRegex } from '$lib/stores';
	import RegexInput from './RegexInput.svelte';
</script>

<div class="space-y-4">
	{#each $regexStack as regex, index (regex.id)}
		<RegexInput {regex} {index} />
	{/each}
	<button
		on:click={addRegex}
		class="px-4 py-2 border-4 border-black bg-yellow-300 hover:bg-yellow-400 hover:translate-x-1 transition-all duration-200 w-full text-left">
		+ Add Regex Filter
	</button>
</div>

