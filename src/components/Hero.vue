<template>
<div class="overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 flex flex-row flex-wrap min-h-screen"> 
        <div class="relative w-full md:w-1/3">
            <div class="text-white flex flex-col h-full justify-center mb-auto text-2xl pl-6 lg:pl-24 z-[1000] pt-24 pb-16">
                <h1 class="text-6xl font-bold">Hi!</h1>
                <h1 class="text-2xl ml-0.5 font-semibold">I'm Joshua Aliansa Pranajaya</h1>
                <h2 class="flex flex-row pl-0.5 text-2xl">
                    I'm a&nbsp;<VueWriter :array="arr" :typeSpeed="70" class="border-r-4 border-white" :eraseSpeed="25" />
                </h2>
            </div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
        <div class="flex w-full md:w-2/3 mt-12 md:mt-0 bg-white shadow-lg pt-24 pb-16 pr-6 lg:pr-24" style="clip-path: polygon(39% 0, 100% 0, 100% 100%, 0% 100%);">
            <img :src="img" class="w-72 my-auto ml-auto rounded-full object-cover z-20" style="" alt="">
        </div>
</div>
<swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation]"
    class="mySwiper"
  >
    <swiper-slide>
      
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<script setup>
import img from '../assets/img/Joshua.jpg'
const arr = ["Web Designer", "Front-end Developer", "Back-end Developer"];
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>