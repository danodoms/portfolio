<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import HeroSection from '@/components/HeroSection.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import Projects from '@/components/Projects.svelte';
	import Technologies from '@/components/Technologies.svelte';
	import { projects } from '$lib/data';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
</script>

<div class="flex flex-col justify-center gap-4 p-4">
	<HeroSection />

	<Projects {projects} />

	<Technologies />
</div>
