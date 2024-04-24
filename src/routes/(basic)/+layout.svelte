<script>
	import Header from '$components/header/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<div class="flex h-full w-full flex-col">
	<Header />
	<main class="flex-1 overflow-y-auto py-20">
		<slot />
	</main>
	<Footer />
</div>
