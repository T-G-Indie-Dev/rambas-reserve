<template>
    <div class="description-area max-w-full">
        <div class="mb-6">
            <hr class="lg:hidden md:hidden h-px my-4 bg-gray-200 border-0 dark:bg-gray-300">
            <p class="text-base sm:text-lg"><strong>Chalet Size:</strong> {{ room.size }}</p>
            <p class="text-base sm:text-lg"><strong>Bathrooms:</strong> {{ room.bathrooms }}</p>

            <div class="mt-4">
                <strong class="text-base sm:text-lg">View:</strong>
                <ul class="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                    <li v-for="(view, index) in room.view" :key="index">{{ view }}</li>
                </ul>
            </div>

            <div class="mt-4">
                <strong class="text-base sm:text-lg">Chalet Facilities:</strong>
                <div class="w-full">
                    <ul
                        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                        <li v-for="(amenity, index) in room.amenities" :key="index">{{ amenity }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        room: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.description-area {
    @apply w-full h-auto;
}

@media (min-width: 640px) {
    .description-area {
        @apply w-auto;
    }
}
</style>