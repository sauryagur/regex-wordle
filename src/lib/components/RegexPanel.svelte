<script lang="ts">
	import { regexStack, addRegex } from '$lib/stores';
	import RegexInput from './RegexInput.svelte';
</script>

<div class="space-y-4">
	{#each $regexStack as regex, index (regex.id)}
		<RegexInput {regex} {index} />
	{/each}
	<button
		class="px-4 py-2 border-4 border-black bg-yellow-300 hover:bg-yellow-400 transition w-full text-left">
		+ Add Regex Filter
	</button>
</div>