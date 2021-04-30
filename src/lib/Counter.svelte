<script>
	let count = 0
	const increment = () => {
		count += 1
	}
</script>

<!-- <button on:click={increment}>
	Clicks: {count}
</button> -->
<hr />
<div class="flex-center">
	<div class="six columns">
		<p class="center want">Want to get updates for the app?</p>
		<div class="flex">
			<input type="text" placeholder="your@email.com" class="zero input" />
			<button class="zero btn">Get notified</button>
		</div>
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
		/* padding: 0 2em; */
		width: 30%;
		background-color: #fff;
	}

	.btn:hover {
		background-color: rgb(240, 240, 240);
		cursor: pointer;
	}

	p.want {
		margin-bottom: 0.5em;
		font-size: 1.2em;
	}
</style>
