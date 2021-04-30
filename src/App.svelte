<script>
	import logo from './assets/logo.svg'
	import mockup from './assets/mock.png'
	import Counter from './lib/Counter.svelte'

	import { onMount } from 'svelte'

	let now = new Date(),
		year

	onMount(() => {
		year = now.getFullYear().toString().slice(-2)
	})
</script>

<main>
	<div class="container">
		<br /><br /><br />
		<div class="flex-center">
			<img src={logo} draggable="false" class="svelte" alt="Svelte Logo" />
			<h1 class="zero">Ponder</h1>
			<p class="zero center topped">
				An app that helps you
				<br class="anti" />
				focus and <i>think better</i>.
			</p>
			<button class="btn zero">Coming soon</button>
		</div>

		<hr />

		<section id="control">
			<div class="flex-center">
				<div class="eight columns">
					<h3 class="take">Take control of your time</h3>
					<div class="row">
						<div class="six columns">
							<p>
								<strong>Ponder</strong> delivers a sophisticated experience for creative
								professionals to channel their inner creativity and build new products.
							</p>
							<p>
								Effortlessly sort your thoughts, achieve your goals, and be
								productive. Ponder changes the way you think.
							</p>
							<p>
								<a class="learn" href="//arhaanb.co/ponderppt" target="_blank">
									Learn more &rarr;
								</a>
							</p>
						</div>
						<div class="six columns">
							<ul>
								<li>
									A revolutionary way to sort through your thoughts and complete
									tasks
								</li>
								<li>
									Analyses your most productive work hours and gives you tips to
									stay focused
								</li>
								<li>Music curated by experts to help you focus</li>
								<li>Pinterest integration to keep you inspired</li>
								<li>Plagiarism checker</li>
							</ul>
						</div>
					</div>
					<br />
					<div class="vid-con">
						<iframe
							title="Ponder Video"
							src="//www.youtube.com/embed/YcaCoP7D_pk"
							frameborder="0"
							allowfullscreen
							class="video"
						/>
					</div>
					<br />
				</div>
			</div>
		</section>

		<Counter />

		<br />
		<hr />

		<div class="row">
			<div class="flex-center">
				<div class="eight columns">
					<img
						src={mockup}
						draggable="false"
						class="mockup"
						alt="Ponder Mockup"
					/>
				</div>
			</div>
		</div>

		<footer class="footer">
			<div class="six columns">
				<p class="zero">
					&copy; Ponder 2018 &mdash; {year || 21}
				</p>
			</div>
			<div class="six columns right">
				<p class="zero">
					Made with 💖 by
					<a href="//arhaanb.co" target="_blank">Arhaan Bahadur</a>
				</p>
			</div>
			<div class="u-cf" />
		</footer>
	</div>
</main>

<style scoped>
	.vid-con {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}
	.video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0.5em;
	}
	.svelte {
		width: 7em;
		border: solid 1px rgba(34, 34, 34, 0.226);
		border-radius: 1em;
		margin-bottom: 0.5em;
	}

	.right {
		text-align: right;
	}

	footer.footer {
		padding: 2em 0;
		border-top: solid 1px rgba(34, 34, 34, 0.3);
		margin-top: 2.5em;
	}

	.mockup {
		margin: 2em 0;
	}

	#control .take {
		margin-bottom: 0.25em;
	}

	.topped {
		margin-bottom: 1em;
		font-size: 1.2em;
	}

	.learn {
		border: none;
	}

	.btn {
		border: solid 1px rgba(34, 34, 34, 0.205);
		padding: 0.75em 2em;
		text-transform: uppercase;
		font-size: 0.8em;
		letter-spacing: 0.1em;
		background-color: transparent;
		border-radius: 5px;
	}

	ul {
		list-style: circle outside;
		margin-left: 0.5em;
	}
	br.anti {
		display: none;
	}
	@media (max-width: 750px) {
		br.anti {
			display: block;
		}

		footer.footer .six.columns p {
			text-align: center !important;
			margin: 0;
			margin-bottom: 0.25em;
		}

		footer.footer {
			padding: 0 !important;
			padding: 1em 0 !important;
		}
	}
</style>
