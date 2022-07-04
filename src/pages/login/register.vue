<template lang="pug">
.container
  .position
    q-img(src="signup.png",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")
    q-form.q-gutter-md(@submit.prevent="submit")
      q-input(type="hidden", name="_token", value="{{ csrf_token() }}")
      q-input(type="text",filled,v-model="form.name",label="Name" required)
      q-input(type="email",filled,v-model="form.email",label="Email" required)
      //- 1st password field
      q-input(v-show="my_type",type="password",filled,v-model="form.password",label="Password" required)
      q-input(v-show="!my_type",type="text",filled,v-model="form.password",label="Password")
      //- 2nd password field
      q-input(v-show="my_type",type="password",filled,v-model="form.password_confirmation",label="Repeat Password" required)
      q-input(v-show="!my_type",type="text",filled,v-model="form.password_confirmation",label="Repeat Password")

      q-toggle(v-model="viewPass",@click="show_pass",label="show pass" color="pink",,style="float:left;")

      q-btn(color='blue',type="submit",label="Submit",style="float:right;")


</template>

<style>
.container {
  display: flex;
  max-width: 100%;
  justify-content: center;
}

.position {
  margin-top: 5%;
}
form {
  min-width: 70%;
}
</style>

<script setup>

import { reactive, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";


const router = useRouter();
const terms= false;
let viewPass= ref(false);
let my_type = ref(true);

const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});


const show_pass = ()=> {
      my_type.value = !my_type.value;
  }


const submit = ()=>{
  api.get('/sanctum/csrf-cookie').then(response => {
    api
      .post("/register", form)
      .then((response) => {
        router.push("/verify-email");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  });
  }


</script>
