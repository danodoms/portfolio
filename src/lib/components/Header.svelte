<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import {
		ChevronDown,
		Menu,
		Home,
		Info,
		Code,
		Briefcase,
		ArrowDownRight,
		ArrowDownLeft
	} from 'lucide-svelte';
	import { fly, slide, crossfade } from 'svelte/transition';
	import { quintOut, cubicInOut, cubicIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { GradientAnimation } from '$lib/components/ui/GradientAnimation';

	let showNav = false;

	function handleShowNav() {
		showNav = !showNav;
		console.log('fsa');
		event.stopPropagation();
	}

	function handleClickOutside(event: any) {
		// if (showNav && !event.target.closest('.container')) {
		showNav = false;
		// }
	}

	onMount(() => {
		// Add a click event listener to the document
		document.addEventListener('click', handleClickOutside);

		// Clean up the event listener when the component is destroyed
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav
	class="fixed top-0 z-50 flex w-full flex-auto gap-4 bg-background bg-opacity-50 backdrop-blur-lg"
>
	<div class="LEFT-SIDE flex flex-auto">
		<a href="/" class="cursor-pointer">
			<p class="p-3 text-xl font-extrabold">danodoms.</p>
		</a>

		<div class="hidden md:flex">
			<a href="/" class="NAV-BTN">
				<p>Home</p>
				<ArrowDownRight size={12} />
			</a>

			<a href="/about" class="NAV-BTN">
				<p>About</p>
				<ArrowDownRight size={12} />
			</a>

			<a href="/projects" class="NAV-BTN">
				<p>Projects</p>
				<ArrowDownRight size={12} />
			</a>

			<a href="/services" class="NAV-BTN">
				<p>Services</p>
				<ArrowDownRight size={12} />
			</a>
		</div>

		{#if showNav}
			<!-- OLD NAV -->
			<!-- <div
				class="absolute right-0 top-14 mr-2 flex flex-col items-start gap-4 rounded bg-card p-4 outline outline-1 outline-secondary"
				transition:slide={{
					delay: 250,
					duration: 150,
					// x: 0,
					// y: -100,
					// opacity: 0.5,
					easing: cubicIn
				}}
			>
				<a href="/" class=" flex items-end justify-around gap-2 text-sm font-bold">
					<Home />
					<p>Home</p>
				</a>
				<a href="/about" class="flex items-end gap-2 text-sm font-bold">
					<Info />
					<p>About</p>
				</a>
				<a href="/projects" class="flex items-end gap-2 text-sm font-bold"
					><Code />
					<p>Projects</p>
				</a>
				<a href="/services" class="flex items-end gap-2 text-sm font-bold">
					<Briefcase />
					<p>Services</p>
				</a>
			</div> -->

			<div
				class="top-14 flex w-full flex-col items-center gap-2 p-4 pt-8 backdrop-blur-lg"
				transition:slide={{
					delay: 250,
					duration: 150,
					// x: 0,
					// y: -100,
					// opacity: 0.5,
					easing: cubicIn
				}}
			>
				<a href="/" class="NAV-BTN">
					<p>Home</p>
					<ArrowDownRight size={12} />
				</a>

				<a href="/about" class="NAV-BTN">
					<p>About</p>
					<ArrowDownRight size={12} />
				</a>

				<a href="/projects" class="NAV-BTN">
					<p>Projects</p>
					<ArrowDownRight size={12} />
				</a>

				<a href="/services" class="NAV-BTN">
					<p>Services</p>
					<ArrowDownRight size={12} />
				</a>
			</div>
		{/if}
	</div>

	<div class="RIGHT-SIDE relative ml-auto flex flex-initial items-center">
		<div class="hidden md:flex">
			<!-- <a href="/" class="NAV-BTN">
				<Home size={18} />
				<p>Home</p>
			</a>
			<a href="/about" class="NAV-BTN">
				<Info size={18} />
				<p>About</p>
			</a>
			<a href="/projects" class="NAV-BTN">
				<Code size={18} />
				<p>Projects</p>
			</a>
			<a href="/services" class="NAV-BTN">
				<Briefcase size={18} />
				<p>Services</p>
			</a> -->

			<div class="NAV-BTN cursor-pointer" on:click={toggleMode}>
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</div>
			<!-- <Button on:click={toggleMode} variant="ghost" size="icon">
				
			</Button> -->
		</div>

		<div class="flex cursor-pointer rounded p-2 md:hidden" on:click={handleShowNav}>
			<ArrowDownLeft class="icon" />
			<p class="font-bold">Menu</p>
		</div>
	</div>
</nav>

<style>
	.NAV-BTN {
		@apply flex items-center gap-2 p-4 text-sm font-semibold outline-1 outline-secondary transition-all duration-300 ease-in-out hover:bg-primary hover:text-secondary;
	}
</style>
