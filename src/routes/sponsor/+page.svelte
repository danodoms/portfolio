<script lang="ts">
	import confetti from 'canvas-confetti';
	import QrCode from 'svelte-qrcode';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils'; // or `import { clsx as cn } from 'clsx'`
	import { MoveLeftIcon } from 'lucide-svelte';

	type Payment = {
		name: string;
		textColor: string; // Tailwind class like 'bg-blue-500'
		bgColor: string;
		accountName: string;
		accountNumber: string;
		qrData: string;
	};

	let selectedMethod: Payment | null = null;

	const methods: Payment[] = [
		{
			name: 'GCash',
			textColor: 'text-blue-500',
			bgColor: 'bg-blue-500',
			accountName: 'DO******R J* D.',
			accountNumber: '090• ••••367',
			qrData:
				'00020101021127830012com.p2pqrpay0111GXCHPHM2XXX02089996440303152170200000006560417DWQM4TK3JDNY4XKXX5204601653036085802PH5915DO******R J* D.6009Poblacion6104123463048325'
		},
		{
			name: 'Seabank',
			textColor: 'text-orange-500',
			bgColor: 'bg-orange-500',
			accountName: 'DOMINADOR DANO JR',
			accountNumber: 'SeaBank(****1340)',
			qrData:
				'00020101021127580012com.p2pqrpay0111LAUIPHM2XXX0208999644030411167673813405204601653036085802PH5912DOMINADOR D.6009Pagsanjan6304AEA6'
		},
		{
			name: 'maya',
			textColor: 'text-green-500',
			bgColor: 'bg-green-500',
			accountName: 'DOMINADOR JR DANO',
			accountNumber: '+63 *** *** 4367',
			qrData:
				'00020101021127780012com.p2pqrpay0111PAPHPHM1XXX02089996440304126390625143670515+63-906-25143675204601653036085802PH5917DOMINADOR JR DANO6005Lupon6304E043'
		}
	];

	function handleSelect(method: Payment) {
		selectedMethod = method;

		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 }
		});
	}

	function handleBack() {
		selectedMethod = null;
	}
</script>

<div class="flex h-screen flex-col items-center justify-center p-4 text-center">
	{#if selectedMethod}
		<div class={cn('qr-wrapper flex flex-col items-center gap-4')}>
			<h2 class={cn('text-2xl font-bold tracking-tighter ', selectedMethod.textColor)}>
				{selectedMethod.name}
			</h2>

			<div class="container -m-20 flex scale-50 flex-col items-center justify-center">
				<QrCode value={selectedMethod.qrData} class="border border-blue-500" size="500" />
			</div>

			<div>
				<p class="font-semibold">{selectedMethod.accountName}</p>
				<p>{selectedMethod.accountNumber}</p>
			</div>

			<Button on:click={handleBack} class="mt-4 gap-2 rounded-xl px-8 py-2">
				<MoveLeftIcon />
				Back</Button
			>
		</div>
	{:else}
		<div class="w-full max-w-md">
			<h1 class="text-3xl font-extrabold tracking-tight">Sponsor</h1>
			<h2 class="mb-4 font-medium opacity-60">Select gateway</h2>

			<div class="flex flex-col items-center gap-2">
				{#each methods as method}
					<Button
						on:click={() => handleSelect(method)}
						class={cn(
							'mask-t-from-50% w-full max-w-40 rounded-xl px-8 py-6 text-lg font-bold text-white',
							method.bgColor
						)}
					>
						{method.name}
					</Button>
				{/each}
			</div>
		</div>
	{/if}
</div>
