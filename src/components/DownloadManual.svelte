<script>
	export let name = 'undefined';
	export let link = '#undefined';
	export let img = '';
</script>

<a href={link} target="_blank">
	<img src={img} alt="" />
	<div id="cover"></div>
	<span id="title">{name}</span>
</a>

<style>
	a {
		text-decoration: none;
		color: white;
		background-color: #620fb6;
		width: 20rem;
		height: 10rem;
		border-radius: 0.5rem;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	a:hover > #cover {
		background-color: #ff000022;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 0.5rem;
		object-fit: cover;

		position: absolute;
	}
	div#cover {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(0, 0, 0, 0.7);
		transition: background-color 0.2s ease-in-out;
	}
	span#title {
		position: absolute;
	}
</style>
