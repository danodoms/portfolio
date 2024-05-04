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

<div class="flex h-dvh flex-wrap items-center justify-between gap-4">
	<h1 class="text-6xl font-extrabold tracking-normal md:text-8xl">ABOUT</h1>
	<div class="flex flex-auto flex-col gap-4 p-4">
		<p class="text-justify indent-10 text-lg font-bold">
			"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
			and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
			cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those
			who fail in their duty through weakness of will, which is the same as saying through shrinking
			from toil and pain.
		</p>

		<p class="text-lg font-bold">
			"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
			and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
			cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those
			who fail in their duty through weakness of will, which is the same as saying through shrinking
			from toil and pain.
		</p>
	</div>
</div>
