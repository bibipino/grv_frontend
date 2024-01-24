<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
	}
</style>
