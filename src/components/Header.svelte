<script>
	import HeaderDesktop from './HeaderDesktop.svelte';
	import HeaderMobile from './HeaderMobile.svelte';

	let breakPointsMobile = 969;
	let innerWidth = 0;

	$: componentToRender = innerWidth > breakPointsMobile ? HeaderDesktop : HeaderMobile;

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Manuali', href: '/manuals' },
		{ name: 'Schede', href: '/schede' },
		{ name: 'Galleria', href: '/album' },
		{ name: 'About', href: '/about' },
		{ name: 'Contattaci', href: '/contact' }
	];
</script>

<svelte:window bind:innerWidth />
<svelte:component this={componentToRender} {links} />
