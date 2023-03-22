import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: ['/', '/products', '/products/1', '/products/2']
		}
	}
};

export default config;
