<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import Header from '$lib/Header.svelte';
	import '../app.css';

	register();
</script>

<Header />

<main>
	<slot />
</main>
