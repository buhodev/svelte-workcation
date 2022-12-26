import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/locations`);
	const locations = await response.json();

	return {
		locations
	};
}) satisfies PageLoad;
