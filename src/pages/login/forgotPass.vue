<template lang="pug">
.loginImage
  q-img(:src="loginImage",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")
.position
  .mb-4.font-medium.text-sm.text-green-600(v-if="status").
    {{ status=="422" ? "Something went Wrong, Try again!":status }}

  q-form.q-gutter-md(@submit.prevent="reset" style="margin-top: 10px;")
    q-input(type="email",filled,v-model="form.email",label="Email" required)

    q-btn(:disabled="processing" color='blue',type="submit",label="Email Verification",style="float:right;")

</template>

<script setup>
import { computed, ref } from "vue";
import { api } from "boot/axios";

import { useQuasar } from "quasar";
const $q = useQuasar();

const setStatus = ref();
const setErrors = ref();
const status = computed(() => setStatus.value);
const errors = computed(() => setErrors.value);

const processing = ref(false);
const loginImage = ref("reset.png");
const form = ref({
  email: "",
});

const triggerPositive = (msg) => {
  $q.notify({
    type: "positive",
    message: msg,
  });
};

const triggerNegative = (msg) => {
  $q.notify({
    type: "negative",
    message: msg,
  });
};

const reset = async () => {
  processing.value = true;
  await api
    .post("/forgot-password", form.value)
    .then((response) => {
      setStatus.value = response.data.status;
      triggerPositive(response.statusText);
    })
    .catch((error) => {
      setStatus.value = error.response.status;
      processing.value = false;
      triggerNegative(error.response.statusText);
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
  flex-direction: column;
  align-items: center;
}

.btnSpace {
  display: flex;
  justify-content: space-between;
}
</style>
