<template>
  <section class="hero-section relative w-full h-screen overflow-hidden flex flex-col text-white">
    <div class="absolute inset-0 bg-black bg-opacity-55 z-10"></div>
    <div class="hero-bg absolute inset-0 bg-cover bg-center"></div>
    <div class="z-30 uppercase text-center flex-grow flex flex-col items-center justify-center">
      <h1 class="text-4xl lg:text-6xl mb-9 opacity-90 text-white tracking-wide animate-fade-in-up">
        Welcome to Rambas Reserve
      </h1>
      <p class="text-lg lg:text-xl mb-9 opacity-90 text-white tracking-widest animate-fade-in-up">
        Experience the best in luxury and comfort
      </p>
      <button @click="scrollToSection('aboutSection')" class="hero-btn bg-white hover:bg-gray-800 rounded py-2 px-6 lg:px-10 lg:py-4 text-lg lg:text-xl 
        transition duration-300 ease-in-out transform hover:scale-105 tracking-wider animate-fade-in-up">
        Discover Our Story
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToSection(section) {
      this.$emit('scrollToSection', section);
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-bg {
  background-image: url('@/assets/images/hero.jfif');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.hero-btn {
  @apply bg-white hover:bg-gray-800 rounded py-2 px-6 lg:px-10 lg:py-4 text-lg lg:text-xl transition duration-300 ease-in-out;
}
</style>
