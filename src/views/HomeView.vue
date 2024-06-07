<template>
  <div>
    <navBar></navBar>
  </div>

  <section class="container mx-auto text-slate-500">
    <div class="grid grid-cols-12">
      <div class="sm:col-span-8">
        <div class="flex items-center gap-2">
          <img class="w-[14%]" src="../assets/images/explore.svg" alt="Explore" />
          <p class="font-custom font-thin text-[28px] tracking-[3px]">
            With Organiser
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="main-wrapper mt-[250px] mb-[250px] container">
    <div class="relative flex items-center gap-6">
      <div class="event-items relative w-full">
        <img src="../assets/images/events.png" alt="Events" />
        <img class="w-[39%]" src="../assets/images/event-bg.svg" alt="Event BG" />
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
      for (let i = 0; i < this.carouselCardsCount; i++) {
        if (i >= 3) {
          this.carouselCards[i].style['display'] = 'none';
        }
      }
    },
    changeSlide(event) {
      if (event === 'from-right' && this.carouselCards[this.changeSliderIndexRight]) {
        this.carouselCards[this.changeSliderIndexLeft].style['display'] = 'none';
        this.carouselCards[this.changeSliderIndexRight].style['display'] = 'block';
        this.changeSliderIndexLeft++;
        this.changeSliderIndexRight++;
      } else if (event === 'from-left' && this.carouselCards[this.changeSliderIndexLeft]) {
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
