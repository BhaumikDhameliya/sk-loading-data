<script>
	export let product;
	import { goto } from '$app/navigation';

	function redirectToProductPage() {
		console.log('clicked');
		goto(`/products/${product.id}`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="product-card" on:click={redirectToProductPage}>
	<h2>{product.title}</h2>
	<p>{product.description}</p>
</div>

<style>
	.product-card {
		max-width: 300px;
		border: 1px solid black;
		margin-bottom: 10px;
		padding: 10px;
		cursor: pointer;
	}
</style>
