<template>
    <section class="hero-section relative w-screen h-screen bg-cover bg-center text-white flex flex-col">
      <!-- Navbar included inside Hero -->
      <navbar class="relative z-20" />
  
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
  
      <!-- Hero content -->
      <div class="relative z-30 text-center max-w-2xl mx-auto flex-grow flex flex-col items-center justify-center">
        <h1 class="text-4xl lg:text-6xl font-bold mb-4 text-white opacity-90">Welcome to Rambas Reserve</h1>
        <p class="text-lg lg:text-xl mb-8 text-white opacity-90">Experience the best in luxury and comfort.</p>
        <button class="hero-btn py-2 px-6 lg:px-10 lg:py-4 text-lg lg:text-xl">Book Now</button>
      </div>
    </section>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'; // Adjust the path if needed
  
  export default {
    name: 'HeroSection',
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped>
  .hero-section {
    background-image: url('./../assets/images/hero.jfif'); /* Ensure the image path is correct */
    background-size: cover;
    background-position: center;
  }
  
  .hero-btn {
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .hero-btn:hover {
    background-color: #333;
  }
  </style>
  