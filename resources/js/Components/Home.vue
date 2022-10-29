<template>
    <router-link to="/">Home</router-link> |
    <router-link to="/signIn">Sign in</router-link> |
</template>

<script>
import axios from 'axios';
   export default {

    mounted() {
        axios.get('/api/user')
        .then((res) => {
            console.log(res)
        })
    }
   }
</script>