<script lang="ts">
	import HeaderTitle from './HeaderTitle.svelte';
	import HeaderWrapper from './HeaderWrapper.svelte';

	type Link = { name: string; href: string };

	export let links: Link[] = [];
</script>

<HeaderWrapper>
	<HeaderTitle />
	<nav class="flex gap-8 font-semibold">
		{#each links as link}
			<a href={link.href}>{link.name}</a>
		{/each}
	</nav>
</HeaderWrapper>
