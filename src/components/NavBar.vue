<template>
    <header class="bg-slate-50 text-slate-500">
        <div class="grid grid-cols-1 sm:grid-cols-6 border-b">
            <div class="sm:col-span-5 border-e">
                <div class="px-[20px] py-[20px]">
                    <div class="flex items-center justify-between ps-[20px]">
                        <div class="flex items-center gap-6 text-lg">
                            <p class="font-custom font-medium">
                                <i class="ri-phone-fill px-[5px]"></i>
                                <span>+91 8855667799</span>
                            </p>
                            <p class="font-custom font-medium">
                                <i class="ri-mail-line px-[5px]"></i>
                                <span>contactus@mzeotic.com</span>
                            </p>
                        </div>
                        <div class="flex items-center justify-evenly gap-4 text-xl">
                            <a href="#" class="hover:text-facebook">
                                <i class="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="#" class="hover:text-insta">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="#" class="hover:text-twitter">
                                <i class="ri-twitter-x-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sm:col-span-1">
                <div class="container px-[20px] py-[20px]">
                    <div class="flex items-center justify-between text-lg">
                        <a href="#">
                            <i class="ri-lock-line px-[5px]"></i>
                            <span>Login</span>
                        </a>
                        <a href="#">
                            <i class="ri-user-4-fill px-[5px]"></i>
                            <span>Sign Up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center p-[15px]">
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
    </header>
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