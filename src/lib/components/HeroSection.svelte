<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';
	import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
	import { text } from '@sveltejs/kit';
	import { Copyright, ArrowUpRight, MoveRight } from 'lucide-svelte';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import { Spotlight } from '$lib/components/ui/Spotlight';
	import { GradientAnimation } from '$lib/components/ui/GradientAnimation';
	import { Button } from '$lib/components/ui/button';

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

	const subText = 'plan. design. create.';
	const shortBio = `"I like creating functional and
well-designed applications, dabbling with design, functionality, and databases."`;

	let isMouseEntered = false;
</script>

<DotBackground>
	<div class="flex h-dvh flex-col content-center items-center justify-center gap-2 p-4">
		<div class="items-left mb-4 flex flex-col items-center justify-center">
			<GradientAnimation
				size="25%"
				containerClassName="mb-4 size-auto p-4 rounded-full bg-clip-text text-6xl md:text-8xl font-extrabold tracking-tight"
			>
				<h1 class="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
					danodoms.
				</h1>
			</GradientAnimation>

			<!-- <h1 class="text-2xl font-bold tracking-tight lg:text-2xl">plan. design. create.</h1> -->
			<div class="flex gap-2">
				<TextGenerateEffect words={subText} className="m-0 text-2xl font-bold" />
				<div
					class="  text-invisible flex content-center items-center gap-2 rounded-full bg-primary bg-clip-text px-4 font-extrabold tracking-wide outline outline-1"
				>
					<!-- <Copyright /> -->
					2024
				</div>
			</div>
		</div>

		<!-- <CardContainer bind:isMouseEntered className="inter-var flex flex-auto">
			<CardBody
				className="flex-auto bg-card flex flex-wrap outline outline-1 outline-secondary p-4 rounded dark:hover:shadow-primary/[0.1] dark:hover:shadow-2xl items-center justify-center md:px-10"
			>
				<CardItem
					{isMouseEntered}
					translateZ="50"
					className="flex-initial md:flex-1 text-center md:text-left"
				>
					<TextGenerateEffect words={shortBio} className="m-0 md:text-xl font-normal italic" />
				</CardItem>
				<CardItem {isMouseEntered} translateZ="100" className="flex-initial md:flex-4">
					<img
						class="m-2 size-24 self-center rounded-full border md:size-32"
						src="https://avatars.githubusercontent.com/u/116992939?v=4"
						alt=""
					/>
				</CardItem>
			</CardBody>
		</CardContainer> -->

		<p class="justify-center text-pretty text-center font-thin md:w-1/2 lg:text-3xl">
			I like creating functional and well-designed applications, dabbling with design,
			functionality, and databases.
		</p>
		<Button variant="outline" class="mt-4 flex gap-2 text-xl font-semibold"
			>Get in touch<MoveRight /></Button
		>
	</div>
</DotBackground>
