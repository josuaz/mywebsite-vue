<template>
<div id="home" class="overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 flex flex-row flex-wrap min-h-screen pb-2"> 
        <div class="relative w-full md:w-1/2">
            <div class="text-white flex flex-col h-full justify-center mb-auto text-2xl pl-6 lg:pl-24 z-[1000] pt-24 pb-16">
                <h1 class="text-6xl font-bold z-10">Hi!</h1>
                <h1 class="text-2xl ml-0.5 font-semibold z-10">I'm Joshua Aliansa Pranajaya</h1>
                <h2 class="flex flex-row pl-0.5 text-2xl z-10">
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
        <div class="w-full md:w-1/2 px-2 lg:pr-24 flex flex-col justify-center">
            <div class="z-30 flex flex-row flex-wrap">
                <img :src="img" class="w-48 h-48 object-cover object-top rounded-full bg-white p-1 mx-auto lg:mr-auto lg:ml-6" alt="">
                <div class="w-full justify-around lg:justify-end md:w-min grow flex-row flex pb-5 pr-5 relative">
                    <div class="mt-auto p-2 pb-1 mr-5">
                        <button class="font-semibold peer flex mb-1 flex-row duration-150 hover:border-black border-b-2 border-transparent">Projects
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mt-0.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                    <button class="rounded-full h-min mt-auto font-semibold p-2 duration-150 bg-gradient-to-r hover:-translate-y-1 text-white from-blue-900 to-purple-900">Hire me!</button>
                </div>
                
            </div>
            <div class="p-2 rounded-md bg-white shadow-lg shadow-black/50 z-20 pt-36 lg:pt-24 -mt-[9.5rem] lg:-mt-[5.5rem]">
                <p class="text-center text-xl font-semibold"> 
                    Hi, I'm Joshua Aliansa Pranajaya, My experiences covers about:
                </p>
                <ul class="list-disc list-inside px-5 text-lg">
                    <li>2+ years experience in back-end development</li>
                    <li>1+ year experience in front-end development</li>
                    <li>1+ year experience digital marketing</li>
                </ul>
            </div>
        </div>
</div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<script setup>
import img from '../assets/img/joshua2.png'
const arr = ["Web Designer", "Front-end Developer", "Back-end Developer"];
</script>