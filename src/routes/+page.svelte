<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import HeroSection from '@/components/HeroSection.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Projects from '@/components/Projects.svelte';
	import Technologies from '@/components/Technologies.svelte';
	import { projects, practiceProjects } from '$lib/data';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Pin, FlaskConical } from 'lucide-svelte';
	import About from '@/components/About.svelte';

	function togglePracticeProjects() {
		showPracticeProjects = !showPracticeProjects;
	}

	let showPracticeProjects = false;
</script>

<div class="flex flex-col justify-center gap-4 p-4">
	<HeroSection />
	<About />

	<div class="flex flex-initial flex-col content-center gap-2">
		<h1 class="flex-1 pr-4 text-3xl font-bold md:text-6xl">PROJECTS</h1>
		<!-- <Separator class="flex-2" /> -->

		<!-- <div class="flex items-center space-x-2">
			<Switch id="airplane-mode" on:click={togglePracticeProjects} />
			<Label for="airplane-mode" class="font-bold">Show Practice Projects</Label>
		</div> -->
		<Tabs.Root value="pinned" class="flex-auto">
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="pinned">
					<Pin size={14} class="mr-1" />Pinned</Tabs.Trigger
				>
				<Tabs.Trigger value="practice">
					<FlaskConical size={14} class="mr-1" />Practice</Tabs.Trigger
				>
			</Tabs.List>
			<Tabs.Content value="pinned" class="flex-auto">
				<Projects showTitle={false} title={'PROJECTS'} {projects} />
			</Tabs.Content>

			<Tabs.Content value="practice" class="flex-auto">
				<Projects showTitle={false} title={'PROJECTS'} projects={practiceProjects} />
			</Tabs.Content>
		</Tabs.Root>
	</div>

	<Technologies />
</div>
