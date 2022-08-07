<template lang="">
    <nav class="fixed w-min z-50 bg-white top-0 left-0 h-screen px-5 pt-3">
        <router-link :to="{name: 'Home'}" class="font-semibold text-xl">Joshua</router-link>
        <ul>
            <li>
                <router-link :to="{name: 'Home'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Portfolio'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Portfolio</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Contact'}" class=" border-b-2 hover:border-white border-transparent duration-150 nav-link font-semibold">Contact</router-link>
            </li>
        </ul>
    </nav>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>