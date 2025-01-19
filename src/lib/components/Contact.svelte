<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './ui/MovingBorder/Button.svelte';


	onMount(() => {
		// animate('.HEADING', { x: '200px' }, { duration: 1 });
	});
</script>

<div
	class="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-4 p-4 outline-1"
>
	<h1
		class="HEADING mt-4 flex-initial text-center text-3xl font-extrabold tracking-normal md:text-7xl"
	>
		Let's Talk
	</h1>

	<div class="flex flex-initial flex-col gap-4 p-4">
		<p class="text-balance text-center text-lg font-semibold tracking-wide md:text-2xl">
			Got a project in mind? I'm eager to collaborate on exciting new ventures. Reach out and let's
			bring your vision to life!
		</p>

		<!-- <a
			href="https://www.facebook.com/doms.dano"
			target="_blank"
			class="animate-shimmer inline-flex h-12 cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
		>
			Get in touch
		</a> -->

		<a href="https://www.facebook.com/doms.dano" class="flex" target="_blank">
			<Button
				borderRadius="0.5rem"
				className="flex-auto animate-shimmer inline-flex h-12 cursor-pointer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>Get in touch
			</Button>
		</a>
	</div>
</div>
