<template>
    <div id="navbar" class="flex text-white fixed w-full px-5 py-2 flex-row z-40">
        <a href="#home" class="mx-auto md:mx-0 font-semibold text-xl p-1 rounded-md hover:bg-white-20 duration-150">Joshua</a>
        <ul v-scroll-spy-active v-scroll-spy-link class="my-auto md:flex flex-row mx-auto hidden">
            <li><a href="#home" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Home</a></li>
            <li class="mx-5"><a href="#portfolio" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Portfolio</a></li>
            <li><a href="#contact" class="border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Contact</a></li>
        </ul>
        <button class="p-2 rounded-full border-2 border-white hover:bg-white/20 duration-150 font-semibold text-white">Let's chat</button>
    </div>
</template>
