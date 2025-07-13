<script lang="ts">
	export let regex;
	export let index;
	import { updateRegex, removeRegex } from '$lib/stores';
</script>

<div class="flex items-center gap-2 border-4 border-black p-2 bg-white hover:shadow-lg hover:scale-[1.01] transition-transform duration-200">
	<input
		class="flex-1 p-2 border-4 border-black bg-[#FFFCF2] text-black focus:outline-none focus:ring-2 focus:ring-black"
		bind:value={regex.pattern}
		on:input={(e) => updateRegex(index, e.target.value)}
		placeholder="Enter regex e.g. ^a.*e$"
	/>
	<button
		class="px-3 py-1 border-4 border-black bg-red-300 hover:bg-red-400 active:scale-95 transition-transform duration-100"
		on:click={() => removeRegex(index)}>
		✕
	</button>
</div>


