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
		Let's Talk
	</h1>

	<div class="flex flex-initial flex-col gap-4 p-4">
		<p class="text-justify indent-10 text-lg font-semibold tracking-wide">
			Have a project in mind? I'm always excited to collaborate on new and exciting ventures. Reach
			out to me, and let's create something amazing!
		</p>

		<button
			class="animate-shimmer inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
		>
			Get in touch
		</button>
	</div>
</div>
