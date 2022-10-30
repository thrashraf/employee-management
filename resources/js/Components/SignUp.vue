<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2>Register an account</h2>
     
    </div>
    <form class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="name" class="sr-only">name</label>
          <input id="name" name="name" type="name" autocomplete="current-name" required class="input" placeholder="name" v-model="form.name">
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="input rounded-t-none rounded-b-none" placeholder="Email address"  v-model="form.email">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="input rounded-t-none rounded-b-md" placeholder="Password"  v-model="form.password">
        </div>
      </div>

      <div>
        <button class="primary" @click.prevent="signup">
          Sign Up
        </button>
      </div>

      <div class="text-center ">
        <p>Already have an account? <router-link to="/signIn">Sign In</router-link></p>
      </div>
    </form>
  </div>
</div>
</template>
 
<script>
 import axios from 'axios';

  export default {
    name: 'SignUp',
 
    setup() {
    const form = {
      name: '',
      email: '',
      password: '',
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const signup = async() => {

      console.log(form)
      axios.post('/api/register', form)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    return {
      form,
      onFinishFailed,
      signup
    };
  },
    
  }
</script>