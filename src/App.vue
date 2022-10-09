<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar/> <!-- botei nav aqui pq ai ela já fica pra todas as páginas -->
    <RouterView/>
</template>

<style scoped>

</style>
