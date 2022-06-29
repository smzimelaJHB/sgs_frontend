<template lang="pug">
.container
  .position
    q-img(:src="loginImage",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")
    q-form.q-gutter-md(@submit.prevent="login")
      q-input(type="email",filled,v-model="form.email",label="Email" required)
      q-input(v-show="my_type",type="password",filled,v-model="form.password",label="Password" required)
      q-input(v-show="!my_type",type="text",filled,v-model="form.password",label="Password")

      .btnSpace
        q-toggle(v-model="viewPass",@click="show_pass",label="show pass" color="pink")
        q-btn(color='blue',type="submit",label="Submit")
        q-btn(to='/forgot-password',color='red',type='submit') Reset Pass
</template>

<style>
.container {
  display: flex;
  max-width: 100%;
  justify-content: center;
}
.position {
  display: flex;
  max-width: 70%;
  justify-content: center;
  margin-top: 5%;
  flex-direction: column;
}
.btnSpace {
  margin-top: 5%;
  display: flex;
  justify-content: flex-end;
}
</style>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const router = useRouter();
const loginImage = ref("key.png");
const viewPass = ref(false);
const credentials = ref(true);

const form = reactive({
  email: "",
  password: "",
});

const my_type = ref(true);
let logged = ref(false);

const triggerNegative = (msg) => {
  $q.notify({
    type: "negative",
    message: msg,
    position: "bottom",
  });
};

const invalidDetails = () => {
  $q.notify({
    type: "negative",
    position: "center",
    timeout: 9000,
    textColor: "white",
    message: "Invalid email or password!",
  });
};

const login = async () => {
  await api
    .post("/login", form)
    .then((response) => {
      logged.value = true;
      router.push("/dashboard");
    })
    .catch((error) => {
      triggerNegative(error.response.statusText);
      credentials.value = false;
      invalidDetails();
    });
};

const show_pass = () => {
  my_type.value = !my_type.value;
};

onMounted(() => {});
</script>
