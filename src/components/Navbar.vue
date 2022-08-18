<template>
    <div id="navbar" :style="opacity" :class="navClass" class=" border-b-2 flex fixed w-full px-5 py-2 flex-row z-40 bg-white/[20%]">
        <a href="#home" class="mx-auto md:mx-0 font-semibold text-xl p-1 rounded-md hover:bg-white-20 duration-150">Joshua</a>
        <ul v-scroll-spy-active v-scroll-spy-link class="my-auto md:flex flex-row mx-auto hidden">
            <li><a href="#home" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Home</a></li>
            <li class="mx-5"><a href="#portfolio" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Portfolio</a></li>
            <li><a href="#contact" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Contact</a></li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const opacity = ref(0);
const navClass = ref('text-white border-transparent');
document.addEventListener("scroll", () => {
    if(window.scrollY < 201){
        opacity.value = `background-color: rgb(255 255 255 / ${Math.round(window.scrollY) / 2}%);`;
    } else{
        opacity.value = 'background-color: rgb(255 255 255 / 100%);';
    }
    if(window.scrollY < 50){
        navClass.value = 'text-white border-transparent';
    } else {
        navClass.value = 'text-black border-blue-600';
    }


})

</script>
