<script lang="ts">
	import type { project } from '$lib/types';
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { Button } from '$lib/components/ui/MovingBorder';
	import { SquareArrowOutUpRight, Github, ArrowUpRight, Check} from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	export let projects: project[];
	export let showTitle: boolean;
	export let title: string;
</script>

<!-- add h-dvh pt-20 to restore to original sizing -->
<div class=" flex flex-col justify-center gap-4">
	{#if showTitle}
		<div class="flex flex-initial items-center">
			<h1 class="pr-4 text-3xl font-bold md:text-6xl">{title}</h1>
			<Separator class="flex-auto" />
		</div>
	{/if}

	<div class="flex flex-wrap gap-4">
		<!-- RENDER EACH PROJECT -->
		{#each projects as project}
			<Card.Root class="flex-auto  bg-cover">
				<!-- TOP CONTENT -->
				<!-- RENDER IMAGE/S -->
				<div class="mb-2">
					<img class="rounded-t-md" src={project.images[0]} alt="" />
				</div>

				<!-- BOTTOM CONTENT -->
				<Card.Header>
					<div class="flex flex-wrap justify-between gap-2">
						<div class="flex items-center gap-2">
							<!-- RENDER TITLE -->
							<Tooltip.Root>
								<Tooltip.Trigger>
									<Card.Title>
										<a href="/projects/{project.slug}">{project.title}</a>
									</Card.Title>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<p>View project details</p>
								</Tooltip.Content>
							</Tooltip.Root>

							<!-- RENDER SHOW DEMO -->
							{#if project.link}
								<Tooltip.Root>
									<Tooltip.Trigger>
										<a href={project.link} target="_blank"><ArrowUpRight size="16" /></a>
									</Tooltip.Trigger>
									<Tooltip.Content>
										<p>Show Demo</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/if}
						</div>

						<div class="flex gap-4">
							<!-- RENDER VIEW SOURCE CODE -->
							{#if project.repo}
								<Tooltip.Root>
									<Tooltip.Trigger
									><a href={project.repo} target="_blank"
									><Github size={16} class="ICON-HOVER " /></a
									></Tooltip.Trigger
									>
									<Tooltip.Content>
										<p>View Source Code</p>
									</Tooltip.Content>
								</Tooltip.Root>
							{/if}
						</div>
					</div>

					<!-- RENDER DESCRIPTION -->
					<Card.Description class="text-pretty">{project.description}</Card.Description>

					<div class="flex gap-4 flex-col pt-4">
						{#each project.impacts as impact}
							<div class="flex gap-4">
								<Check class="ICON-HOVER " />
								<p class="">{impact}</p>
							</div>

						{/each}
					</div>
				</Card.Header>

				<Card.Footer class=" flex flex-col items-start gap-2">
					<div class="flex flex-wrap gap-1">
						<!-- RENDER TECHNOLOGIES -->
						{#if project.technologies.length > 0}
							{#each project.technologies as technology}
								<Badge variant="outline">{technology}</Badge>
							{/each}
						{/if}
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

<style>
    .ICON-HOVER:hover {
        @apply outline outline-1 outline-secondary hover:size-20;
    }
</style>
