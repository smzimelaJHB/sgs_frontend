<script setup>
import { computed, ref } from "vue";
import { api } from "boot/axios";

const setStatus = ref();
const setErrors = ref();
const status = computed(() => setStatus.value);
const errors = computed(() => setErrors.value);

const loginImage = ref("reset.png");
const form = ref({
  email: "",
});

const reset = () => {
  api
    .post("/forgot-password", form.value)
    .then((response) => {
      setStatus.value = response.data.status;
    })
    .catch((error) => {
      if (error.response.status !== 422) throw error;
    });
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
  .mb-4.font-medium.text-sm.text-green-600(v-if="status").
    | {{ status }}

  q-form.q-gutter-md(@submit.prevent="reset")
    q-input(type="email",filled,v-model="form.email",label="Email" required)

    q-btn(color='blue',type="submit",label="Email Verification",style="float:right;")

</template>
