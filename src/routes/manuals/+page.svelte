<script>
	import Download from '../../components/DownloadManual.svelte';

	const downloadLinks = [
		{
			name: 'Manuale di Gioco',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/04/Regolamento2023.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Scheda Personaggio',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/01/Scheda-Personaggio.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Manuale di Medicina',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Manuale_di_Medicina.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Manuale di Alchimia',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Manuale_di_Alchimia.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Manuale Dei Mestieri',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/06/Mestieri.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Compendio Del Forgiatore',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Compendio_del_forgiatore.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Manuale di Magia',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Compendio_di_Magia.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Giocate Online',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/07/Giocate-Online.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Ambient',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Ambientazione.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Classi Speciali',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/07/ClassiSpeciali2023.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Leggi',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2023/03/Leggi_e_Regolamenti.pdf',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		},
		{
			name: 'Background o-matic',
			link: 'http://grvilregnosupremo.it/wp-content/uploads/2022/02/Background-_o_-matic.doc',
			img: 'http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png'
		}
	];
</script>

<div id="tutto">
	<h1>Manuali</h1>
	<h3>Qui troverete i download per tutti i manuali.</h3>
	<div id="links">
		{#each downloadLinks as link}
			<Download name={link.name} link={link.link} img={link.img} />
		{/each}
	</div>
</div>

<style>
	div#tutto {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	div#links {
		width: 100%;
		padding: 1rem 0;
		max-width: 65rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		justify-content: center;
	}
</style>
