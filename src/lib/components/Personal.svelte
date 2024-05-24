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

<div class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 p-4 outline-1">
	<h1
		class="HEADING mt-4 flex-initial text-center text-3xl font-extrabold tracking-normal md:text-7xl"
	>
		More about me
	</h1>

	<div class="flex flex-initial flex-col gap-4 p-4">
		<p class="text-justify indent-10 text-lg tracking-wide">
			Before being introduced into the world of development, I am fond of graphic design and
			developed an eye for design, although design is very subjective.
		</p>

		<p class="text-justify indent-10 text-lg tracking-wide">
			I also produce and write music specializing in EDM with songs featured on Spotify and Apple
			Music Editorial playlists.
		</p>
	</div>
</div>
