<template>
    <div class="description-area w-max h-max">
        <div class="mb-6">
            <p><strong>Chalet Size:</strong> {{ room.size }}</p>
            <p><strong>Bathrooms:</strong> {{ room.bathrooms }}</p>
            <div>
                <strong>View:</strong>
                <ul class="list-disc pl-6">
                    <li v-for="(view, index) in room.view" :key="index">{{ view }}</li>
                </ul>
            </div>
            <div>
                <strong>Chalet Facilities:</strong>
                <div class="flex w-100">
                    <ul class="grid grid-cols-4 gap-x-7 list-disc pl-6"> 
                        <li  v-for="(amenity, index) in room.amenities" :key="index">{{ amenity }}</li>
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