<script>
	import { page } from '$app/stores';
	export let data;
	const username = data.username;
</script>

<svelte:head>
	<title>
		{$page.data.title || ''}
	</title>
</svelte:head>

{#if $page.data.notification}
	<p>{$page.data.notification}</p>
{/if}
<p>Welcome {username}</p>
<slot />
