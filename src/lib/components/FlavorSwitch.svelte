<script lang="ts">
	import { flavor } from '$lib/stores';
</script>

<div class="text-sm flex items-center gap-2 border-4 border-black p-2 bg-white">
	<label class="font-bold">Flavor:</label>
	<select bind:value={$flavor} class="py-1 border-4 border-black bg-[#FFFCF2]">
		<option value="js">JS</option>
		<option value="pcre">PCRE</option>
	</select>
</div>
