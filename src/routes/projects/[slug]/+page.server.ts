import { error } from '@sveltejs/kit';
import type { project } from '@/types.js';
import { projects } from '$lib/data';

export function load({ params }) {
	const project: project | undefined = projects.find((project) => project.slug === params.slug);
	console.log('haahah');

	console.log('paramas.sluggg ', params.slug);

	if (!project) throw error(404);

	return project;
}
