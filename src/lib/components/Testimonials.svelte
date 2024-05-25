<script lang="ts">
	import { InfiniteMovingCards } from '$lib/components/ui/InfiniteMovingCards';
	import { fiverr } from '../icons';

	const testimonials = [
		{
			quote: 'Excellent work, creative and prompt and clear communication. Great work!',
			name: 'johncipolla',
			title: 'United States'
		},
		{
			quote:
				'Neqxy was able to make my requested effect change in a very short time, and it is exactly what I was searching for! I will continue to go to them for their skill and customer focus!',
			name: 'badh54',
			title: 'Hamlet'
		},
		// {
		// 	quote:
		// 		"This was the first time in my life I've ever not hated hearing a recording of my own voice (especially while singing). He did such an amazing job. Highly recommend and would hire again. Thank you so so much!",
		// 	name: 'closetchloe',
		// 	title: 'United States'
		// },
		// {
		// 	quote: 'Great Communication As Always',
		// 	name: 'peanute6',
		// 	title: 'United States'
		// },
		// {
		// 	quote:
		// 		'Great communication and delivery. Neqxy has successfully turned my low-end mediocre singing into a pretty piece. Thank you again!',
		// 	name: 'adarqiz',
		// 	title: 'Indonesia'
		// },
		{
			quote:
				'Happy to work with. He help me a lot again, even this time it will have a many revision but he did great.',
			name: 'kamisamahateme',
			title: 'Thailand'
		},
		{
			quote:
				'Neqxy is seriously my favorite producer on this app! I’ve worked with about 6 different people but keep coming back to this gig! Thank you so much for the amazing work!',
			name: 'freefreegeel',
			title: 'Philippines'
		}
		// {
		// 	quote: 'Requested a Custom Order which he Rocked, would do future gigs!',
		// 	name: 'peanute6',
		// 	title: 'United States'
		// },
		// {
		// 	quote: 'Great Overall Communication to the end!',
		// 	name: 'peanute6',
		// 	title: 'United States'
		// },
		// {
		// 	quote:
		// 		'Neqxy was able to make my requested effect change in a very short time, and it is exactly what I was searching for! I will continue to go to them for their skill and customer focus!',
		// 	name: 'badh54',
		// 	title: 'United States'
		// }
		// {
		// 	quote: 'Great communication and great quality of work. I would definitely use neqxy again!',
		// 	name: 'andrewjtian',
		// 	title: 'Canada'
		// }
		// {
		// 	quote:
		// 		'Easy to get ahold of, easy to collaborate with, neqxy provided exactly what I was looking for not only with exceptional quality but also faster than the standard time! I am sure I will come back again for more mixing and mastering!',
		// 	name: 'badh54',
		// 	title: 'United States'
		// },
		// {
		// 	quote: 'Thank you!!!!! Love it 💕☄️ Is it possible to add my logo?',
		// 	name: 'legrandphoenix',
		// 	title: 'United States'
		// },
		// {
		// 	quote:
		// 		"This is my first time cover. I'm not a good singer but he help me fix that problem. He respond so fast and did a great job. I'm so happy with it and will come back for sure. Thank you for make this song. : ) High recommend.",
		// 	name: 'kamisamahateme',
		// 	title: 'Thailand'
		// },
		// {
		// 	quote: 'Amazing!!!',
		// 	name: 'freefreegeel',
		// 	title: 'Philippines'
		// },
		// {
		// 	quote: 'Awesome work 👏🏾',
		// 	name: 'tmoney87',
		// 	title: 'United States'
		// }
		// {
		// 	quote: '3rd time working together! As always, the final output is perfect. Tysm~',
		// 	name: 'freefreegeel',
		// 	title: 'Philippines'
		// },
		// {
		// 	quote: 'awesome! very good',
		// 	name: 'blurbers',
		// 	title: 'United States'
		// },
		// {
		// 	quote: 'Great poster and it was done in only a few hours! Very happy with the result.',
		// 	name: 'charlottemcl479',
		// 	title: 'Australia'
		// },
		// {
		// 	quote: 'very nice, thanks',
		// 	name: 'ramonjax',
		// 	title: 'Germany'
		// },
		// {
		// 	quote:
		// 		'Neqxy was very patient even though I had lots of requests, and he was able to fulfill all of them. He made our track sound amazing! Hope to work with him again on our next project <3',
		// 	name: 'freefreegeel',
		// 	title: 'Philippines'
		// }
	];
</script>

<section class="flex flex-col items-center justify-center gap-4 outline-1">
	<div class="flex flex-col items-center">
		<h1
			class="HEADING mt-4 flex-initial text-center text-3xl font-extrabold tracking-normal md:text-7xl"
		>
			Testimonials
		</h1>

		<div class="flex content-center gap-2">
			<h2 class="rounded-full font-semibold">
				what others say • as seen on

				<!-- <div class="fill-primary">
					{@html fiverr}
				</div> -->
			</h2>
			<div class="my-auto rounded-full fill-background px-2 text-sm font-bold outline outline-1">
				fiverr``
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1">
		<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
	</div>
</section>
