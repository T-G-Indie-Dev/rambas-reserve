<template>
  <section class="about-section w-screen py-20 px-8 bg-gray-900 text-white flex flex-col items-center text-center">
  <h2 class="text-3xl lg:text-5xl font-bold mb-6 text-white opacity-90">About Rambas Reserve</h2>
  <p class="text-lg lg:text-xl mb-8 max-w-3xl opacity-80 text-white">
    Nestled in the heart of nature, Rambas Reserve offers a serene escape where luxury meets tranquility. Our reserve is designed to provide an unforgettable experience, with top-notch amenities and breathtaking views that immerse you in the beauty of the wild.
  </p>

  <div class="features grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
    <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-95 transition">
      <h3 class="text-xl font-semibold mb-4 text-yellow-200">Luxury Accommodations</h3>
      <p class="text-gray-300">Indulge in our premium suites that blend comfort with elegance, offering stunning views and world-class service.</p>
    </div>
    <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-95 transition">
      <h3 class="text-xl font-semibold mb-4 text-yellow-200">Nature Activities</h3>
      <p class="text-gray-300">Explore our vast grounds with guided tours, nature trails, and adventure activities tailored for all ages.</p>
    </div>
    <div class="feature-item p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-95 transition">
      <h3 class="text-xl font-semibold mb-4 text-yellow-200">Fine Dining</h3>
      <p class="text-gray-300">Savor exquisite culinary creations prepared by our renowned chefs using the finest ingredients.</p>
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
    background-color: #1f2937; /* Tailwind gray-900 equivalent */
  }
  
  .feature-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  