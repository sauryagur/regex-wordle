<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Regex Wordle Solver</title>
	<meta name="description" content="Filter possible Wordle words using real-time regex matching. Learn regex interactively." />
	<meta name="author" content="Saurya Gur" />
	<meta name="keywords" content="regex, wordle, regex wordle, wordle cheat, regex trainer, learn regex" />
	<link rel="canonical" href="https://regex.sauryagur.me" />
	<link rel="icon" href="/favicon.ico" />
	<meta name="theme-color" content="#ffffff" />

	<!-- Open Graph / Discord -->
	<meta property="og:title" content="RegEx Wordle Solver" />
	<meta property="og:description" content="Learn RegEx by cheating on Wordle." />
	<meta property="og:image" content="https://regex.sauryagur.me/og-image.png" />
	<meta property="og:url" content="https://regex.sauryagur.me" />
	<meta property="og:type" content="website" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="RegEx Wordle Solver" />
	<meta name="twitter:description" content="Learn RegEx by cheating on Wordle." />
	<meta name="twitter:image" content="https://regex.sauryagur.me/og-image.png" />
</svelte:head>

{@render children()}
