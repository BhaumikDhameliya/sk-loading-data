<script>
	export let data;
	const username = data.username;
</script>

<p>Welcome {username}</p>
<slot />
