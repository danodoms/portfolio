<script lang="ts">
	import type { project } from '$lib/types';
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';

	export let projects: project[];
</script>

<div class=" flex h-dvh flex-col justify-center gap-4 pt-20">
	<div class="flex flex-initial items-center">
		<h1 class="pr-4 text-3xl font-bold md:text-6xl">PROJECTS</h1>
		<Separator class="flex-auto" />
	</div>

	<div class="flex flex-wrap gap-4">
		<!-- RENDER EACH PROJECT -->
		{#each projects as project}
			<Card.Root class="flex-auto bg-cover">
				<!-- <div>
					<img src={project.images[0]} alt="" class="rounded" />
				</div> -->
				<Card.Header>
					<!-- RENDER TITLE -->
					<Card.Title><a href="/projects/{project.slug}">{project.title}</a></Card.Title>
					<!-- RENDER DESCRIPTION -->
					<Card.Description class="text-pretty">{project.description}</Card.Description>
				</Card.Header>
				<Card.Footer class=" flex flex-col items-start gap-2">
					<div class="flex flex-wrap gap-1">
						<!-- RENDER TECHNOLOGIES -->
						{#each project.technologies as technology}
							<Badge variant="outline">{technology}</Badge>
						{/each}
					</div>
					<!-- RENDER CONTRIBUTORS -->
					{#if project.contributors.length > 0}
						<Separator class="my-2" />
						<div class="flex items-center gap-4">
							<p class="text-xs font-light">OTHER CONTRIBUTORS:</p>
							{#each project.contributors as contributor}
								<a href={contributor.link} target="_blank">
									<p class="rounded p-1 text-sm outline outline-1 outline-secondary">
										{contributor.alias}
									</p></a
								>
							{/each}
						</div>
					{/if}
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</div>
