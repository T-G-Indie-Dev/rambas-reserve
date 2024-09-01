<template>
  <section class="about-section w-screen py-20 px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white flex flex-col items-center text-center">
    <h2 class="text-3xl lg:text-5xl font-bold mb-6 text-white opacity-90">
      Our Story
    </h2>
    <p class="text-lg text-white lg:text-xl mb-8 max-w-4xl mx-auto opacity-80">
      Nestled in the heart of nature, Rambas Reserve offers a serene escape where luxury meets tranquility. Our reserve is designed to provide an unforgettable experience, with top-notch amenities and breathtaking views that immerse you in the beauty of the wild.
    </p>

    <div class="features grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105">
        <h3 class="text-xl font-semibold mb-4 text-yellow-300">Luxury Accommodations</h3>
        <p class="text-gray-200">Indulge in our premium suites that blend comfort with elegance, offering stunning views and world-class service.</p>
      </div>
      <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105">
        <h3 class="text-xl font-semibold mb-4 text-yellow-300">Nature Activities</h3>
        <p class="text-gray-200">Explore our vast grounds with guided tours, nature trails, and adventure activities tailored for all ages.</p>
      </div>
      <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105">
        <h3 class="text-xl font-semibold mb-4 text-yellow-300">Fine Dining</h3>
        <p class="text-gray-200">Savor exquisite culinary creations prepared by our renowned chefs using the finest ingredients.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  background-color: #1f2937; 
}

.feature-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.feature-item:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  background-color: #2a3b40;
}
</style>
