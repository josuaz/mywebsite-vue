<script setup>
import navbar from './Navbar.vue'
import sidebar from './Sidebar.vue'

</script>
<template>
<div class="flex flex-row">
        <sidebar />
    <div class="w-full">
        <navbar />
        <router-view></router-view>
    </div>
</div>
</template>

<style>

</style>