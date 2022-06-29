<template lang="pug">
.container
  .position
    q-img(src="signup.png",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")
    q-form.q-gutter-md(@submit.prevent="submit")
      q-input(type="text",filled,v-model="form.name",label="Name" required)
      q-input(type="email",filled,v-model="form.email",label="Email" required)
      //- 1st password field
      q-input(v-show="my_type",type="password",filled,v-model="form.password",label="Password" required)
      q-input(v-show="!my_type",type="text",filled,v-model="form.password",label="Password")
      //- 2nd password field
      q-input(v-show="my_type",type="password",filled,v-model="form.password_confirmation",label="Repeat Password" required)
      q-input(v-show="!my_type",type="text",filled,v-model="form.password_confirmation",label="Repeat Password")

      q-toggle(v-model="form.viewPass",@click="show_pass",label="show password" color="pink",,style="float:left;")

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
import { onMounted, reactive, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  terms: false,
  viewPass: false,
});

const my_type = ref(true);

const submit = () => {
  api
    .post("/register", form)
    .then((response) => {
      router.push("/verify-email");
    })
    .catch((error) => {
      console.log(error);
    });
};

const show_pass = () => {
  my_type.value = !my_type.value;
};

onMounted(() => {});
</script>
