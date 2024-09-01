<template>
  <section
    class="gallery-section w-screen py-20 px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white flex flex-col items-center text-center">
    <h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center text-white">Gallery</h2>
    <div class="masonry-container">
      <div v-for="(image, index) in images" :key="index" class="masonry-item">
        <img :src="image" alt="Gallery Image" class="masonry-image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  async created() {
    const imageModules = import.meta.glob('@/assets/images/*.jpg');
    const imagePromises = Object.keys(imageModules).map((path) => 
      imageModules[path]().then((module) => module.default)
    );
    this.images = await Promise.all(imagePromises);
  },
}
</script>

<style scoped>
.gallery-section {
  @apply bg-gray-100 text-gray-900;
}

.masonry-container {
  column-count: 6;
  column-gap: 1rem;
}

.masonry-item {
  margin-bottom: 1rem;
  break-inside: avoid;
}

.masonry-image {
  width: 100%;
  display: block;
  border-radius: 0.5rem;
}
</style>
