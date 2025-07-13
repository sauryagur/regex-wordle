<script lang="ts">
	import { showTips, flavor } from '$lib/stores';
</script>

<div class="hidden md:block w-full md:w-80 p-6 border-l border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
	<label class="block mb-4">
		<input type="checkbox" bind:checked={$showTips} class="mr-2" />
		Show Tips
	</label>

	{#if $showTips}
		<div class="text-sm space-y-2">
			<p>🧠 Use anchors like ^ and $ to narrow results.</p>
			<p>🧪 Combine filters like ^a.* to focus your search.</p>
			<p>🔍 Your goal is to reduce matches using smart regex.</p>
		</div>
	{:else}
		<div class="text-sm space-y-1">
			<p><strong>Regex Reference ({$flavor}):</strong></p>
			<ul class="list-disc ml-5">
				<li><code>.</code> = any character</li>
				<li><code>[abc]</code> = a, b or c</li>
				<li><code>[^abc]</code> = not a, b or c</li>
				<li><code>*</code> = 0 or more</li>
				<li><code>+</code> = 1 or more</li>
				<li><code>^</code> = start of string</li>
				<li><code>$</code> = end of string</li>
			</ul>
		</div>
	{/if}
</div>
