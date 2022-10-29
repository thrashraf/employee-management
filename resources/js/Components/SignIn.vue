<template>
  <a-row>
    <a-form
      name="basic"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="email"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="form.email" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="form.password" />
      </a-form-item>

      <a-form-item name="remember">
        <a-checkbox v-on:click="rememberMe" >Remember me</a-checkbox>
      </a-form-item>

      <a-form-item>
        <p>Doesn't have an account? <router-link to="/signUp">Sign Up</router-link></p>
      </a-form-item>

      <a-form-item>
        <a-button @click.prevent="login" type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    </a-row>
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