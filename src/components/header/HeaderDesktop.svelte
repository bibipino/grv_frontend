<script lang="ts">
	type Link = { name: string; href: string };

	export let links: Link[] = [];
</script>

<header
	class="flex items-center justify-between bg-gradient-to-r from-blu to-viola px-4 py-2 backdrop-blur-sm"
>
	<a
		class="bg-gradient-to-t from-rosso to-giallo bg-clip-text text-2xl font-semibold leading-none text-transparent"
		href="/"
	>
		GRV IL REGNO SUPREMO
	</a>
	<nav class="flex gap-8 font-semibold">
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</nav>
</header>

<!-- <header class="flex items-center justify-between gap-4 bg-[#112448] px-4 py-1 text-white">
	<h1 class="text-[1.5rem]">GRV IL REGNO SUPREMO</h1>
	<nav class="flex gap-4">
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</nav>
</header> -->
