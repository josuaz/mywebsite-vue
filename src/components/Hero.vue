<template>
<div class="overflow-hidden h-[50vh] bg-gradient-to-r from-blue-900 to-purple-900 flex flex-row flex-wrap"> 
        <div class="relative h-full md:w-1/2">
            <div class="text-white absolute top-1/4 text-2xl z-10 pl-6 lg:pl-24">
                <h1 class="text-6xl">Hi!</h1>
                <h1 class="text-2xl ml-0.5">I'm Joshua Aliansa Pranajaya</h1>
                <h2 class="flex flex-row pl-0.5 text-2xl">
                    I'm a&nbsp;<VueWriter :array="arr" :typeSpeed="35" class="border-r-4 border-white" :eraseSpeed="25" />
                </h2>
            </div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
        <div class="flex md:1/2">
            <img :src="img" class="w-48 h-48 my-auto mx-auto rounded-full object-cover" alt="">
        </div>
</div>
</template>
<script setup>
import img from '../assets/img/Joshua.jpg'
const arr = ["Web Designer", "Front-end Developer", "Back-end Developer"];
</script>
<style></style>