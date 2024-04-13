<script>
	import ContactForm from '../components/ContactForm.svelte';
</script>

<img src="http://51.38.126.8/wp-content/uploads/2022/02/Prova-2.png" alt="Il Regno Supremo" />
<div class="content">
	<section>
		<div class="title">Descrizione</div>
		<div class="text">
			<p>
				Durante questi anni, il gioco, ha attraversato 3 saghe.
				<br />
				In quella attuale gli avventurieri che popolano il mondo si trovano a fronteggiare due grandi
				mali, entrambi provocati dalle loro azioni:
			</p>
			<p>
				- Gli Antichi: Creature create all' alba dei tempi che, vennero sigillate dall' umanità che
				aveva paura del loro potere, e ora vogliono la loro vendetta sui mortali.
			</p>
			<p>
				- Il demone dall' occhio dorato: Creatura sigillata su un piano creato apposta per
				rinchiuderlo,che ha il potere di esaudire i desideri.
			</p>
			<p>
				Le azioni degli avventurieri influiscono sul susseguirsi degli eventi, questo significa che
				nonostante esista una trama base definita,vengono create una serie di sottotrame dai
				giocatori stessi in maniera dinamica che può portarli a trovare armi e poteri non racchiusi
				nel regolamento base. In definitiva, Il Regno Supremo è un gioco che vuole fare esplorare un
				nuovo mondo fatto di avventure, creature sovrannaturali e originali ed è un mondo realizzato
				dai giocatori stessi che ne fanno parte.
			</p>
		</div>
	</section>

	<section id="about">
		<div class="title">Chi Siamo</div>
		<div class="text">
			<p>Il regno supremo è un gioco di ruolo dal vivo nato nell’ottobre del 2002.</p>
			<p>
				E’ una campagna numerosi elementi fantasy (quindi con la presenza di magia, mostri e
				personaggi come elfi e mezz’orchi)
			</p>

			<p>
				Il regolamento ha un sistema a classi e gli eventi sono organizzati ogni tre mesi o meno.
			</p>
		</div>
	</section>

	<section id="contact" class="centerFlex">
		<div class="title">Contattaci</div>

		<ContactForm />

		<div class="social_container">
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
		</div>
	</section>

	<!-- <section id="contact">
		<div class="title center">Social</div>
		<div class="social_container">
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
			<a href="#insta" class="social">
				<img src="/icons/insta.png" alt="instagram" />
			</a>
		</div>
	</section> -->
</div>

<style>
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
	div.content {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		gap: 6rem;
		padding: 6rem 2rem;
	}
	.centerFlex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	div.text {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0;
	}

	.title {
		font-size: 2rem;
	}

	/* .title.center {
		text-align: center;
	} */

	.social_container {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: space-evenly;
	}

	a.social {
	}

	a.social img {
		height: 4rem;
		width: 4rem;
	}
</style>
