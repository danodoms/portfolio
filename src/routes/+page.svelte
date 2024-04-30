<script>
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
</script>

<div class="flex justify-center gap-4 p-4">
	<div class="flex content-center gap-4">
		<div class="items-left flex flex-auto flex-col">
			<h1 class="text-5xl font-extrabold tracking-tight lg:text-8xl">HI IM DOM.</h1>
			<h1 class="text-2xl font-semibold tracking-tight lg:text-2xl">plan. design. create.</h1>
		</div>

		<Separator orientation="vertical" class="flex-initial" />

		<img
			class="m-2 size-32 self-center rounded-full border"
			src="https://avatars.githubusercontent.com/u/116992939?v=4"
			alt=""
		/>
	</div>
</div>
