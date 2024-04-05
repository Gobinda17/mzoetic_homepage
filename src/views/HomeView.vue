<template>
  <div>
    <navBar></navBar>
  </div>

  <section class="hero-wrapper bg-cover">
    <div class="flex items-center justify-center py-[200px] text-slate-50 flex-col gap-4 bg-slate-950/50">
      <h1 class="text-8xl">Find Next Place To Visit</h1>
      <span class="text-2xl text-slate-50">Discover amzaing places at exclusive deals</span>

      <div class="search-wrapper">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-2">
          <div class="sm:col-span-3">
            <div class="relative h-full shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <i class="ri-search-line text-gray-500 sm:text-sm text-lg"></i>
              </div>
              <input type="text" name="searh" id="search"
                class="block w-full border-0 py-[20px] pl-8 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                placeholder="Keywords">
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="h-full shadow-sm">
              <select id="destination" name="destination"
                class="h-full block w-full border-0 py-[20px] pl-8 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option selected disabled>Destinations</option>
                <option>Destination-1</option>
                <option>Destination-2</option>
                <option>Destination-3</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="h-full shadow-sm">
              <select id="durations" name="durations"
                class="h-full block w-full border-0 py-[20px] pl-8 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option selected disabled>Durations</option>
                <option>Durations-1</option>
                <option>Durations-2</option>
                <option>Durations-3</option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <div class="h-full shadow-sm">
              <button
                class="bg-slate-950 text-slate-50 h-full w-full hover:bg-transparent hover:border-slate-950 hover:border-2 transition">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="deals-of-day-wrapper absolute w-full top-[78%]">
    <div class="md:container mx-auto">
      <div class="grid grid-cols-1">
        <div class="bg-sky-400 p-[15px]">
          <h1 class="text-2xl text-slate-900 bg-slate-50 absolute top-[-15%] px-4 py-2 rounded-xl shadow-xl">Deals of
            the Day</h1>
          <div class="sm:col-span-1 py-[15px] px-[20px]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-5">
              <div class="sm:col-span-4">
                <div class="flex items-center gap-4">
                  <p class="text-slate-50 text-8xl">
                    <i class="ri-globe-fill"></i>
                  </p>
                  <div class="flex flex-col text-slate-50 gap-2">
                    <h1 class="text-xl">Deals on Destinations</h1>
                    <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi,
                      officiis excepturi dolorem at vero neque accusantium id dolore in consectetur ducimus, quae
                      reprehenderit odio distinctio itaque? Earum, cum odio.</p>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <div class="flex items-center gap-4">
                  <p class="text-slate-50 text-8xl">
                    <i class="ri-money-dollar-circle-line"></i>
                  </p>
                  <div class="flex flex-col text-slate-50 gap-2">
                    <h1 class="text-xl">Deals on Prices</h1>
                    <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi,
                      officiis excepturi dolorem at vero neque accusantium id dolore in consectetur ducimus, quae
                      reprehenderit odio distinctio itaque? Earum, cum odio.</p>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-4">
                <div class="flex items-center gap-4">
                  <p class="text-slate-50 text-8xl">
                    <i class="ri-building-line"></i>
                  </p>
                  <div class="flex flex-col text-slate-50 gap-2">
                    <h1 class="text-xl">Deals on Hotels</h1>
                    <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eligendi,
                      officiis excepturi dolorem at vero neque accusantium id dolore in consectetur ducimus, quae
                      reprehenderit odio distinctio itaque? Earum, cum odio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="main-wrapper mt-[250px] mb-[250px]">
    <div class="md:container mx-auto">
      <div class="grid grid-cols-1 gap-6">
        <div class="sm:col-span-1">
          <h1 class="text-6xl">Stays</h1>
        </div>
        <div class="sm:col-span-1">
          <div class="bg-sky-400/25 text-slate-900 p-[15px] shadow-md h-full w-full">
            <div class="flex items-center justify-between">
              <ul class="flex items-center justify-start w-full gap-1">
                <li>
                  <button
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500 "
                    @click="changeTabs('camp')"
                    :class="defaultTab === 'camp' ? 'active [&.active]:border-b-2 [&.active]:border-blue-500' : ''">
                    Camp-Sites
                  </button>
                </li>
                <li>
                  <button
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500"
                    @click="changeTabs('hotels')"
                    :class="defaultTab === 'hotels' ? 'active [&.active]:border-b-2 [&.active]:border-blue-500' : ''">
                    Hotels
                  </button>
                </li>
                <li>
                  <button
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500"
                    @click="changeTabs('homestays')"
                    :class="defaultTab === 'homestays' ? 'active [&.active]:border-b-2 [&.active]:border-blue-500' : ''">
                    Homestays
                  </button>
                </li>
              </ul>
              <ul class="flex items-center justify-end w-full gap-1">
                <li>
                  <button
                    class="text-slate-900 hover:text-slate-50 bg-slate-50 shadow-md transition ease-in-out duration-300 py-[15px] px-[50px] rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
                    <i class="ri-map-pin-line"></i>
                    Nearby Top-Rated
                  </button>
                </li>
              </ul>
            </div>

            <!-- Cards Carousel -->
            <div class="flex items-center relative" v-show="defaultTab === 'camp'">
              <button class="bg-slate-200/50 text-slate-950 w-[50px] h-[50px] absolute left-[-2%] text-3xl rounded-full hover:bg-slate-200 transition-colors shadow-lg" @click="changeSlide('from-right')">
                <i class="ri-arrow-left-line"></i>
              </button>
              <div class="flex items-center gap-5 justify-evenly w-full">
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 carousel-cards">
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src="../assets/images/hotels.jpg" alt="product image" />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Card - 1</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 carousel-cards">
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src="../assets/images/hotels.jpg" alt="product image" />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Card - 2</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 carousel-cards">
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src="../assets/images/hotels.jpg" alt="product image" />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Card - 3</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4 carousel-cards">
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src="../assets/images/hotels.jpg" alt="product image" />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Card - 4</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                      <a href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                        to cart</a>
                    </div>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-transparent mt-4 carousel-cards">
                  <div class="px-5 py-5">
                    <button class="text-slate-900 hover:text-slate-50 bg-slate-50 shadow-md transition ease-in-out duration-300 py-[15px] px-[50px] rounded-md hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
                      See More
                    </button>
                  </div>
                </div>
              </div>
              <button class="bg-slate-200/50 text-slate-950 w-[50px] h-[50px] absolute left-[99%] text-3xl rounded-full hover:bg-slate-200 transition-colors shadow-lg" @click="changeSlide('from-left')">
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import navBar from "../components/NavBar.vue"
export default {
  name: "HomePage",
  components: {
    navBar
  },
  data() {
    return {
      defaultTab: "camp",
      carouselCardsCount: 0,
      carouselCards: [],
      changeSliderIndexRight: 3,
      changeSliderIndexLeft: 0,
    };
  },
  methods: {
    changeTabs(event) {
      this.defaultTab = event;
    },
    carouselSliders() {
      this.carouselCardsCount = document.getElementsByClassName("carousel-cards").length;
      this.carouselCards = document.getElementsByClassName("carousel-cards");
      for(let i = 0; i < this.carouselCardsCount; i++) {
        if(i >= 3) {
          this.carouselCards[i].style['display'] = 'none';
        }
      }
    },
    changeSlide(event) {
      if(event === 'from-right' && this.carouselCards[this.changeSliderIndexRight]) {
        this.carouselCards[this.changeSliderIndexLeft].style['display'] = 'none';
        this.carouselCards[this.changeSliderIndexRight].style['display'] = 'block';
        this.changeSliderIndexLeft++;
        this.changeSliderIndexRight++;
      } else if(event === 'from-left' && this.carouselCards[this.changeSliderIndexLeft]){
        this.changeSliderIndexLeft--;
        this.changeSliderIndexRight--;
        this.carouselCards[this.changeSliderIndexLeft].style['display'] = 'block';
        this.carouselCards[this.changeSliderIndexRight].style['display'] = 'none';
      }
    }
  },
  mounted() {
    this.carouselSliders();
  }
}
</script>

<style scoped>
.hero-wrapper {
  background-image: url("../assets/images/hero-pic.jpg");
}
</style>