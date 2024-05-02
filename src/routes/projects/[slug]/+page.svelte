<script lang="ts">
	import Separator from '@/components/ui/separator/separator.svelte';
	import type { project } from '$lib/types';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	export let data: project;
</script>

<div class=" flex h-dvh flex-col justify-center gap-4 pt-20">
	<div class="flex flex-initial items-center">
		<h1 class="flex-4 pr-4 text-3xl font-bold md:text-5xl">{data.title}</h1>
		<Separator class="flex-1" />
	</div>
	<Carousel.Root class="flex-initial">
		<Carousel.Content class="">
			{#each data.images as image}
				<Carousel.Item class=""><img src={image} alt="project screenshot" /></Carousel.Item>
			{/each}
		</Carousel.Content>
		<!-- <Carousel.Previous />
		<Carousel.Next /> -->
	</Carousel.Root>

	<div class="flex-auto flex-col gap-4">
		{#each data.longDescription as description}
			<div class="flex-auto">
				<p>{description}</p>
			</div>
		{/each}
	</div>
</div>
