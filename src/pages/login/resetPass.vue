<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const token = route.params.token;
const email = route.query.email;
const viewPass = ref(false);
const loginImage = ref("reset.png");

const form = ref({
  token: token,
  email: email,
  password: "",
  password_confirmation: "",
});

const reset = () => {
  api
    .post("/password-reset", form)
    .then((response) => {
      router.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

const show_pass = () => {
  my_type.value = !my_type.value;
};
</script>

<style>
.loginImage {
  display: flex;
  /* max-width: 100%; */
  justify-content: center;
  margin-top: 5%;
}
.position {
  display: flex;
  max-width: 100%;
  justify-content: center;
}
.btnSpace {
  display: flex;
  justify-content: space-between;
}
</style>

<template lang="pug">
.loginImage
  q-img(:src="loginImage",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")

.position
  q-form.q-gutter-md(@submit.prevent="reset")
    q-input(type="email",filled,v-model="form.email",label="Email" required)
    //- 1st password field
    q-input(v-show="my_type",type="password",filled,v-model="form.password",label="Password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="form.password",label="Password")
    //- 2nd password field
    q-input(v-show="my_type",type="password",filled,v-model="form.password_confirmation",label="Repeat Password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="form.password_confirmation",label="Repeat Password")

    q-toggle(v-model="viewPass",@click="show_pass",label="show password" color="pink",,style="float:left;")

    q-btn(color='blue',type="submit",label="Reset Password",style="float:right;")

</template>
