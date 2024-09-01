<template>
	<div class="flex flex-col min-h-screen">
		<Navbar @scrollToSection="scrollToSection" />
		<div ref="homeSection" >
			<Hero @scrollToSection="scrollToSection"/>
		</div>
		<div ref="aboutSection">
			<AboutSection class="flex-grow" />
		</div>
		<div ref="roomsSection">
			<RoomsSection class="flex-grow" />
		</div>
		<div ref="gallerySection">
			<GallerySection class="flex-grow" />
		</div>
		<FooterSection ref="contactSection" />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterSection from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';
import AboutSection from './sections/About.vue';
import RoomsSection from './sections/Rooms.vue';
import GallerySection from './sections/Gallery.vue';

export default {
	components: {
		FooterSection,
		Navbar,
		Hero,
		AboutSection,
		RoomsSection,
		GallerySection
	},
	methods: {
		scrollToSection(section) {
			const targetSection = this.$refs[section];
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: 'smooth',
			});
		}
	}
}
</script>

<style>
body,
html {
	overflow-x: hidden;
}
</style>