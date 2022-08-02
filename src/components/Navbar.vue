<template>
    <div id="navbar" class="flex text-white fixed w-full px-5 py-2 flex-row z-10">
        <button class="p-2 rounded-full block md:hidden hover:bg-white/20 text-white duration-150 focus:border-white border-2 border-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
        </button>
        <router-link :to="{name: 'Home'}" class="mx-auto md:mx-0 font-semibold text-xl p-1 rounded-md hover:bg-white-20 duration-150">Joshua</router-link>
        <ul class="my-auto md:flex flex-row mx-auto hidden">
            <li><router-link :to="{name: 'Home'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Home</router-link></li>
            <li><router-link :to="{name: 'Portfolio'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold mx-5">Portfolio</router-link></li>
            <li><router-link :to="{name: 'Contact'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Contact</router-link></li>
        </ul>
        <button class="p-2 rounded-full border-2 border-white hover:bg-white/20 duration-150 font-semibold text-white">Hire Me!</button>
    </div>
</template>

<script>

export default {

}
</script>

<style>
.router-link-active{
    @apply border-white;
}
</style>