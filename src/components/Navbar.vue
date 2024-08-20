<template>
    <nav class="w-screen fixed bg-opacity-90 bg-white p-4 lg:px-20 flex justify-between z-50">
        <div class="flex flex-col justify-center">
            <a href="/">
                <!-- TODO: Add logo -->
                <h3 class="tracking-widest font-semibold">Rambas <span class="tracking-widest font-light">Reserve</span></h3>
            </a>
        </div>

        <button role="menubar" class="md:hidden" @click="navToggle()">
            <i class="fa-solid fa-bars text-2xl"></i>
        </button>

        <div class="absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-white md:bg-none md:bg-opacity-0 shadow hidden md:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu" aria-expanded="false">
            <a href="" role="menuitem" class="menu-item">
                <p class="mx-4">Home</p>
            </a>

            <a href="" role="menuitem" class="menu-item">
                <p class="mx-4">About</p>
            </a>

            <a href="" role="menuitem" class="menu-item">
                <p class="mx-4">Contact us</p>
            </a>

            <button class="btn" role="menuitem">
                Make a Booking
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        navToggle() {
            let menu = document.querySelector("[role='menu']");
            let isExpanded = menu.getAttribute('aria-expanded');
            menu.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
    }
}
</script>

<style>
.menu-item {
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0 1rem; 
}

.menu-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 2px;
    width: 100%;
    background-color: #000; 
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.menu-item:hover::after,
.menu-item:focus::after {
    transform: translateX(-50%) scaleX(1);
}

.menu-item:active::after {
    background-color: #c0c0c0; 
    transform: translateX(-50%) scaleX(0.5); 
}

.btn {
    transition: background-color 0.3s ease;
    margin: 0 1rem; 
}

.btn:hover {
    background-color: #000;
}
</style>
