<script lang="ts">
	export let image: string;
	export let link: string;
	export let newTab: boolean = false;
</script>

<a href={link} target={newTab ? '_blank' : '_parent'}>
	<img
		class="h-full max-h-32 min-h-8 w-full min-w-8 max-w-32 flex-1 p-3 hover:bg-rosso/30"
		alt="socailIcon"
		src={image}
	/>
</a>
