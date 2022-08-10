<template>
    <navbar />
    <div v-scroll-spy>
        <hero/>
        <portfolio />
    </div>
</template>

<script setup>
import navbar from '../components/Navbar.vue'
import hero from '../components/Hero.vue'
import portfolio from '../components/Portfolio.vue'
</script>

<style>
.active{
    @apply border-b-2 border-white;
}
</style>