<template pug>

</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { api } from 'boot/axios'

const schools = () => {
    api.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
            api.get('http://127.0.0.1:8000/api/schools').then(response=>{
                    console.log(response)
                }).catch(error => {
                      console.log(error)
                })
          })
}

onMounted(()=>{
    schools()
})


</script>
