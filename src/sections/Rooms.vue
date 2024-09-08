<template>
  <section class="rooms-section py-20 px-8 bg-gray-100 text-gray-900">
    <h2 class="text-4xl lg:text-5xl font-bold mb-12 text-center">Our Rooms</h2>
    <div class="flex flex-wrap justify-center gap-12">
      <div v-for="room in rooms" :key="room.id"
        class="bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        @click="showRoomDetails(room)">
        <img :src="room.thumbnail" alt="Room" class="w-full h-64 object-cover rounded-lg mb-4">
        <h3 class="text-2xl font-semibold mb-2">{{ room.title }}</h3>
        <p class="text-lg">{{ room.shortDescription }}</p>
      </div>
    </div>

    <div v-if="selectedRoom" class="modal">
      <div class="modal-content flex flex-col md:flex-row max-h-screen overflow-y-auto">
        <button @click="closeRoomDetails" class="modal-close-button">&times;</button>
        
        <div class="gallery-area md:w-2/3 pr-4">
          <img :src="currentImage" @click="expandImage" alt="Room Image"
            class="w-full h-full object-cover rounded-lg cursor-pointer mb-4" />
          <div class="flex justify-between">
            <button @click="previousImage" class="text-lg text-gray-600 hover:text-gray-900">
              &larr; Previous
            </button>
            <button @click="nextImage" class="text-lg text-gray-600 hover:text-gray-900">
              Next &rarr;
            </button>
          </div>
        </div>

        <div class="details-area md:w-1/3 pl-4 flex flex-col justify-between">
          <RoomDetails :room="selectedRoom" />
          <button @click="openBookingForm"
            class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mt-4">
            Reserve Now
          </button>
        </div>

      </div>

    </div>

    <div v-if="showBookingForm" class="modal">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative max-h-screen overflow-y-auto">
        <button @click="closeBookingForm" class="modal-close-button">&times;</button>
        <BookingForm :preSelectedRoom="selectedRoom.title" @booking-success="handleBookingSuccess" />
      </div>
    </div>

    <div v-if="isImageExpanded" class="modal expanded-image-area">
      <div class="relative max-w-screen-md w-full mx-4">
        <img :src="currentImage" alt="Expanded Image" class="h-full w-auto object-contain mx-auto" />
        <button @click="closeExpandedImage" class="modal-close-button text-3xl text-white">&times;</button>
        <button @click.stop="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white">&larr;</button>
        <button @click.stop="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white">&rarr;</button>
      </div>
    </div>

  </section>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue';
import RoomDetails from '@/components/RoomDetails.vue';

export default {
  components: {
    BookingForm,
    RoomDetails
  },
  data() {
    return {
      rooms: [
        {
          id: 1,
          title: 'Two-Bedroom Chalet',
          shortDescription: 'A cozy chalet with a stunning view.',
          fullDescription: 'This chalet features two bedrooms, a private pool, and beautiful garden views.',
          thumbnail: "src/assets/images/roomImg01.jpg",
          images: [
            "src/assets/images/roomImg01.jpg",
            "src/assets/images/roomImg02.jpg",
          ],
          amenities: [
            'Private Pool', 'Balcony', 'Garden View', 'Soundproof', 'Terrace',
            'Bathtub or shower', 'Toilet paper', 'Free toiletries', 'Bidet',
            'Extra long beds', 'Fan', 'Towels', 'Sitting area', 'Socket near the bed',
            'Private entrance', 'Linens', 'Electric kettle', 'Outdoor dining area',
            'Hypoallergenic', 'Clothes rack', 'Mosquito net', 'No smoking'
          ],
          view: ['Pool view', 'Garden view', 'Balcony'],
          size: '28 m²',
          bathrooms: 2
        },
        {
          id: 2,
          title: 'Deluxe Suite',
          shortDescription: 'Luxurious suite with modern amenities.',
          fullDescription: 'This suite offers an elegant setting with all the modern comforts.',
          thumbnail: "src/assets/images/roomImg03.jpg",
          images: [
            "src/assets/images/roomImg03.jpg",
            "src/assets/images/roomImg04.jpg",
          ],
          amenities: [
            'Private Pool', 'Balcony', 'Garden View', 'Soundproof', 'Terrace',
            'Bathtub or shower', 'Toilet paper', 'Free toiletries', 'Bidet',
            'Extra long beds', 'Fan', 'Towels', 'Sitting area', 'Socket near the bed',
            'Private entrance', 'Linens', 'Electric kettle', 'Outdoor dining area',
            'Hypoallergenic', 'Clothes rack', 'Mosquito net', 'No smoking'
          ],
          view: ['Pool view', 'Garden view', 'Balcony'],
          size: '35 m²',
          bathrooms: 1
        }
      ],
      selectedRoom: null,
      showBookingForm: false,
      currentImageIndex: 0,
      isImageExpanded: false,
    }
  },
  computed: {
    currentImage() {
      return this.selectedRoom.images[this.currentImageIndex];
    }
  },
  methods: {
    showRoomDetails(room) {
      this.selectedRoom = room;
      this.currentImageIndex = 0;
      this.showBookingForm = false;
    },
    closeRoomDetails() {
      this.selectedRoom = null;
    },
    openBookingForm() {
      this.showBookingForm = true;
    },
    closeBookingForm() {
      this.showBookingForm = false;
    },
    handleBookingSuccess() {
      this.selectedRoom = null;
      this.showBookingForm = false;
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.selectedRoom.images.length - 1;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.selectedRoom.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    },
    expandImage() {
      this.isImageExpanded = true;
    },
    closeExpandedImage() {
      this.isImageExpanded = false;
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
  @apply bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl relative;
}

.modal-close-button {
  @apply absolute top-4 right-4 text-xl cursor-pointer;
}

.gallery-area img {
  @apply h-64 w-full object-cover rounded-lg;
}

.expanded-image-area {
  @apply flex items-center justify-center p-4;
}

.expanded-image-area img {
  @apply h-2/3 w-2/3;
}
</style>
