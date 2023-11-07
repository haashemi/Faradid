<script lang="ts">
	//@ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsTelegramPlane from 'svelte-icons-pack/fa/FaBrandsTelegramPlane';
	import FaBrandsInstagram from 'svelte-icons-pack/fa/FaBrandsInstagram';
	import SiGmail from 'svelte-icons-pack/si/SiGmail';

	const socialMedia = [
		{ text: 'ایمیل', logo: SiGmail, url: 'mailto:contact@haashemi.dev' },
		{ text: 'تلگرام', logo: FaBrandsTelegramPlane, url: 'https://t.me/Byfron' },
		{ text: 'اینستاگرام', logo: FaBrandsInstagram, url: 'https://www.instagram.com/mr_alihaashemi/' },
	];
</script>

<div class="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center" style="background-image: url(contact-bg.png);">
	<!-- <div dir="rtl" class="z-10 flex flex-col gap-5 text-xl sm:text-2xl md:text-3xl">
		{#each socialMedia as sm}
			<a class="flex items-center gap-2" href={sm.url}>
				<Icon className="fill-white w-5 h-5 md:w-7 md:h-7" src={sm.logo} />
				<p class="font-logo font-semibold">{sm.text}</p>
			</a>
		{/each}
	</div> -->

	<div class="z-10 text-xl font-semibold">هیچ ایده ای ندارم اینجا باید چجوری باشه جدی</div>

	<div class="absolute left-0 top-0 h-full w-full bg-black/20" />
</div>
