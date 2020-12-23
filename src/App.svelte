<script>
	function modify(item, val) {
		item.qty = Math.max(item.qty + val, 0);
		item.sumPrice = item.qty * item.price;
		sum = Math.max(sum + val * item.price, 0);
		items = items.filter((x) => x.name != item.name);
		items.push(item);
		items.sort(itemCompare);
	}

	function reset() {
		items = items.map((item) => {
			item.qty = 0;
			item.sumPrice = 0;
			return item;
		});
		sum = 0;
	}

	function itemCompare(a, b) {
		// non-anonymous as you ordered...
		return b.name < a.name
			? 1 // if b should come earlier, push a to end
			: b.name > a.name
			? -1 // if b should come later, push a to begin
			: 0; // a and b are equal
	}

	function numberFormat(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	let items = [
		{
			name: "Almalé 5L",
			price: 1300,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Cékla - Almalé 3L",
			price: 1300,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Sütőtök - Almalé 3L",
			price: 1300,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Gyömbér - Almalé 3L",
			price: 1600,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Fekete Berkenyelé 1L",
			price: 1500,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Homoktövis - Almalé 3L",
			price: 3000,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Meggy - Almalé 3L",
			price: 1500,
			qty: 0,
			sumPrice: 0,
		},
		{
			name: "Bag-in-Box kartondoboz 5L",
			price: 220,
			qty: 0,
			sumPrice: 0,
		},
	];

	let sum = 0;

	items.sort(itemCompare);
</script>

<style>
	:global(body) {
		font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
		color: #5e0000;
		font-size: 1.1rem;
		padding: 0;
	}

	.content {
		background-image: url("/images/bg.png"),
			radial-gradient(at center center, #ffffff 0%, #f9de79 100%);
		background-position: center center, bottom center;
		background-size: auto, cover;
	}

	.container {
		max-width: 500px;
		margin: auto;
		padding: 20px;
	}

	h3 {
		margin-bottom: 0;
		text-align: center;
		font-weight: bold;
	}

	button {
		background-color: #5e0000;
		border: none;
		color: white;
		padding: 8px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}

	.itemData,
	.itemButtons {
		text-align: center;
		margin: 4px;
	}

	.summary {
		text-align: center;
		font-weight: bold;
	}

	.content img {
		display: block;
		width: 50%;
		margin: auto;
	}
</style>

<div class="content">
	<div class="container">
		<img src="/images/logo.png" alt="" srcset="" />
		{#each items as item}
			<div class="item">
				<h3>{item.name} - {numberFormat(item.price)} Ft</h3>
				<div class="itemData">
					{item.qty}
					db -
					{numberFormat(item.sumPrice)}
					Ft
				</div>
				<div class="itemButtons">
					<button on:click={modify(item, -1)}> - </button>
					<button on:click={modify(item, 1)}> + </button>
				</div>
			</div>
		{/each}
		<div class="summary">
			<h2>Összesen: {numberFormat(sum)} Ft</h2>
			<button on:click={() => reset()}> Nullázás </button>
		</div>
	</div>
</div>
