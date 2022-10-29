<template>
  <a-row>
    <a-form
      name="basic"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <a-form-item
        label="name"
        name="name"
        :rules="[{ required: true, message: 'Please input your name!' }]"
      >
        <a-input v-model:value="form.name" />
      </a-form-item>

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

      <a-form-item>
        <p>Already have an account? <router-link to="/signIn">Login</router-link></p>
      </a-form-item>

      <a-form-item>
        <a-button @click.prevent="login" type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    </a-row>
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

    const login = async() => {

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
      login
    };
  },
    
  }
</script>