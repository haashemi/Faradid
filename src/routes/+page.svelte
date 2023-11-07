<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import type { SwiperContainer } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';
	import type { PageData } from './$types';
	import { circInOut } from 'svelte/easing';

	export let data: PageData;

	let swiperContainer: SwiperContainer;

	let totalPages: number;
	let currentPage: number;
	let sliderDirection: 'vertical' | 'horizontal' | undefined;

	onMount(() => {
		Object.assign(swiperContainer, {
			slidesPerView: 1,

			loop: false,
			direction: 'vertical',
			navigation: { enabled: false },

			breakpoints: {
				'@1.00': { loop: true, direction: 'horizontal', navigation: { enabled: true } },
			},

			on: {
				init: (swiper) => {
					totalPages = swiper.slides.length;
					currentPage = swiper.realIndex + 1;
				},
				realIndexChange: (swiper) => (currentPage = swiper.realIndex + 1),
				breakpoint: (_, breakpointParams) => (sliderDirection = breakpointParams.direction),
			},
		} as SwiperOptions);

		swiperContainer.initialize();
	});
</script>

<div dir="ltr" class="relative min-h-0 w-full min-w-0">
	<swiper-container id="featured-slider" bind:this={swiperContainer} init="false" class="h-screen overflow-hidden">
		{#each data.slides as slide, index}
			<swiper-slide class="relative flex cursor-grab items-center justify-center">
				<video playsinline muted loop autoplay src={slide.videoSrc} class="h-full w-full object-cover opacity-80" />

				{#if index + 1 === currentPage}
					<a
						transition:scale={{ opacity: 0, start: 1.5, duration: 500, easing: circInOut }}
						href="/"
						class="absolute mx-auto my-auto whitespace-pre-line text-center text-6xl font-black tracking-wide text-white/40 transition-all duration-300 ease-in-out hover:tracking-widest hover:text-white sm:text-8xl md:text-9xl"
					>
						{slide.text}
					</a>
				{/if}
			</swiper-slide>
		{/each}
	</swiper-container>

	<div class="screen-height absolute left-0 top-0 w-full select-none">
		{#if sliderDirection === 'vertical' && currentPage == 1}
			<div transition:fly={{ y: -10, opacity: 0 }} class="absolute bottom-5 z-10 w-full animate-bounce text-center text-lg">SWIPE UP</div>
		{:else}
			{#key currentPage}
				<p transition:fly={{ y: 15, opacity: 0 }} class="absolute bottom-5 left-5 z-10">
					{currentPage} of {totalPages}
				</p>
			{/key}
		{/if}
	</div>
</div>

<style>
	.screen-height {
		height: 100vh;
		height: 100dvh;
	}

	#featured-slider::part(container) {
		--swiper-theme-color: #fff;
	}

	#featured-slider::part(button-prev),
	#featured-slider::part(button-next) {
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;

		opacity: 25%;
		padding: 1rem;
	}

	#featured-slider::part(button-prev):hover,
	#featured-slider::part(button-next):hover {
		opacity: 100%;
	}
</style>
