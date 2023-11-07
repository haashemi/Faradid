<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import SideBar from '$lib/SideBar.svelte';

	register();
</script>

<Header />

<main class="flex min-h-screen">
	<SideBar />
	<slot />
</main>

<footer class="flex h-60 items-center justify-center bg-black">FOOTER'S PLACEHOLDER</footer>
