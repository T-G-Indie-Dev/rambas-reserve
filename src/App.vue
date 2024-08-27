<template>
	<div class="app-container">
	  <Hero class="section" />
	  <AboutSection class="section" />
	  <!-- Add your section2 and section3 here -->
	  <FooterSection class="section" />
	</div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import FooterSection from '@/components/Footer.vue';
  import HomeView from '@/HomeView.vue';
  import Hero from '@/components/Hero.vue';
  import AboutSection from './sections/About.vue';
  
  export default {
	components: {
	  HomeView,
	  FooterSection,
	  Navbar,
	  Hero,
	  AboutSection
	}
  }
  </script>
  
  <style>
  /* Prevent horizontal scrolling */
  body, html {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
  }
  
  .app-container {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	min-height: 100vh;
	overflow-y: auto;
	overflow-x: hidden; /* Prevent horizontal overflow */
	box-sizing: border-box; /* Ensure padding and borders are included in width/height calculations */
  }
  
  /* Ensure all sections fit within the container */
  .section {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	min-height: 100vh;
	width: 100%;
	box-sizing: border-box;
  }
  
  /* Responsive optimizations */
  @media (max-width: 1024px) {
	.section {
	  padding: 16px;
	}
  }
  
  @media (max-width: 768px) {
	.section {
	  padding: 12px;
	  text-align: center;
	}
  }
  
  @media (max-width: 480px) {
	.section {
	  padding: 8px;
	}
  }
  </style>
  