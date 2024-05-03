<script lang="ts">
	import { cn } from '@/utils';

	export let className: string;
</script>

<div class={cn(' [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]', className)}>
	<slot />
</div>
