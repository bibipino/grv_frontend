<script>
	import HeaderDesktop from './HeaderDesktop.svelte';
	import HeaderMobile from './HeaderMobile.svelte';

	let breakPointsMobile = 768;
	let innerWidth = 0;

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Manuali', href: '/manuals' },
		{ name: 'Schede', href: '/schede' },
		{ name: 'Galleria', href: '/album' }
	];
</script>

<svelte:window bind:innerWidth />
<svelte:component this={innerWidth >= breakPointsMobile ? HeaderDesktop : HeaderMobile} {links} />
