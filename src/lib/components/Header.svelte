<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<nav class="backrop-blur flex flex-auto gap-4 border-b p-2">
	<div class="LEFT-SIDE"></div>

	<div class="RIGHT-SIDE ml-auto flex flex-initial items-center gap-4">
		<a href="/">Home</a>
		<Separator orientation="vertical" />
		<a href="/about">About</a>
		<Separator orientation="vertical" />
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</div>
</nav>
