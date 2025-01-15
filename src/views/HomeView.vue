<script setup>
import Home from '@/components/Home.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()
const user = computed(() => store.state.user)
</script>
<template>
    <Home v-if="user"></Home>
    <h1 style="text-align: center;" v-else>Login to get started</h1>
</template>