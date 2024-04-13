<script lang="ts">
	type Link = { name: string; href: string };

	export let links: Link[] = [];
</script>

<header class="flex items-center justify-between bg-[#112448] gap-4 text-white px-4 py-1">
	<h1 class="text-[2rem]">GRV IL REGNO SUPREMO</h1>
	<nav class="flex gap-4">
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</nav>
</header>
