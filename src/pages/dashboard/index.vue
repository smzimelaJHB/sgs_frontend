<template>
  <h1>Home PAge</h1>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { api } from "boot/axios";
import { useRouter } from "vue-router";
import { onMounted,reactive } from "vue";


const router = useRouter();

const userInfo = reactive({
  name: "",
  email: "",
  email_verified_at: "",
  created_at: "",
  updated_at: "",
  id: "",
});

const logout = () => {
  api
    .post("/logout")
    .then((response) => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  api.get("/api/user").then((response) => {
    userInfo.value = response.data;
  });
});

</script>
