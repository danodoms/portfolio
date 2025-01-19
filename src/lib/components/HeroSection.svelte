<script lang="ts">
	import { TypewriterEffectSmooth, TypewriterEffect } from '$lib/components/ui/TypewriterEffect';
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/ThreeDCardEffect';
	import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
	import { text } from '@sveltejs/kit';
	import { Copyright, ArrowUpRight, MoveRight, MapPin } from 'lucide-svelte';
	import { DotBackground } from '$lib/components/ui/GridAndDotBackground';
	import { Spotlight } from '$lib/components/ui/Spotlight';
	import { GradientAnimation } from '$lib/components/ui/GradientAnimation';
	import { Button } from '$lib/components/ui/button';
	import { AnimatedTooltip } from '$lib/components/ui/AnimatedTooltip';

	import * as icons from '$lib/icons';

	const heading = [
		{
			text: 'HI'
		},
		{
			text: 'IM'
		},
		{
			text: 'DOM.'
		}
	];

	const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 4,
			name: 'Emily Davis',
			designation: 'UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 5,
			name: 'Tyler Durden',
			designation: 'Soap Developer',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
		},
		{
			id: 6,
			name: 'Dora',
			designation: 'The Explorer',
			image:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
		}
	];

	const technologies = [
		{
			id: 1,
			name: 'Javascript',
			designation: '',
			image: icons.javascript
		}
	];

	const subText = 'ReactJS web and mobile developer';
	const shortBio = `"I like creating functional and
well-designed applications, dabbling with design, functionality, and databases. providing end to end solutions"`;

	let isMouseEntered = false;
</script>

<!-- <DotBackground> -->

<div class="flex h-screen flex-wrap content-center items-center justify-center gap-2 p-4">
	<div class="items-left justify-left mb-4 flex flex-col items-center outline-1 md:items-start text-left">

		<h1
			class="bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-violet-500 text-left text-6xl font-extrabold tracking-tighter md:text-8xl -ml-1"
		>danodoms
		</h1>




		<!-- <h1 class="text-2xl font-bold tracking-tight lg:text-2xl">plan. design. create.</h1> -->
		<div class="flex gap-2">
			<TextGenerateEffect words={subText} className="m-0 text-md md:text-3xl font-bold" />
		</div>

		<div class="flex gap-4">
			 <!--<a href="https://github.com/domsdano" target="_blank" class="">
				<svg viewBox="0 0 128 128" class="icon">
					<g fill={'currentColor'}>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
						></path><path
							d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
						></path>
					</g>
				</svg>
			</a>-->

			<div class="mt-2 flex content-center items-center gap-1">
				<MapPin class="size-4"/>
				<p class="text-sm font-bold">Davao Oriental, Philippines</p>
			</div>
		</div>

		<p class="md:text-normal mt-4 hidden md:inline-block">
			I create functional, visually appealing applications <br/> with seamless end-to-end solutions.
		</p>

		<div class="mt-4 flex flex-initial flex-wrap items-center gap-8">
			<!-- <AnimatedTooltip items={people} /> -->

			<a
				href="https://www.facebook.com/doms.dano
			"
				target="_blank"
			>
				<Button variant="outline" class="gap-2 text-xl font-semibold">
					Get in touch<MoveRight />
				</Button>
			</a>
		</div>
	</div>

	<div class="flex flex-wrap items-center justify-center gap-2">
		<div class="flex-initial">
			<img
				class="right-0 m-2 size-36 rounded-full p-1 outline outline-1 outline-secondary grayscale md:relative md:size-52"
				src="https://avatars.githubusercontent.com/u/165539900?v=4"
				alt=""
			/>

			<!-- <img class="h-96 outline outline-1" src="./danodoms.png" alt="" /> -->
		</div>
	</div>
</div>
<!-- </DotBackground> -->
