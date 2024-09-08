<template>
  <section
    class="gallery-section w-screen py-20 px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white flex flex-col items-center text-center">
    <h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center text-white uppercase">Gallery</h2>


    <div class="masonry-container">
      <div v-for="(image, index) in visibleImages" :key="index" class="masonry-item">
        <img :src="image" alt="Gallery Image" class="masonry-image" @click="expandImage(index)" />
      </div>
    </div>

    <div class="button-container mt-8">
      <button v-if="images.length > visibleImages.length" @click="showMoreImages" class="show-more-btn">
        <span class="arrow-icon text-2xl text-white">&#x25BC;</span>
        <span class="text-lg text-white">Show More</span>
      </button>
      <button v-if="visibleImages.length > defaultVisibleCount" @click="showLessImages" class="show-less-btn ml-4">
        <span class="arrow-icon text-2xl text-white">&#x25B2;</span>
        <span class="text-lg text-white">Show Less</span>
      </button>
    </div>

    <div v-if="expandedImage !== null"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div class="relative max-w-screen-md w-full mx-4">
        <img :src="images[expandedImage]" alt="Expanded Image"
          class="w-full max-h-[80vh] object-contain rounded-lg shadow-lg">
        <button @click="expandedImage = null"
          class="absolute top-2 right-2 text-3xl text-white z-50 bg-black bg-opacity-50 p-2 rounded-full ">&times;</button>

        <button v-if="expandedImage > 0" @click="navigateImage(-1)"
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl text-white z-50 bg-black bg-opacity-50 p-2 rounded-full ">
          &larr;
        </button>
        <button v-if="expandedImage < images.length - 1" @click="navigateImage(1)"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl text-white z-50 bg-black bg-opacity-50 p-2 rounded-full ">
          &rarr;
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      defaultVisibleCount: 6,
      visibleImagesCount: 6,
      expandedImage: null,
      loading: true
    };
  },
  computed: {
    visibleImages() {
      return this.images.slice(0, this.visibleImagesCount);
    }
  },
  methods: {
    showMoreImages() {
      this.visibleImagesCount += 6;
    },
    showLessImages() {
      this.visibleImagesCount = this.defaultVisibleCount;
    },
    expandImage(index) {
      this.expandedImage = index;
    },
    navigateImage(direction) {
      this.expandedImage += direction;
    }
  },
  async created() {
    const imageModules = import.meta.glob('@/assets/images/*.jpg');
    const imagePromises = Object.keys(imageModules).map((path) =>
      imageModules[path]().then((module) => module.default)
    );

    this.loading = true;
    this.images = await Promise.all(imagePromises);
    this.loading = false;
  }
};
</script>

<style scoped>
.gallery-section {
  @apply bg-gray-100 text-gray-900;
}

.masonry-container {
  column-count: 3;
  column-gap: 1rem;
}

.masonry-item {
  margin-bottom: 1rem;
  break-inside: avoid;
}

.masonry-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.masonry-image:hover {
  transform: scale(1.05);
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.show-more-btn,
.show-less-btn {
  @apply text-white bg-gray-700 hover:bg-gray-600 rounded-lg py-2 px-4 transition ease-in-out duration-300;
}

.arrow-icon {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .masonry-container {
    column-count: 2;
  }

  .masonry-image {
    height: 100px;
  }
}

@media (max-width: 1024px) {
  .masonry-container {
    column-count: 3;
  }
  .masonry-image {
    height: 200px;
  }
}

</style>
