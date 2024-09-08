<template>
  <section
    class="about-section relative w-full min-h-screen py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white flex flex-col items-center text-center">
    <h2 class="text-4xl sm:text-4xl lg:text-5xl font-bold mb-12 mt-12  text-white opacity-90 uppercase">
      Our Story
    </h2>
    <p class="text-base text-white sm:text-lg lg:text-xl mb-12 max-w-4xl mx-auto opacity-80">
      Nestled in the heart of nature, Rambas Reserve offers a serene escape where luxury meets tranquility. Our reserve
      is designed to provide an unforgettable experience, with top-notch amenities and breathtaking views that immerse
      you in the beauty of the wild.
    </p>

    <div class="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Luxury Accommodations</h3>
        <p class="text-gray-200">
          Enjoy premium suites with private balconies, stunning views, and world-class service for a truly relaxing
          stay.
        </p>
      </div>
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Nature Activities</h3>
        <p class="text-gray-200">
          Discover nature trails, bird-watching, and guided tours to explore the beauty of the wilderness around you.
        </p>
      </div>
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Fine Dining</h3>
        <p class="text-gray-200">
          Savor delicious meals prepared by expert chefs, with farm-to-table options and fine wines in a stunning
          setting.
        </p>
      </div>
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Outdoor Adventures</h3>
        <p class="text-gray-200">
          Experience thrilling outdoor activities like zip-lining, mountain biking, and kayaking, perfect for adventure
          lovers.
        </p>
      </div>
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Exclusive Events</h3>
        <p class="text-gray-200">
          Host events with ease, from intimate weddings to large corporate retreats, in stunning outdoor venues.
        </p>
      </div>
      <div
        class="feature-item p-4 sm:p-6 bg-[#264653] rounded-lg shadow-lg border border-gray-700 hover:bg-opacity-90 transition-transform transform hover:scale-105 cursor-pointer ">
        <h3 class="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">Sustainability</h3>
        <p class="text-gray-200">
          We prioritize eco-friendly practices with renewable energy, water conservation, and support for local
          communities.
        </p>
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
