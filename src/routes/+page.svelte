<script>
	import { goto, preloadData, preloadCode } from '$app/navigation';
	export let data;
	const preloadDataProducts = async () => {
		// await preloadData('/products');
	};

	const preloadCodeProducts = async () => {
		await preloadCode('/products');
	};
</script>

<h1 class="tall">Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- eager | hover | off | tap | viewport -->
<!-- <a href="/products" data-sveltekit-preload-code="viewport">Products</a> -->

<!-- hover | off | tap -->
<!-- <a href="/products" data-sveltekit-preload-data="">Products</a> -->

<!-- <a href="/products" data-sveltekit-reload>Products</a> -->

<a href="/products" data-sveltekit-noscroll>Products</a>

<button
	on:mouseover={preloadDataProducts}
	on:focus={preloadDataProducts}
	on:click={() => {
		goto('/products');
	}}
>
	Go to products
</button>

<style>
	/* .tall {
		height: 100vh;
	} */
</style>
