<script>
	import '../app.pcss';
	import Header from '@/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<Header />
<ModeWatcher />

<section class="md:px-40">
	<slot></slot>
</section>
