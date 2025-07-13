<script lang="ts">
  import RegexPanel from '$lib/components/RegexPanel.svelte';
  import ResultsView from '$lib/components/ResultsView.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import FlavorSwitch from '$lib/components/FlavorSwitch.svelte';
  import { regexStack, flavor, resultLimit } from '$lib/stores';
</script>

<div class="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col md:flex-row">
  <div class="flex-1 p-6 space-y-6 max-w-full md:max-w-2xl mx-auto">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold tracking-tight">Regex Wordle Solver</h1>
      <FlavorSwitch />
    </div>
    <RegexPanel />
    <ResultsView />
  </div>
  <Sidebar />
</div>

