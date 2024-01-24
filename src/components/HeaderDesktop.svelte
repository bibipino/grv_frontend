<script lang="ts">
	type Link = { name: string; href: string };

	export let links: Link[] = [];
</script>

<header>
	<h1>GRV IL REGNO SUPREMO</h1>
	<nav>
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		background-color: #112448;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0.25rem 1rem;
		gap: 1rem 0;
		color: white;
	}
	h1 {
		font-size: 2rem;
		font-weight: 400;
	}
	nav {
		display: flex;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: larger;
	}
</style>
