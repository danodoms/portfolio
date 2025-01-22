<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import HeroSection from '@/components/HeroSection.svelte';
	import NotableProjects from '@/components/NotableProjects.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Projects from '@/components/Projects.svelte';
	import Technologies from '@/components/Technologies.svelte';
	import { projects, practiceProjects, notableProjects } from '$lib/data';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Pin, FlaskConical, ArrowRightIcon, ChevronDown, ChevronUp } from 'lucide-svelte';
	import About from '@/components/About.svelte';
	import Footer from '@/components/Footer.svelte';
	import Testimonials from '@/components/Testimonials.svelte';
	import Personal from '@/components/Personal.svelte';
	import Contact from '@/components/Contact.svelte';

	function togglePracticeProjects() {
		showPracticeProjects = !showPracticeProjects;
	}

	let showPracticeProjects = false;
</script>

<div class=" flex flex-col justify-center gap-4">
	<HeroSection />

	<div class="mx-auto flex max-w-7xl flex-col justify-center gap-20">


		<!--<About />-->

		<!-- PROJECTS SECTION -->
		<div class="flex flex-initial flex-col content-center gap-2 p-4">
			<h1 class="mb-4 flex-1 pr-4 text-center text-3xl font-bold md:text-6xl">projects i've worked on</h1>

			<NotableProjects showTitle={false} title={"Notable Projects"} projects={notableProjects}/>
			<!-- <Separator class="flex-2" /> -->



			<!-- <div class="flex items-center space-x-2">
				<Switch id="airplane-mode" on:click={togglePracticeProjects} />
				<Label for="airplane-mode" class="font-bold">Show Practice Projects</Label>
			</div> -->

			{#if showPracticeProjects}
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
			{/if}


			<div class="flex flex-col justify-center items-center cursor-pointer hover:opacity-100 opacity-50 transition-all py-4" on:click={() => togglePracticeProjects()}>
				{#if showPracticeProjects}
					<p class="text-center font-medium">Show less</p>
					<ChevronUp/>
				{:else}
					<p class="text-center font-medium">Show more</p>
					<ChevronDown/>
				{/if}
			</div>
		</div>

		<Testimonials />
		<Technologies />
		<Personal />
		<Contact />
	</div>

	<Footer />
</div>
