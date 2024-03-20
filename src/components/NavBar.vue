<template>
    <div class="flex items-center bg-slate-500 p-[15px]">
        <img class="w-10" :src="logoImg" alt="Logo" />
        <p class="text-salte-900">
            <i class="ri-tent-line"></i> stay
            <i class="ri-caravan-line"></i> tour
            <i class="ri-treasure-map-line"></i> adventure
            <i class="ri-motorbike-fill"></i> ride
            <i class="ri-car-line"></i> rentals
            <i class="ri-calendar-event-line"></i> event
            <i class="ri-store-2-line"></i> vendor login
        </p>
    </div>
</template>

<script>
import logoImg from "../assets/images/logo.png"
export default {
    name: "Navbar",
    data() {
        return {
            logoImg: logoImg,
        };
    }
}
</script>