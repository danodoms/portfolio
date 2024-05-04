<script>
	import '../app.pcss';
	import Header from '@/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
</script>

<Header />
<ModeWatcher />

<!-- <DotBackground> -->
<!-- <section class="md:px-40"> -->
<section class="">
	<slot></slot>
</section>
<!-- </DotBackground> -->
