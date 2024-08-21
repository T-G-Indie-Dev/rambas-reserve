<template>
	<Hero />
	<home-view />
	<footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import HomeView from '@/HomeView.vue';
import Hero from './components/Hero.vue';

export default {
	components: {
		HomeView,
		Footer,
		Navbar,
		Hero
	}
}
</script>

<style>

</style>
