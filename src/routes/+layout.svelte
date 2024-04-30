<script>
	import '../app.pcss';
	import Header from '@/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Header />

<section class="mt-14">
	<slot></slot>
</section>
