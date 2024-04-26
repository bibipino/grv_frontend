<script lang="ts">
	export let image: string;
	export let link: string;
	export let newTab: boolean = false;
</script>

<a href={link} target={newTab ? '_blank' : '_parent'}>
	<img class="h-auto w-8 flex-1 hover:bg-rosso/30" alt="socailIcon" src={image} />
</a>
