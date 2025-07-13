<script lang="ts">
	import { flavor } from '$lib/stores';
</script>

<div class="text-sm flex items-center gap-2 border-4 border-black p-2 bg-white transition-transform duration-200 hover:scale-105">
	<label class="font-bold">Flavor:</label>
	<select bind:value={$flavor} class="border-4 border-black bg-[#FFFCF2] hover:cursor-pointer py-1">
		<option value="js">JS</option>
		<option value="pcre">PCRE</option>
	</select>
</div>
