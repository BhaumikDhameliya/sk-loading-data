<script>
	import { page } from '$app/stores';
	console.log('page----->', page);
	console.log('$page----->', $page);
</script>

<h1>{$page.error.message}</h1>
<p>{$page.error.hint}</p>
