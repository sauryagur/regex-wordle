<script lang="ts">
	import { flavor } from '$lib/stores';
</script>

<div class="text-sm flex items-center gap-2">
	<label class="font-medium">Flavor:</label>
	<select bind:value={$flavor} class="p-1 rounded border dark:bg-zinc-800">
		<option value="js">JS</option>
		<option value="pcre">PCRE</option>
	</select>
</div>
