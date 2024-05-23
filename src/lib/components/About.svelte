<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';
	import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
	import { text } from '@sveltejs/kit';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
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

	onMount(() => {
		// animate('.HEADING', { x: '200px' }, { duration: 1 });
	});
</script>

<div class="flex h-dvh flex-col items-center justify-center gap-4 p-4 outline-1">
	<h1 class="HEADING flex-initial text-6xl font-extrabold tracking-normal md:text-8xl">ABOUT</h1>

	<div class="flex flex-initial flex-col gap-4 p-4">
		<p class="text-justify indent-10 text-lg tracking-wide">
			I am a web developer, I find learning about web technologies fun, challenging and rewarding.
		</p>

		<p class="text-justify indent-10 text-lg tracking-wide">
			Currently, I'm in my 3rd year of college taking up my Bachelor's in Information Technology.
		</p>
	</div>
</div>
