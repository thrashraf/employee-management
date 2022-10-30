<template>
<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2>Sign in to your account</h2>
     
    </div>
    <form class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="input" placeholder="Email" v-model="form.email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="input rounded-t-none rounded-b-md" placeholder="Password" v-model="form.password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button class="primary" @click.prevent="login">
          Sign in
        </button>
      </div>

      <div class="text-center ">
        <p>Doesn't have an account? <router-link to="/signUp">Sign Up</router-link></p>
      </div>
    </form>
  </div>
</div>
</template>
 
<script>
 import axios from 'axios';
 import router from '@/router'

  export default {
    name: 'SignIn',
 
    setup() {
    const form = {
      email: '',
      password: '',
      remember: true,
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const login = async() => {

      console.log(form)
      axios.post('/api/login', form)
      .then((res) => {
        console.log(res)

        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
    }

    return {
      form,
      onFinishFailed,
      login
    };
  },
    
  }
</script>