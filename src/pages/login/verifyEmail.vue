<script setup>
import { onBeforeMount, computed, ref } from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";

const router = useRouter();
const setStatus = ref();
const status = computed(() => setStatus.value === "verification-link-sent");

// onBeforeMount(() => {
//   if (store.hasVerified) {
//     router.push({ name: "dashboard" });
//   }
// });

const submit = () => {
  api
    .post("/email/verification-notification")
    .then((response) => {
      setStatus.value = "verification-link-sent";
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template lang="pug">

.fixed-center
  .mb-4.text-sm.text-blue-600
    | Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.


  .mb-4.font-medium.text-sm.text-green-600(v-if="status" style="color: green; margin-top: 10px;")
    | A new verification link has been sent to the email address you provided during registration.

  form(@submit.prevent="submit")
    .mt-4.flex.items-center.justify-between.float-right(style="margin-top: 10px;")
      q-btn(label="Resend Verification Email", glossy, color="purple")


</template>
