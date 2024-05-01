<script>
	import * as Card from '$lib/components/ui/card';
	import Separator from '@/components/ui/separator/separator.svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="flex flex-col justify-center gap-4 p-4">
	<div class="flex content-center justify-center gap-4">
		<div class="items-left flex flex-col justify-center">
			<h1 class="text-5xl font-extrabold tracking-tight lg:text-8xl">HI IM DOM.</h1>
			<h1 class="text-2xl font-semibold tracking-tight lg:text-2xl">plan. design. create.</h1>
		</div>

		<img
			class="m-2 size-32 self-center rounded-full border"
			src="https://avatars.githubusercontent.com/u/116992939?v=4"
			alt=""
		/>
	</div>

	<div class="flex flex-auto items-center">
		<p class="flex-auto text-pretty font-normal">
			"I particularly don't know how I'd describe myself, but I like creating functional and
			well-designed applications, dabbling with design, functionality, and databases"
		</p>
	</div>

	<div class="flex flex-auto items-center">
		<Separator class="flex-auto" />
		<h1 class="flex-auto px-4 font-bold">PROJECTS</h1>
		<Separator class="flex-auto" />
	</div>

	<div class="flex flex-wrap gap-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Find My Anime</Card.Title>
				<Card.Description
					>Anime recommendation web-app that suggests animes based on your already fave animes</Card.Description
				>
			</Card.Header>
			<Card.Footer class=" flex flex-wrap gap-2">
				<p class="text-xs font-bold">TECHNOLOGIES USED</p>
				<div class="">
					<Badge variant="outline">React</Badge>
					<Badge variant="outline">Firebase</Badge>
					<Badge variant="outline">Daisy UI</Badge>
				</div>
			</Card.Footer>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Fingerprint Attendance System</Card.Title>
				<Card.Description
					>Fingerprint based attendance system that generates Daily Time Record</Card.Description
				>
			</Card.Header>
			<Card.Footer class=" flex flex-wrap gap-2">
				<p class="text-xs font-bold">TECHNOLOGIES USED</p>
				<div>
					<Badge variant="outline">Java</Badge>
					<Badge variant="outline">JavaFX</Badge>
					<Badge variant="outline">MySQL</Badge>
					<Badge variant="outline">Digital Persona API</Badge>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
