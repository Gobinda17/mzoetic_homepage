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

  <section class="main-wrapper mt-[250px]">
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
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500"
                    @click="changeTabs('camp')"
                    :class="defaultTab === 'camp' ? 'active:border-b-2 active:border-blue-500':''">
                    Camp-Sites
                  </button>
                </li>
                <li>
                  <button
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500">
                    Hotels
                  </button>
                </li>
                <li>
                  <button
                    class="text-slate-900 bg-slate-50 shadow-md transition-all py-[15px] px-[50px] rounded-md hover:border-b-2 hover:border-blue-500">
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
    };
  },
  methods: {
    changeTabs(event) {
      this.defaultTab = event;
    },
  }
}
</script>

<style scoped>
.hero-wrapper {
  background-image: url("../assets/images/hero-pic.jpg");
}
</style>