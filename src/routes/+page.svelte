<script>
</script>

<div class="fixed top-0 z-10 h-[20%] w-full bg-gradient-to-b from-[#020202] to-[#020202]/0"></div>

<div class="-z-10 flex h-screen flex-col overflow-x-clip bg-red-800">
	<img
		class="top-0 h-full w-full translate-x-[-20%] scale-[2] object-cover"
		src="/img/Prova-2.png"
		alt="immagine base"
	/>
</div>

<!-- il margin varia in base a quanto py c'è sotto, (la linea bianca deve stare fuori) -->
<div class="sticky top-0 z-50 -mt-12 w-full backdrop-blur-sm">
	<nav class="mx-auto px-32">
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
<!-- page content (including navbar) -->
<div class="relative w-full">
	<!-- gradient that covers the image / background split -->
	<div
		class="t-0 relative z-0 h-[700px] bg-gradient-to-t from-[#020202] via-[#020202]/100 to-[#020202]/0 pt-44 backdrop-blur-sm"
	></div>

	<!-- page content -->
	<div class="absolute top-0 z-20 flex w-full flex-col p-defpad">
		<!-- headline -->
		<div class="mx-auto w-full max-w-[1920px]">
			<div class="text-16 font-semibold md:text-[8rem]">La Nostra</div>
			<div
				class="w-fit bg-gradient-to-r from-white to-rosa bg-clip-text text-[4rem] font-semibold leading-none text-transparent md:text-[8rem]"
			>
				Storia
			</div>

			<div class="py-defpad">
				<div class="relative flex w-full justify-end">
					<img
						class="absolute h-full w-full object-cover"
						src="/img/larp.jpeg"
						alt="immagine base"
					/>
					<div class="p-8 backdrop-blur-lg lg:mb-[10%] lg:w-[60%] lg:p-16">
						<p class="text-2xl lg:text-5xl">Descrizione</p>
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

			<div class="flex w-full flex-row gap-4">
				<div>
					<div class="text-xl">
						<h1 class="text-3xl">Sumir</h1>
						<div>Descirzione molto descriziosa</div>
					</div>
					<img class="w-full min-w-0 flex-1" src="/img/sumir.jpg" alt="sumir" />
				</div>
				<div>
					<img class="w-full min-w-0 flex-1" src="/img/sebby.jpg" alt="sumir" />
					<div class="text-right text-xl">
						<h1 class="text-3xl">Sebby</h1>
						<div>Descirzione molto descriziosa</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="h-[3000px]" />
