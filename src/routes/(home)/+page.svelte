<script lang="ts">
	import SocialLink from '$components/SocialLink.svelte';

	const socials = [
		{ image: '/icons/instagram.svg', link: '#insta1', newTab: true },
		{ image: '/icons/instagram.svg', link: '#insta2', openInNewPage: false },
		{ image: '/icons/instagram.svg', link: '#insta3', openInNewPage: false },
		{ image: '/icons/instagram.svg', link: '#insta4', openInNewPage: false }
	];
</script>

<div class="fixed top-0 z-50 h-[20%] w-full bg-gradient-to-b from-[#020202] to-[#020202]/0" />

<div class="relative w-full">
	<div class="-z-10 flex h-screen flex-col overflow-x-clip bg-red-800">
		<img
			class="top-0 h-full w-full translate-x-[-20%] scale-[2] object-cover"
			src="/img/Prova-2.png"
			alt="immagine base"
		/>
	</div>
	<div
		class="t-0 absolute z-0 h-[700px] w-full bg-gradient-to-t from-[#020202] via-[#020202]/100 to-[#020202]/0 pt-44 backdrop-blur-sm"
	/>
</div>

<!-- il margin varia in base a quanto py c'è sotto, (la linea bianca deve stare fuori) -->
<div class="sticky top-0 z-50 -mt-12 w-full backdrop-blur-sm">
	<nav class="mx-auto px-64">
		<div class="flex flex-col">
			<div class="flex flex-row justify-center gap-4">
				<a class="flex-1 py-3 text-center hover:bg-white/30" href="/">Home</a>
				<a class="flex-1 py-3 text-center hover:bg-white/30" href="/manuals">Manuali</a>
				<a class="flex-1 py-3 text-center hover:bg-white/30" href="/schede">Schede</a>
				<a class="flex-1 py-3 text-center hover:bg-white/30" href="/contatti">Contatti</a>
			</div>
			<div class="w-full border-b-2"></div>
		</div>
	</nav>
</div>
<!-- page content (including gradient) -->
<div class="relative w-full">
	<!-- gradient that covers the image / background split -->

	<!-- page content -->
	<div class="z-20 flex w-full flex-col px-[16rem] pt-[16rem]">
		<!-- headline -->
		<div class="mx-auto w-full max-w-[1920px]">
			<div class="text-16 font-semibold md:text-[8rem]">La Nostra</div>
			<div
				class="text-16 w-fit bg-gradient-to-r from-white to-rosa bg-clip-text font-semibold leading-none text-transparent md:text-[8rem]"
			>
				Storia
			</div>

			<div class="py-defpad">
				<div class="relative flex w-full justify-end">
					<img
						class="absolute h-full w-full object-cover"
						src="/img/larp1.jpeg"
						alt="immagine base"
					/>
					<div class="p-8 backdrop-blur-lg lg:mb-[10%] lg:w-[60%] lg:p-16">
						<p class="text-2xl lg:text-5xl">Chi siamo?</p>
						<br />
						<p class="text-sm lg:text-xl">
							Il Regno Supremo è un'organizzazione no-profit dedicata interamente al gioco di ruolo
							dal vivo. Abbiamo organizzato i nostri primi eventi nel 2002 e andiamo forte ancora
							oggi! Il nostro è un sistema di gioco di ruolo ad alto contenuto fantasy, quindi se
							stai cercando eroi, magia, divinità e mostri, sei sicuramente nel posto giusto!
						</p>
						<br />
						<p class="text-sm lg:text-xl">
							Siamo orgogliosi di essere un'associazione divertente, amichevole e accogliente. Siamo
							particolarmente bravi con chi è nuovo al Gioco di ruolo dal vivo. Se ti piacciono
							Dungeons and Dragons, gli MMO online come World of Warcraft o vuoi semplicemente
							uscire, correre e divertirti con spade e scudi, sei più che benvenuto a venire a
							giocare.
						</p>
					</div>
				</div>
			</div>

			<div class="flex w-full gap-4">
				<div class="flex-1">
					<div class="text-xl">
						<h1 class="text-2xl lg:text-5xl">Atlas</h1>
						<div class="text-sm lg:text-xl">Personaggi dai nuovi mondi</div>
					</div>
					<img class="w-full min-w-0 flex-1" src="/img/atlas.png" alt="sumir" />
				</div>
				<div class="flex-1">
					<img class="w-full min-w-0 flex-1" src="/img/orazV.png" alt="sumir" />
					<div class="text-right text-xl">
						<h1 class="text-2xl lg:text-5xl">Tombstone</h1>
						<div class="text-sm lg:text-xl">Favolosi mercanti</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center">
				<div class="inline-block pt-4">
					<div class="flex min-h-0 min-w-0 flex-row justify-center gap-4 pb-6 pt-defpad">
						{#each socials as social}
							<SocialLink image={social.image} link={social.link} newTab={social.newTab} />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
