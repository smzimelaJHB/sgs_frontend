<template lang="pug">
.loginImage
  q-img(:src="form.loginImage",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")

.position
  q-form.q-gutter-md(@submit.prevent="submit")
    q-input(type="email",filled,v-model="form.email",label="Email" required)
    q-input(v-show="my_type",type="password",filled,v-model="form.password",label="Password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="form.password",label="Password")

    q-toggle(v-model="form.viewPass",@click="show_pass",label="show password" color="pink",,style="float:left;")

    .btnSpace
      q-btn(color='blue',type="submit",label="Submit" )
      q-btn(to='/reset',color='red',type='submit') Reset

</template>

<style>
  .loginImage{
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin-top: 5%;
  }
  .position{
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin-top: 5%;
  }
  .btnSpace{
    display: flex;
    justify-content: space-between
  }
  /* form{
    min-width: 50%;
  } */

</style>


<script setup>
import { onMounted, reactive, ref } from 'vue';
import { api} from 'boot/axios'

const form = reactive({
    email: '',
    password: '',
    viewPass:false,
    loginImage : ref('key.png')
});

const my_type = ref(true)

const submit = () => {
    api.get('/sanctum/csrf-cookie').then(response => {
            api.post('/login', form).then(response=>{
                    console.log(response)
                }).catch(error => {
                      console.log(error)
                })
          })
}


const show_pass = ()=>{
  my_type.value = !my_type.value
}

onMounted(()=>{

})

</script>
