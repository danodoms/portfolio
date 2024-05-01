<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';

	interface project {
		title: string;
		description: string;
		link: string;
		repo: string;
		images: string[];
		technologies: string[];
		contributors: contributor[];
	}

	interface contributor {
		alias: string;
		name: string;
		link: string;
	}

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
	<div class="flex content-center justify-center gap-4">
		<div class="items-left flex flex-col justify-center">
			<h1 class="text-5xl font-extrabold tracking-tight lg:text-8xl">HI IM DOM.</h1>
			<h1 class="text-2xl font-semibold tracking-tight lg:text-2xl">plan. design. create.</h1>
		</div>

		<img
			class="m-2 size-32 self-center rounded-full border"
			src="https://avatars.githubusercontent.com/u/116992939?v=4"
			alt=""
		/>
	</div>

	<div class="flex flex-auto items-center">
		<p class="flex-auto text-pretty font-normal">
			"I particularly don't know how I'd describe myself, but I like creating functional and
			well-designed applications, dabbling with design, functionality, and databases"
		</p>
	</div>

	<div class="flex flex-auto items-center">
		<Separator class="flex-auto" />
		<h1 class="flex-auto px-4 font-bold">PROJECTS</h1>
		<Separator class="flex-auto" />
	</div>

	<!-- PROJECT SECTION -->
	<!-- PROJECT SECTION -->
	<!-- PROJECT SECTION -->
	<div class="flex flex-wrap gap-4">
		<!-- RENDER EACH PROJECT -->
		{#each projects as project}
			<Card.Root class="flex-auto bg-contain bg-cover">
				<div>
					<img src={project.images[0]} alt="" class="rounded" />
				</div>
				<Card.Header>
					<!-- RENDER TITLE -->
					<Card.Title>{project.title}</Card.Title>
					<!-- RENDER DESCRIPTION -->
					<Card.Description class="text-pretty">{project.description}</Card.Description>
				</Card.Header>
				<Card.Footer class=" flex flex-wrap gap-2">
					<div>
						<!-- RENDER TECHNOLOGIES -->
						{#each project.technologies as technology}
							<Badge variant="outline">{technology}</Badge>
						{/each}
					</div>
					<!-- RENDER CONTRIBUTORS -->
					{#if project.contributors.length > 0}
						<div>
							<p class="text-xs font-bold">OTHER CONTRIBUTORS</p>
							{#each project.contributors as contributor}
								<a href={contributor.link} target="_blank"> <p>{contributor.alias}</p></a>
							{/each}
						</div>
					{/if}
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
