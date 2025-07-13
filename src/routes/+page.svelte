<script lang="ts">
  import RegexPanel from '$lib/components/RegexPanel.svelte';
  import ResultsView from '$lib/components/ResultsView.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="min-h-screen bg-[#FFFCF2] text-black flex flex-col md:flex-row font-mono transition-all duration-300">
  <div class="flex-1 p-6 space-y-6 max-w-full md:max-w-2xl mx-auto">
    <div class="flex items-center justify-between border-4 border-black p-4 hover:scale-[1.01] transition-transform duration-300">
      <h1 class="text-3xl font-bold">Regex Wordle Solver</h1>
    </div>
    <RegexPanel />
    <ResultsView />
  </div>
  <Sidebar />
</div>