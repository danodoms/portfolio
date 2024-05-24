<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';
	import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
	import { text } from '@sveltejs/kit';
	import { Copyright, ArrowUpRight, MoveRight, MapPin } from 'lucide-svelte';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import { Spotlight } from '$lib/components/ui/Spotlight';
	import { GradientAnimation } from '$lib/components/ui/GradientAnimation';
	import { Button } from '$lib/components/ui/button';
	import { AnimatedTooltip } from '$lib/components/ui/AnimatedTooltip';

	import * as icons from '$lib/icons';

	const heading = [
		{
			text: 'HI'
		},
		{
			text: 'IM'
		},
		{
			text: 'DOM.'
		}
	];

	const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 4,
			name: 'Emily Davis',
			designation: 'UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 5,
			name: 'Tyler Durden',
			designation: 'Soap Developer',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
		},
		{
			id: 6,
			name: 'Dora',
			designation: 'The Explorer',
			image:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
		}
	];

	const technologies = [
		{
			id: 1,
			name: 'Javascript',
			designation: '',
			image: icons.javascript
		}
	];

	const subText = 'i build things for the web.';
	const shortBio = `"I like creating functional and
well-designed applications, dabbling with design, functionality, and databases."`;

	let isMouseEntered = false;
</script>

<!-- <DotBackground> -->

<div class="flex h-screen flex-wrap content-center items-center justify-center gap-2 p-4">
	<div class="items-left justify-left mb-4 flex flex-col items-center outline-1 md:items-start">
		<!-- <p class="m-0 text-2xl font-bold">hello i'm</p> -->
		<h1
			class="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-8xl"
		>
			danodoms.
		</h1>

		<!-- <h1 class="text-2xl font-bold tracking-tight lg:text-2xl">plan. design. create.</h1> -->
		<div class="flex gap-2">
			<TextGenerateEffect words={subText} className="m-0 text-md md:text-3xl font-bold" />
		</div>

		<div class="mt-2 flex content-center items-center gap-2">
			<MapPin />
			<p class="text-sm font-bold">Davao, Philippines</p>
		</div>

		<p class="md:text-normal mt-4 hidden md:inline-block">
			I like creating functional and well-designed applications, <br /> dabbling with design, functionality,
			and databases.
		</p>

		<div class="mt-4 flex flex-initial flex-wrap items-center gap-8">
			<!-- <AnimatedTooltip items={people} /> -->
			<Button variant="outline" class="gap-2 text-xl font-semibold">
				Get in touch<MoveRight />
			</Button>
		</div>
	</div>

	<div class="flex flex-wrap items-center justify-center gap-2">
		<div class="flex-initial">
			<img
				class="right-0 m-2 size-36 rounded-full p-1 outline outline-1 outline-secondary grayscale md:relative md:size-52"
				src="https://avatars.githubusercontent.com/u/165539900?v=4"
				alt=""
			/>

			<!-- <img class="h-96 outline outline-1" src="./danodoms.png" alt="" /> -->
		</div>
	</div>
</div>
<!-- </DotBackground> -->
