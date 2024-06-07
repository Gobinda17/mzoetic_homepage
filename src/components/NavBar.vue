<template>
    <header class="text-slate-500 w-full bg-slate-50">
        <div class="container mx-auto">
            <div class="bg-slate-50 grid grid-cols-12 border-b">
                <div class="sm:col-span-full px-[20px] py-[20px]">
                    <div class="flex items-center justify-end gap-4">
                        <button
                            class="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-md text-slate-50 hover:bg-gradient-to-l w-[10%] transition">Host
                            with MZoetic</button>
                        <button
                            class="bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 rounded-md text-slate-50 hover:bg-gradient-to-l w-[10%] transition">Login/Sign
                            Up</button>
                        <button class="text-slate-800 text-xl">
                            <i class="ri-menu-line"></i>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container mx-auto px-4">
                    <div class="flex items-center justify-center p-[15px] gap-4">
                        <div class="flex items-center justify-start w-[10%]">
                            <img :src="logoImg" alt="Logo" />
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
                                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                            <!--
                                                Icon when menu is open.
        
                                                 Menu open: "block", Menu closed: "hidden"
                                            -->
                                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div
                                        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div class="hidden sm:ml-6 sm:block">
                                            <div class="flex space-x-4">
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl"
                                                    aria-current="page">
                                                    <i class="icon-tour text-3xl gradient-text"></i>
                                                    Tour
                                                </a>
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl">
                                                    <i class="icon-camp text-3xl gradient-text"></i>
                                                    Camp
                                                </a>
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl">
                                                    <i class="icon-events text-3xl gradient-text"></i>
                                                    Events
                                                </a>
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl">
                                                    <i class="icon-adventure text-3xl gradient-text"></i>
                                                    Adventures
                                                </a>
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl">
                                                    <i class="icon-ride text-3xl gradient-text"></i>
                                                    Ride
                                                </a>
                                                <a href="#" class="text-slate-900 px-3 py-2 text-xl">
                                                    <i class="icon-rental text-3xl gradient-text"></i>
                                                    Rental
                                                </a>
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
        </div>
    </header>
</template>

<script>
import logoImg from "../assets/images/logo.svg"
// import logoImg from "../assets/images/logo-white.png"
export default {
    name: "Navbar",
    data() {
        return {
            logoImg: logoImg,
        };
    }
}
</script>