<script lang="ts">
	import { cn } from '@/utils';
	import MovingBorder from './MovingBorder.svelte';

	export let borderRadius: string | undefined = '1.75rem';
	export let containerClassName: string | undefined = undefined;
	export let borderClassName: string | undefined = undefined;
	export let duration: number | undefined = 2000;
	export let className: string | undefined = undefined;
</script>

<button
	class={cn('relative overflow-hidden p-2 text-xl ', containerClassName)}
	style={`border-radius: ${borderRadius};`}
	{...$$props}
>
	<div class="absolute inset-0" style={`border-radius: calc(${borderRadius} * 0.96);`}>
		<MovingBorder {duration} rx="30%" ry="30%">
			<div
				class={cn(
					'h-1 w-1 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] p-6 opacity-[0.8]',
					borderClassName
				)}
			/>
		</MovingBorder>
	</div>
	<div
		class={cn(
			'relative flex h-full w-full items-center justify-center p-2 backdrop-blur-xl',
			className
		)}
		style={`border-radius: calc(${borderRadius} * 0.96);`}
	>
		<slot />
	</div>
</button>
