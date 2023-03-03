<script>
	// import Product from './product.svelte';

	export let data;
	const { products, title, username, Component } = data;
</script>

<h1>{title} for {username}</h1>

{#each products as product}
	<div>
		<Component {product} />
	</div>
{/each}
