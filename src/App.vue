<template>
	<navbar></navbar>
	<home-view></home-view>
	<footer></footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import HomeView from '@/HomeView.vue';

export default {
	components: {
		HomeView,
		Footer,
		Navbar
	}
}
</script>

<style>

</style>
