<template>
    <div class="description-area pl-4">
        <h3 class="text-3xl font-bold mb-4">{{ room.title }}</h3>
        <div class="text-lg mb-6">
            <p><strong>Chalet Size:</strong> {{ room.size }}</p>
            <p><strong>Bathrooms:</strong> {{ room.bathrooms }}</p>
            <div class="my-4">
                <strong>View:</strong>
                <ul class="list-disc pl-6">
                    <li v-for="(view, index) in room.view" :key="index">{{ view }}</li>
                </ul>
            </div>
            <div class="my-4">
                <strong>Chalet Facilities:</strong>
                <ul class="grid grid-cols-2 gap-x-4 list-disc pl-6"> <!-- Added grid and grid-cols-2 classes -->
                    <li v-for="(amenity, index) in room.amenities" :key="index">{{ amenity }}</li>
                </ul>
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