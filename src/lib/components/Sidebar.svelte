<script lang="ts">
	import { showTips, flavor } from '$lib/stores';
</script>

<div class="hidden md:block w-full md:w-80 p-6 border-l-4 border-black bg-[#FFF2D7] transition-all duration-300">
	<label class="flex items-center gap-2 mb-4">
		<input type="checkbox" bind:checked={$showTips} class="accent-black w-4 h-4" />
		<span class="text-lg font-bold">Show Tips</span>
	</label>

	{#if $showTips}
		<div class="text-sm space-y-4 bg-white border-4 border-black p-4">
			<div class="hover:translate-x-1 transition-transform duration-200">
				<span class="font-bold">-</span> Use anchors like <code>^</code> and <code>$</code> to narrow results.
			</div>
			<div class="hover:translate-x-1 transition-transform duration-200">
				<span class="font-bold">-</span> Combine filters like <code>^a.*</code> to focus your search.
			</div>
			<div class="hover:translate-x-1 transition-transform duration-200">
				<span class="font-bold">-</span> Your goal is to reduce matches using smart regex.
			</div>
		</div>
	{:else}
		<div class="text-sm bg-white border-4 border-black p-4">
			<p class="font-bold mb-2">Regex Reference (<code>{$flavor}</code>):</p>
			<ul class="list-disc ml-5 space-y-1">
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