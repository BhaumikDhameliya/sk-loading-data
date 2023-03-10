<script>
	export let product;
	// import { goto } from '$app/navigation';
</script>

<div class="product-card">
	<a href={`/products/${product.id}`}>
		<!-- <a href={`/products/${product.id}`} data-sveltekit-preload-data="hover"> -->
		<h2>{product.title}</h2>
	</a>
	<p>{product.description}</p>
</div>

<style>
	.product-card {
		max-width: 300px;
		border: 1px solid black;
		margin-bottom: 10px;
		padding: 10px;
	}
</style>
