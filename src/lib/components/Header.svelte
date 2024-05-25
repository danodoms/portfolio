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
	import * as Sheet from '$lib/components/ui/sheet';
</script>

<nav
	class=" fixed top-0 z-50 flex w-full flex-auto gap-4 bg-background bg-opacity-50 backdrop-blur-lg"
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
	</div>

	<div class="RIGHT-SIDE relative ml-auto flex flex-initial items-center">
		<div class="hidden md:flex">
			<div class="NAV-BTN cursor-pointer" on:click={toggleMode}>
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</div>
		</div>

		<Sheet.Root>
			<Sheet.Trigger>
				<div class="flex cursor-pointer rounded p-2 md:hidden">
					<ArrowDownLeft class="icon" />
					<p class="font-bold uppercase">Menu</p>
				</div>
			</Sheet.Trigger>
			<Sheet.Content side="top">
				<Sheet.Header>
					<Sheet.Title class="font-extrabold">danodoms.</Sheet.Title>
					<Sheet.Description class="align-center flex flex-col justify-end">
						<a href="/" class="NAV-BTN">
							<p>Home</p>
							<!-- <ArrowDownRight size={12} /> -->
						</a>

						<a href="/about" class="NAV-BTN">
							<p>About</p>
							<!-- <ArrowDownRight size={12} /> -->
						</a>

						<a href="/projects" class="NAV-BTN">
							<p>Projects</p>
							<!-- <ArrowDownRight size={12} /> -->
						</a>

						<a href="/services" class="NAV-BTN">
							<p>Services</p>
							<!-- <ArrowDownRight size={12} /> -->
						</a>

						<div class="NAV-BTN cursor-pointer" on:click={toggleMode}>
							<Sun
								class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
							/>
							<Moon
								class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</div>
					</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>

<style>
	/* .NAV-BTN {
		@apply flex items-center gap-2 p-4 text-sm font-semibold outline-1 outline-secondary transition-all duration-300 ease-in-out hover:bg-primary hover:text-secondary;
	} */

	.NAV-BTN {
		@apply flex w-full items-center justify-center gap-2 p-4 align-middle text-sm font-bold outline-1 outline-secondary transition-all duration-300 ease-in-out hover:bg-primary hover:text-secondary;
	}
</style>
