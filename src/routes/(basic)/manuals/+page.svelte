<script>
	import Download from '$components/DownloadManual.svelte';

	const downloadLinks = [
		{
			name: 'Manuale di Gioco',
			link: '/manuali/regolamento.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Scheda Personaggio',
			link: '/manuali/schedaPersonaggio.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Manuale di Medicina',
			link: '/manuali/manualeDiMedicina.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Manuale di Alchimia',
			link: '/manuali/manualeDiAlchimia.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Manuale Dei Mestieri',
			link: '/manuali/manualeDeiMestieri.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Compendio Del Forgiatore',
			link: '/manuali/compendioDelForgiatore.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Manuale di Magia',
			link: '/manuali/compendioDiMagia.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Giocate Online',
			link: '/manuali/giocateOnline.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Ambient',
			link: '/manuali/ambientazione.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Classi Speciali',
			link: '/manuali/classiSpeciali.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Leggi',
			link: '/manuali/leggiERegolamenti.pdf',
			img: '/img/Prova-2.png'
		},
		{
			name: 'Background o-matic',
			link: '/manuali/backgroundOMatic.pdf',
			img: '/img/Prova-2.png'
		}
	];
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl">Manuali</h1>
	<h3>Qui troverete i download per tutti i manuali.</h3>
	<div id="links" class="flex w-full max-w-[65rem] flex-wrap justify-center gap-1 py-4">
		{#each downloadLinks as link}
			<Download name={link.name} link={link.link} img={link.img} />
		{/each}
	</div>
</div>
