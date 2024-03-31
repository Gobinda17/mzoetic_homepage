<template>
  <div>
    <navBar></navBar>
  </div>
  <section class="hero-wrapper">
    <div class="flex items-center justify-center py-[165px] text-slate-50 flex-col gap-4">
      <h1 class="text-8xl">Find Next Place To Visit</h1>
      <span class="text-2xl text-slate-50">Discover amzaing places at exclusive deals</span>
      <div class="search-wrapper">
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="text" name="price" id="price"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00">
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">Currency</label>
            <select id="currency" name="currency"
              class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
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
    };
  }
}
</script>

<style scoped>
.hero-wrapper {
  background-image: url("../assets/images/hero-pic.jpg");
}
</style>