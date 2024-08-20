<template>
	<main></main>
	<about></about>
	<service></service>
	<portfolio></portfolio>
	<contact></contact>
</template>

<script>
import Main from '@/sections/Main.vue';
import About from '@/sections/About.vue';
import Book from '@/sections/Book.vue';
import Gallery from '@/sections/Gallery.vue';
import ContactUs from '@/sections/ContactUs.vue';

export default {
	components: {
		Main,
		About,
		Book,
		Gallery,
		ContactUs,
	}
}
</script>

<style scoped>


</style>