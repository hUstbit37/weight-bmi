<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()
const email = ref('')
const password = ref('')
const password_cf = ref('')
const error = ref(null)

const handleSignup = async () => {
    try {
        if (password.value != password_cf.value) {
            throw new Error("Password & Confirm Password do not match");
        }
        await store.dispatch('signup', { email: email.value, password: password.value })
        router.push('/')
    } catch (err) {
        error.value = err.message
    }
}
</script>

<template>
    <div class="login-div">
        <h1>Sign up to get started</h1>
        <div v-if="error">
            <p class="error">{{ error }}</p>
        </div>
        <form @submit.prevent="handleSignup">
            <input v-model="email" class="form-input" type="email" name="email" placeholder="Enter email...">
            <input v-model="password" class="form-input" type="password" name="password" placeholder="Enter password...">
            <input v-model="password_cf" class="form-input" type="password" name="password_cf" placeholder="Confirm password...">
            <input class="btn btn-submit" type="submit" value="Signup">
        </form>
    </div>
</template>
<style scoped>
.login-div {
    padding: 2rem;
}

label {
    font-weight: bold;
    margin-block: 10px;
}
form {
    margin: 0 auto;
}

form .form-input {
    width: 100%;
    display: block;
    appearance: none;
    outline: none;
    background-color: white;
    border: none;
    padding: 1rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
}
.form-input:hover {
    border: 2px solid hotpink;
}
form .btn {
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
}
.btn-submit {
    color: white;
    background-color: hotpink;
    font-size: 1.25rem;
    font-weight: 600;
    transition: 200ms linear;
    border-left: 3px solid transparent;
    margin-top: 0.5rem;
}
.btn-submit:hover {
    background-color: white;
    color: hotpink;
    border-left-color: hotpink;
}
</style>