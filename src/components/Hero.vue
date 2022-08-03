<template>
<div class="overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 flex flex-row flex-wrap pt-24 pb-16 min-h-screen"> 
        <div class="relative w-full md:w-1/2">
            <div class="text-white flex flex-col h-full justify-center mb-auto text-2xl pl-6 lg:pl-24 z-[1000]">
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
        <div class="flex w-full md:w-1/2 mt-12 md:mt-0">
            <img :src="img" class="w-72 my-auto mx-auto rounded-full object-cover z-20" alt="">
        </div>
</div>
</template>
<script setup>
import img from '../assets/img/Joshua.jpg'
const arr = ["Web Designer", "Front-end Developer", "Back-end Developer"];
</script>
<style></style>