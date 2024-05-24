<script lang="ts">
	import type { project } from '$lib/types';
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as icons from '../icons';

	const technologies_proficient = [
		icons.javascript,
		icons.typescript,
		icons.html,
		icons.tailwindcss,
		icons.mysql,
		icons.react,
		icons.svelte,
		icons.firebase,
		icons.java,
		icons.linux,
		icons.git,
		icons.bootstrap
	];

	const technologies_familiar = [
		icons.laravel,
		icons.python,
		icons.nextjs,
		icons.flutter,
		icons.express,
		icons.php,
		icons.wordpress,
		icons.mongodb
	];
</script>

<div class=" flex flex-col justify-center gap-4 p-4">
	<!-- <div class="flex flex-initial items-center">
		<h1 class="text-nowrap pr-4 text-2xl font-bold md:text-6xl">Technologies Used</h1>
		<Separator class="flex-auto" />
	</div> -->

	<h1
		class="HEADING mt-4 flex-initial text-center text-3xl font-extrabold tracking-normal md:text-7xl"
	>
		Technologies
	</h1>

	<!-- PROFICIENT -->
	<div class="mb-8 flex flex-col items-center gap-4 rounded-md">
		<h2 class="rounded-full font-semibold">Skilled with</h2>

		<div class="flex flex-wrap justify-around gap-4">
			{#each technologies_proficient as technology}
				<div class="size-20 flex-initial rounded p-4">
					{@html technology}
				</div>
			{/each}
		</div>
	</div>

	<!-- FAMILIAR -->
	<div class="flex flex-col items-center gap-4">
		<h2 class="rounded-full font-semibold">Currently learning</h2>
		<div class="flex flex-wrap justify-around gap-4">
			{#each technologies_familiar as technology}
				<div class="size-20 flex-initial rounded p-4">
					{@html technology}
				</div>
			{/each}
		</div>
	</div>
</div>
