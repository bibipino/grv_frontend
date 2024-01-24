<script lang="ts">
	type Link = { name: string; href: string };
	export let links: Link[] = [];

	let open: boolean = false;

	function handleClick() {
		open = open == true ? false : true;
		console.log(open);
	}
</script>

<header>
	<div id="title">
		<h1>GRV IL REGNO SUPREMO</h1>
		<button id="navBtn" on:click={handleClick}>nav</button>
	</div>
	{#if open}
		<nav>
			{#each links as link}
				<a href={link.href}>{link.name}</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	header {
		background-color: #112448;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: space-between;
		padding: 0.25rem 1rem;
		gap: 1rem 0;
		color: white;
	}
	button#navBtn {
		background-color: transparent;
		border: none;
		color: white;
		font-size: 1.5rem;
	}
	div#title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h1 {
		font-size: 2rem;
		font-weight: 400;
	}
	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	a {
		text-decoration: none;
		color: white;
		font-size: larger;
	}
</style>
