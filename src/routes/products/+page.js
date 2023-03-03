import Product from './product.svelte';

export const load = async (loadEvent) => {
	console.log('Load function called in page.js');
	const { data, parent } = loadEvent;
	const parentData = await parent();
	const username = parentData.username;
	return { ...data, username, Component: Product };
};
