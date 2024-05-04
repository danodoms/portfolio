<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';
	import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
	import { text } from '@sveltejs/kit';

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

<div class="flex h-dvh items-center justify-between gap-4">
	<h1 class="text-6xl font-extrabold tracking-normal md:text-8xl">ABOUT</h1>
	<div class="flex flex-auto flex-col gap-4 p-4">
		<p>I</p>

		<!-- <p>I am a graphic designer</p>

		<p>I am a music producer</p> -->
	</div>
</div>
