<script lang="ts">
	//@ts-ignore
	import { Icon } from 'svelte-icons-pack';
	import { CgMenuRight, CgClose } from 'svelte-icons-pack/cg';
	import { fly } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';

	let isNavbarOpen = false;

	afterNavigate(() => (isNavbarOpen = false));
</script>

<header
	class="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between px-5 transition-colors duration-300 md:hidden
        {isNavbarOpen ? 'text-black' : 'text-white'}"
>
	<button on:click={() => (isNavbarOpen = !isNavbarOpen)} class="relative h-10 w-10">
		{#if isNavbarOpen}
			<span transition:fly={{ x: -10 }} class="absolute left-0 top-0 p-1"><Icon size="30" src={CgClose} /></span>
		{:else}
			<span transition:fly={{ x: -10 }} class="absolute left-0 top-0 p-1"><Icon size="30" src={CgMenuRight} /></span>
		{/if}
	</button>

	<a href="/" class="font-logo text-3xl font-bold">فرادید</a>

	<div aria-hidden="true" class="w-10" />
</header>

{#if isNavbarOpen}
	<navbar
		transition:fly={{ x: '100%', duration: 300, opacity: 1 }}
		class="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-10 bg-white pb-36 pt-16 text-lg font-semibold text-black md:hidden"
	>
		<div role="button" tabindex="0" aria-hidden="true" class="h-full w-full" on:click={() => (isNavbarOpen = false)} />

		<a href="/projects">نمونه کار</a>
		<a href="/contact">ارتباط با ما</a>

		<div role="button" tabindex="0" aria-hidden="true" class="h-full w-full" on:click={() => (isNavbarOpen = false)} />
	</navbar>
{/if}
