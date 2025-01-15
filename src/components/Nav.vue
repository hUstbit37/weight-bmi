<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const user = computed(() => store.state.user)
</script>
<template>
    <header>
        <div class="container">
            <div id="logo">Weight Tracker</div>
            <nav>
                <ul class="nav-links">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <template v-if="user">
                        <li>Login as {{ user.email }}</li>
                        <li><a @click.prevent="store.dispatch('signOut')">Logout</a></li>
                    </template>
                    <template v-else>
                        <li><RouterLink to="/login">Login</RouterLink></li>
                        <li><RouterLink to="/signup">Signup</RouterLink></li>
                    </template>
                </ul>
            </nav>
        </div>
    </header>
</template>
<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    overflow: hidden;
}

header {
    background-color: hotpink;
    color: #fff;
    padding: 10px 0;
}

#logo {
    float: left;
    font-size: 1.5em;
}

nav {
    float: right;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav-links li {
    display: inline-block;
    /* margin-left: 20px; */
}

.nav-links li a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    display: inline-block;
    transition: background-color 0.3s;
}

.nav-links li a:hover {
    background-color: #555;
}

.content {
    padding: 50px 0;
    text-align: center;
}
</style>