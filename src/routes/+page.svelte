<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import HeroSection from '@/components/HeroSection.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import type { project, contributor } from '$lib/types';
	import Projects from '@/components/Projects.svelte';
	import Technologies from '@/components/Technologies.svelte';

	const projects: project[] = [
		{
			title: 'Find My Anime',
			description:
				'Anime recommendation web-app that suggests animes based on your already fave animes',
			link: '',
			repo: '',
			images: ['./projects/find-my-anime/1.png'],
			technologies: ['React', 'Firebase', 'Daisy UI'],
			contributors: []
		},
		{
			title: 'Fingerprint Attendance System',
			description: 'Fingerprint based attendance system that generates Daily Time Record',
			link: '',
			repo: '',
			images: ['./projects/attendance-system/1.png'],
			technologies: ['Java', 'JavaFX', 'MySQL', 'Digital Persona API'],
			contributors: [
				{
					alias: '@henrytorlao',
					name: 'Henry Torlao Jr.',
					link: 'https://github.com/GrinHornet'
				}
			]
		},
		{
			title: 'My Portfolio',
			description: 'The personal portfolio website that you are currently on',
			link: '',
			repo: '',
			images: [],
			technologies: ['SvelteKit', 'shadcn-svelte'],
			contributors: []
		}
	];
</script>

<div class="flex flex-col justify-center gap-4 p-4">
	<HeroSection />

	<Projects {projects} />

	<Technologies />
</div>
