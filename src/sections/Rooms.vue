<template>
  <section class="rooms-section py-20 px-8 bg-gray-100 text-gray-900">
    <h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center">Our Rooms</h2>
    <div class="flex flex-wrap justify-center gap-12">
      <div v-for="room in rooms" :key="room.id"
        class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        @click="openBookingForm(room)">
        <img :src="room.thumbnail" alt="Room" class="w-full h-64 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold mb-2">{{ room.title }}</h3>
        <p class="text-lg">{{ room.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedRoom" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button @click="closeBookingForm" class="absolute top-4 right-4 text-xl">&times;</button>
        <BookingForm :preSelectedRoom="selectedRoom.title" />
      </div>
    </div>
  </section>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue'; 

export default {
  components: {
    BookingForm
  },
  data() {
    return {
      rooms: [
        {
          id: 1,
          title: 'Room 1',
          shortDescription: 'Description for room 1',
          thumbnail: "@/assets/images/DSC02127_1.jpg",
        },
        {
          id: 2,
          title: 'Room 2',
          shortDescription: 'Description for room 2',
          thumbnail: "@/assets/images/DSC02127_1.jpg",
        }
      ],
      selectedRoom: null
    }
  },
  methods: {
    openBookingForm(room) {
      this.selectedRoom = room;
    },
    closeBookingForm() {
      this.selectedRoom = null;
    }
  }
}
</script>

<style scoped>
.rooms-section {
  @apply bg-gray-100 text-gray-900;
}

.modal {
  @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50;
}

.modal-content {
  @apply bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative;
}

.modal-close-button {
  @apply absolute top-4 right-4 text-xl;
}
</style>
