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

<div class="flex h-dvh flex-col content-center items-center justify-center gap-4 md:items-start">
	<div class="items-left mb-4 flex flex-col items-center justify-center md:items-start">
		<h1
			class="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-8xl"
		>
			danodoms.
		</h1>
		<!-- <h1 class="text-2xl font-bold tracking-tight lg:text-2xl">plan. design. create.</h1> -->
		<TextGenerateEffect words={subText} className="m-0 text-2xl font-bold" />
	</div>

	<CardContainer bind:isMouseEntered className="inter-var flex flex-auto">
		<CardBody
			className="flex-auto bg-card flex flex-wrap outline outline-1 outline-secondary p-4 rounded dark:hover:shadow-primary/[0.1] dark:hover:shadow-2xl items-center justify-center md:px-10"
		>
			<CardItem
				{isMouseEntered}
				translateZ="50"
				className="flex-initial md:flex-1 text-center md:text-left"
			>
				<!-- <p class="flex-auto text-pretty font-normal md:text-xl">
					"I particularly don't know how I'd describe myself, but I like creating functional and
					well-designed applications, dabbling with design, functionality, and databases"
				</p> -->
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
	</CardContainer>
</div>
