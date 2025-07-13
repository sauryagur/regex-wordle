<script lang="ts">
  import RegexPanel from '$lib/components/RegexPanel.svelte';
  import ResultsView from '$lib/components/ResultsView.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import FlavorSwitch from '$lib/components/FlavorSwitch.svelte';
</script>

<div class="min-h-screen bg-[#FFFCF2] text-black flex flex-col md:flex-row font-mono">
  <div class="flex-1 p-6 space-y-6 max-w-full md:max-w-2xl mx-auto">
    <div class="flex items-center justify-between border-4 border-black p-4">
      <h1 class="text-3xl font-bold">Regex Wordle Solver</h1>
      <FlavorSwitch />
    </div>
    <RegexPanel />
    <ResultsView />
  </div>
  <Sidebar />
</div>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>