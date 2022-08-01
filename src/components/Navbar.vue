<template>
    <div id="navbar" class="bg-white fixed w-full px-5 py-2 flex flex-row z-10">
        <router-link :to="{name: 'Home'}" class="font-semibold text-xl p-1 rounded-md hover:bg-neutral-100 duration-150">Joshua</router-link>
        <ul class="my-auto flex flex-row mx-auto">
            <li><router-link :to="{name: 'Home'}" class=" border-b-2 border-transparent duration-150 nav-link font-semibold">Home</router-link></li>
            <li><router-link :to="{name: 'Portfolio'}" class=" border-b-2 border-transparent duration-150 nav-link font-semibold mx-5">Portfolio</router-link></li>
            <li><router-link :to="{name: 'Contact'}" class=" border-b-2 border-transparent duration-150 nav-link font-semibold">Contact</router-link></li>
        </ul>
        <button class="p-2 rounded-full bg-blue-600 hover:bg-blue-500 duration-150 font-semibold text-white">Hire Me!</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active{
    @apply border-blue-600;
}
</style>