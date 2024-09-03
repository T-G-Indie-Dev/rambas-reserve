<template>
  <nav class="navbar w-full fixed top-0 left-0 p-4 lg:px-20 flex justify-between items-center z-50 bg-transparent">
    <div class="flex flex-col justify-center">
      <a href="homeSection" class="tracking-widest font-bold lg:text-2xl text-white drop-shadow-lg tracking-widest">
        Rambas <span class="font-light text-white">Reserve</span>
      </a>
    </div>

    <button role="button" class="md:hidden text-2xl text-white" @click="toggleMenu">
      <i class="fa-solid fa-bars"></i>
    </button>

    <div class="menu absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-black md:bg-transparent shadow hidden md:flex 
      flex-col gap-5 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu"
      :aria-expanded="isMenuOpen.toString()">
      <a v-for="item in menuItems" :key="item.text" @click="handleMenuClick(item.href)" role="menuitem"
        class="relative inline-block mx-4 text-white font-medium tracking-wide hover:text-black transition-transform cursor-pointer">
        {{ item.text }}
      </a>

      <button @click="openBookingForm"
        class="text-white border-2 border-white py-2 px-4 ml-1 rounded-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
        role="menuitem">
        Make a Booking
      </button>
    </div>

    <div v-if="isBookingFormVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button @click="closeBookingForm" class="absolute top-4 right-4 text-xl">&times;</button>
        <BookingForm />
      </div>
    </div>
  </nav>
</template>

<script>
import BookingForm from '@/components/BookingForm.vue'; 

export default {
  components: {
    BookingForm
  },
  data() {
    return {
      isMenuOpen: false,
      isBookingFormVisible: false,
      menuItems: [
        { text: 'Home', href: 'homeSection' },
        { text: 'About', href: 'aboutSection' },
        { text: 'Rooms', href: 'roomsSection' },
        { text: 'Gallery', href: 'gallerySection' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleMenuClick(section) {
      this.$emit('scrollToSection', section);
    },
    openBookingForm() {
      this.isBookingFormVisible = true;
    },
    closeBookingForm() {
      this.isBookingFormVisible = false;
    }
  }
}
</script>

<style scoped>
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar {
  animation: slideDown 750ms ease-out;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
}
</style>