<template>
  <section class="rooms-section py-20 px-8 bg-gray-100 text-gray-900">
    <h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center">Our Rooms</h2>
    <div class="flex flex-wrap justify-center gap-12">
      <div v-for="room in rooms" :key="room.id"
        class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        @click="openCarousel(room)">
        <img :src="room.thumbnail" alt="Room" class="w-full h-64 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold mb-2">{{ room.title }}</h3>
        <p class="text-lg">{{ room.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedRoom" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div class="relative flex w-full max-w-screen-lg mx-4 p-6 bg-white rounded-lg">
        <div class="w-1/2 pl-6">
          <button @click="selectedRoom = null"
            class="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900">
            &times;
          </button>
          <div></div>
          <h3 class="text-3xl font-bold mb-4">{{ selectedRoom.title }}</h3>
          <div v-html="selectedRoom.fullDescription" class="text-lg mb-6"></div>
          <button @click="bookRoom"
            class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rooms: [
        {
          id: 1,
          title: 'Room 1',
          shortDescription: 'Description for room 1',
          fullDescription: `<p>The style of <a href="https://www.booking.com/hotel/lk/rambas-cabin.html#room_226902902" target="_blank" 
            class="text-blue-500 hover:underline">when you click the Two-Bedroom Chalet room type</a></p>`,
          thumbnail: '',
          images: [

          ]
        },
        {
          id: 2,
          title: 'Room 2',
          shortDescription: 'Description for room 2',
          fullDescription: `<p>The style of <a href="https://www.booking.com/hotel/lk/rambas-cabin.html#room_226902902" target="_blank" 
            class="text-blue-500 hover:underline">when you click the Two-Bedroom Chalet room type</a></p>`,
          thumbnail: '',
          images: [

          ]
        }
      ],
      selectedRoom: null
    }
  },
  methods: {
    openCarousel(room) {
      this.selectedRoom = room;
    },
    bookRoom() {
      alert('Reserving feature will be implemented soon.');
    }
  }
}
</script>

<style scoped>
.rooms-section {
  @apply bg-gray-100 text-gray-900;
}
</style>
