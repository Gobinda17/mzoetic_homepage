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
        <nav class="bg-slate-50">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-center p-[15px] gap-4">
                    <div class="flex items-center justify-start w-1/2">
                        <img class="w-20" :src="logoImg" alt="Logo" />
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <div class="mx-auto max-w-7xl">
                            <div class="relative flex h-16 items-center justify-between">
                                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <!-- Mobile menu button-->
                                    <button type="button"
                                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                        <span class="absolute -inset-0.5"></span>
                                        <span class="sr-only">Open main menu</span>
                                        <!--
                                            Icon when menu is closed.
    
                                            Menu open: "hidden", Menu closed: "block"
                                        -->
                                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        <!--
                                            Icon when menu is open.
    
                                             Menu open: "block", Menu closed: "hidden"
                                        -->
                                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div class="hidden sm:ml-6 sm:block">
                                        <div class="flex space-x-4">
                                            <a href="#" class="text-slate-700 hover:border-b hover:border-slate-900 px-3 py-2 text-xl font-medium"
                                                aria-current="page">
                                                Home
                                            </a>
                                            <a href="#"
                                                class="text-slate-700 hover:border-b hover:border-slate-900 px-3 py-2 text-xl font-medium">
                                                Team
                                            </a>
                                            <a href="#"
                                                class="text-slate-700 hover:border-b hover:border-slate-900 px-3 py-2 text-xl font-medium">
                                                Projects
                                            </a>
                                            <a href="#"
                                                class="text-slate-700 hover:border-b hover:border-slate-900 px-3 py-2 text-xl font-medium">
                                                Calendar
                                            </a>
                                            <a href="#" class="bg-"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile menu, show/hide based on menu state. -->
                        <div class="sm:hidden" id="mobile-menu">
                            <div class="space-y-1 px-2 pb-3 pt-2">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="#"
                                    class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page">Dashboard</a>
                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                                <a href="#"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                            </div>
                        </div>

                        <!-- <p class="text-salte-900">
                            <i class="ri-tent-line"></i> stay
                            <i class="ri-caravan-line"></i> tour
                            <i class="ri-treasure-map-line"></i> adventure
                            <i class="ri-motorbike-fill"></i> ride
                            <i class="ri-car-line"></i> rentals
                            <i class="ri-calendar-event-line"></i> event
                            <i class="ri-store-2-line"></i> vendor login
                        </p> -->
                    </div>
                </div>
            </div>
        </nav>
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