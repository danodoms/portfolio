<script lang="ts">
	import type { project } from '$lib/types';
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as icons from '../icons';

	const technologies = [
		icons.javascript,
		icons.mysql,
		icons.react,
		icons.svelte,
		icons.firebase,
		icons.java,
		icons.typescript,
		icons.tailwindcss,
		icons.laravel,
		icons.html,
		icons.linux,
		icons.git,
		icons.bootstrap
	];
</script>

<div class=" flex h-dvh flex-col justify-center gap-4 p-4 pt-20">
	<div class="flex flex-initial items-center">
		<h1 class="text-nowrap pr-4 text-2xl font-bold md:text-6xl">TECHNOLOGIES USED</h1>
		<Separator class="flex-auto" />
	</div>

	<div class="flex flex-wrap justify-start gap-4">
		{#each technologies as technology}
			<div class="size-20 flex-initial rounded p-4">
				{@html technology}
			</div>
		{/each}
	</div>
</div>
