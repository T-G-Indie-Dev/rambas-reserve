<template>
    <div class="booking-form-container p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 class="text-2xl font-bold mb-6">Make a Reservation</h2>
  
      <form v-if="!thankYouMessage" action="https://formsubmit.co/9f678a79e696a93b9872d9875a1d61a4" method="POST" class="space-y-4">
        <input type="hidden" name="_subject" value="New Booking Request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
        <input type="hidden" name="_captcha" value="false" />
  
        <div>
          <label for="room" class="block font-medium text-gray-700">Room <span class="text-red-600">*</span></label>
          <select v-model="form.room" name="Room" id="room" required
                  class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300">
            <option value="" disabled>Select a room</option>
            <option v-for="room in rooms" :key="room.id" :value="room.title">{{ room.title }}</option>
          </select>
        </div>
  
        <div>
          <label for="name" class="block font-medium text-gray-700">Name <span class="text-red-600">*</span></label>
          <input type="text" v-model="form.name" name="Name" id="name" required
                 class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
  
        <div>
          <label for="email" class="block font-medium text-gray-700">Email <span class="text-red-600">*</span></label>
          <input type="email" v-model="form.email" name="Email" id="email" required
                 class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
  
        <div>
          <label for="phone" class="block font-medium text-gray-700">Phone Number</label>
          <input type="tel" v-model="form.phone" name="Phone" id="phone"
                 class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
  
        <div>
          <label for="dateFrom" class="block font-medium text-gray-700">Date From - To <span class="text-red-600">*</span></label>
          <div class="flex space-x-2 mt-1 items-center">
            <input type="date" v-model="form.dateFrom" name="Date From" id="dateFrom" required
                   class="block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
            <span class="text-gray-500">-</span>
            <input type="date" v-model="form.dateTo" name="Date To" id="dateTo" required
                   class="block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
          </div>
        </div>
  
        <div>
          <label for="people" class="block font-medium text-gray-700">Number of People <span class="text-red-600">*</span></label>
          <input type="number" v-model="form.people" name="Number of People" id="people" required min="1"
                 class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300" />
        </div>
  
        <div>
          <label for="comments" class="block font-medium text-gray-700">Comments</label>
          <textarea v-model="form.comments" name="Comments" id="comments"
                    class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"></textarea>
        </div>
  
        <button type="submit"
                class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Check Availability
        </button>
      </form>
  
      <div v-if="thankYouMessage" class="text-green-600 mt-4">
        {{ thankYouMessage }}
      </div>
    </div>
  </template>  

<script>
export default {
    props: {
        preSelectedRoom: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            form: {
                room: this.preSelectedRoom || '',
                name: '',
                email: '',
                phone: '',
                dateFrom: '',
                dateTo: '',
                people: 1,
                comments: ''
            },
            formError: null,
            thankYouMessage: null,
            rooms: [
                { id: 1, title: 'Room 1' },
                { id: 2, title: 'Room 2' }
            ]
        };
    },
    methods: {
        validateForm() {
            this.formError = null;
            if (!this.form.room) {
                this.formError = 'Please select a room.';
                return false;
            }
            if (!this.form.name) {
                this.formError = 'Please enter your name.';
                return false;
            }
            if (!this.form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                this.formError = 'Please enter a valid email address.';
                return false;
            }
            if (!this.form.dateFrom || !this.form.dateTo) {
                this.formError = 'Please select both start and end dates.';
                return false;
            }
            if (new Date(this.form.dateFrom) > new Date(this.form.dateTo)) {
                this.formError = 'End date cannot be before start date.';
                return false;
            }
            if (this.form.people < 1) {
                this.formError = 'Number of people must be at least 1.';
                return false;
            }
            return true;
        }
    }
};
</script>

<style scoped>
.booking-form-container {
    background: linear-gradient(to bottom, #f7fafc, #e2e8f0);
}
.text-red-600 {
    color: #e53e3e;
}
.text-green-600 {
    color: #38a169;
}
</style>
