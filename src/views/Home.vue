<template>
    <navbar />
    <div v-scroll-spy>
        <hero/>
        <portfolio />
        <about />
        <footers />
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import hero from '../components/Hero.vue'
import portfolio from '../components/Portfolio.vue'
import about from '../components/About.vue'
import footers from '../components/Footer.vue'
</script>

<style>
.active{
    @apply border-b-2 border-white;
}
</style>