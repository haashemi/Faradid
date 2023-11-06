<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { SwiperContainer } from 'swiper/element/bundle';
	import type { SwiperOptions } from 'swiper/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let swiperContainer: SwiperContainer;

	let totalPages: number;
	let currentPage: number;
	let sliderDirection: 'vertical' | 'horizontal' | undefined;

	onMount(() => {
		Object.assign(swiperContainer, {
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

<div class="flex h-screen flex-row-reverse">
	<div class="hidden w-14 shrink-0 items-center justify-between bg-slate-600 py-10 md:flex" style="writing-mode: vertical-lr">
		<div class="flex gap-7">
			<a href="/">نمونه کار</a>
			<a href="/">ارتباط با ما</a>
		</div>

		<a href="/">هاشم پروداکشن</a>
	</div>

	<div class="relative w-full min-w-0">
		<swiper-container id="featured-slider" dir="ltr" bind:this={swiperContainer} init="false" class="h-screen">
			{#each data.slides as slide}
				<swiper-slide class="relative flex h-screen cursor-grab items-center justify-center">
					<video playsinline muted loop autoplay src={slide.videoSrc} class="h-full w-full object-cover opacity-80" />

					<a
						href="/"
						class="absolute mx-auto my-auto text-center text-9xl font-black tracking-wide text-white/40 transition-all duration-300 ease-in-out hover:tracking-widest hover:text-white"
					>
						{slide.text}
					</a>
				</swiper-slide>
			{/each}
		</swiper-container>

		{#if sliderDirection === 'vertical' && currentPage == 1}
			<div transition:fly={{ y: -10, opacity: 0 }} class="absolute bottom-5 z-10 w-full animate-bounce select-none text-center text-lg">
				SWIPE UP
			</div>
		{:else}
			{#key currentPage}
				<p transition:fly={{ y: 15, opacity: 0 }} class="absolute bottom-5 left-5 z-10 select-none">
					{currentPage} of {totalPages}
				</p>
			{/key}
		{/if}
	</div>
</div>

<style>
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
