<template lang="">
    <div class="h-min lg:h-screen flex flex-col">
        <div id="portfolio" class="pt-16 pb-3">
        <h1 class="text-4xl font-semibold text-center">Portfolio</h1>
    </div>
    <div class="w-full grow bg-cover bg-right-top flex pt-12" :style="{'background-image': `url(${gunungan})`}">
        <div class="bg-white/50 lg:bg-white shadow-md rounded-md rounded-l-none w-full mt-auto mb-5 lg:w-1/2 h-min py-5 pl-12 pr-24 flex flex-col justify-center">
            <h1 class="font-bold text-2xl">
                <a href="https://toko-gunungan.com" target="_blank" class="flex items-center text-[#f3310e] hover:text-[#ff2600]">
                    GUNUNGAN
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </h1>
            <p>An e-commerce website for a small business that sale snacks and gifts in Batu city</p>
        </div>        
    </div>
    </div> 
</template>
<script setup>
import gunungan from '../assets/img/gunungan.png'
</script>
<style lang="">
    
</style>