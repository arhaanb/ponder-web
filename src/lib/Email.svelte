<script>
	import axios from 'axios'
	let email = ''
	let loading = false
	const sendEmail = async () => {
		loading = true
		axios
			.post('/ponder/api/email', {
				email,
			})
			.then((res) => {
				loading = false
				console.log(res.data)
			})
			.catch((err) => {
				loading = false
				console.log(err)
			})
	}
</script>

<hr />
<div class="flex-center">
	<div class="six columns">
		<p class="center want">Want to get updates for the app?</p>
		<form class="zero" on:submit|preventDefault={sendEmail}>
			<div class="flex">
				<input
					bind:value={email}
					type="text"
					placeholder="your@email.com"
					class="zero input"
				/>
				<button type="submit" class={loading ? 'zero btn loading' : 'zero btn'}>
					{#if loading == true}
						<div class="flex-center">
							<div class="loader" />
						</div>
					{:else}
						<span>Get notified</span>
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>

<style scoped>
	.flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: stretch;
		-webkit-align-items: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
		grid-auto-columns: 1fr;
		-ms-grid-columns: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		-ms-grid-rows: auto auto;
		grid-template-rows: auto auto;
		text-align: left;
		width: 100%;
	}

	.input {
		border: none;
		outline: none;
		padding: 0.75em 1em;
		width: 70%;
		border-radius: 5px 0 0 5px;
		border: solid 1px rgba(34, 34, 34, 0.26);
		font-size: 1em;
	}

	.input:focus {
		border: solid 1px rgba(34, 34, 34, 0.5);
	}

	.input::placeholder {
		opacity: 0.6;
	}

	.btn {
		font-size: 1em;
		border: none;
		border-radius: 0 5px 5px 0;
		border-right: solid 1px rgba(34, 34, 34, 0.26);
		border-top: solid 1px rgba(34, 34, 34, 0.26);
		border-bottom: solid 1px rgba(34, 34, 34, 0.26);
		width: 30%;
		background-color: #fff;
		transition: 0.3s;
	}

	.btn:hover {
		background-color: rgb(240, 240, 240, 0.8);
		cursor: pointer;
	}

	.btn.loading {
		background-color: rgb(240, 240, 240, 0.8);
		cursor: progress;
	}

	p.want {
		margin-bottom: 0.5em;
		font-size: 1.2em;
	}

	/* Loading */
	.loader,
	.loader:after {
		border-radius: 50%;
		width: 0.8em;
		height: 0.8em;
	}
	.loader {
		position: relative;
		border-top: 0.2em solid rgba(0, 0, 0, 0.2);
		border-right: 0.2em solid rgba(0, 0, 0, 0.2);
		border-bottom: 0.2em solid rgba(0, 0, 0, 0.2);
		border-left: 0.2em solid #222;
		opacity: 0.75;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation: load8 1.1s infinite linear;
		animation: load8 1.1s infinite linear;
	}
	@-webkit-keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@media (max-width: 750px) {
		.input {
			width: 65%;
		}
		.btn {
			width: 35%;
		}
	}
</style>
