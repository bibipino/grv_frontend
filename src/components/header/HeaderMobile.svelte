<script lang="ts">
	import HeaderTitle from './HeaderTitle.svelte';
	import HeaderWrapper from './HeaderWrapper.svelte';

	type Link = { name: string; href: string };
	export let links: Link[] = [];

	let open: boolean = false;

	function handleClick() {
		open = !open;
	}
</script>

<HeaderWrapper>
	<div class="flex w-full items-center justify-between">
		<HeaderTitle />
		<button class="text-base font-semibold text-white" on:click={handleClick}>
			{#if open}
				<img src="/icons/close.svg" alt="nav" />
			{:else}
				<img src="/icons/hamburger.svg" alt="nav" />
			{/if}
		</button>
	</div>
	{#if open}
		<nav class="absolute left-0 top-full w-full bg-inherit">
			<div class="flex flex-col gap-8 bg-black/20 py-4">
				{#each links as link}
					<a class="font-lg px-8 text-center text-white hover:text-rosso" href={link.href}>
						{link.name}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</HeaderWrapper>
