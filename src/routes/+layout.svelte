<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import SideBar from '$lib/SideBar.svelte';

	register();
</script>

<Header />
<SideBar />

<main>
	<slot />
</main>
