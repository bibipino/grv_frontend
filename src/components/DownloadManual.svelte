<script>
	export let name = 'undefined';
	export let link = '#undefined';
	export let img = '';
</script>

<a
	href={link}
	class="group relative flex h-[10rem] w-[20rem] items-center justify-center overflow-hidden rounded-lg bg-[#620fb6]"
	target="_blank"
>
	<img src={img} alt="" class="absolute h-full w-full rounded-lg object-cover" />
	<div
		class="duration-400 absolute h-full w-full bg-black/70 ease-in-out group-hover:bg-rosso/15"
	/>
	<span class="absolute">{name}</span>
</a>
