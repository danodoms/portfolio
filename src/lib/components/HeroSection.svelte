<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
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

	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';

	let isMouseEntered = false;
</script>

<!-- <DotBackground> -->
<div class="flex h-dvh flex-col content-center items-center justify-center gap-4 md:items-start">
	<div class="items-left mb-4 flex flex-col justify-center">
		<!-- <TypewriterEffectSmooth words={heading} /> -->
		<h1 class="text-5xl font-extrabold tracking-tight lg:text-8xl">HI IM DOM.</h1>
		<h1 class="text-2xl font-semibold tracking-tight lg:text-2xl">plan. design. create.</h1>
	</div>

	<!-- <div
		class="flex flex-auto items-center rounded p-4 outline outline-1 outline-secondary backdrop-blur-sm"
	> -->
	<CardContainer bind:isMouseEntered className="inter-var flex flex-auto">
		<CardBody
			className="flex-auto flex flex-wrap outline outline-1 outline-secondary p-4 rounded dark:hover:shadow-primary/[0.1] dark:hover:shadow-2xl items-center justify-center"
		>
			<CardItem
				{isMouseEntered}
				translateZ="50"
				className="flex-initial md:flex-1 text-center md:text-left"
			>
				<p class="flex-auto text-pretty font-normal md:text-xl">
					"I particularly don't know how I'd describe myself, but I like creating functional and
					well-designed applications, dabbling with design, functionality, and databases"
				</p>
			</CardItem>
			<CardItem {isMouseEntered} translateZ="100" className="flex-initial md:flex-4">
				<img
					class="m-2 size-24 self-center rounded-full border md:size-32"
					src="https://avatars.githubusercontent.com/u/116992939?v=4"
					alt=""
				/>
			</CardItem>
		</CardBody>
	</CardContainer>
	<!-- </div> -->
</div>
<!-- </DotBackground> -->
