<template>
  <h1>Dashboard</h1>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { api } from "boot/axios";
import { useRouter } from "vue-router";

const router = useRouter();

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
</script>
