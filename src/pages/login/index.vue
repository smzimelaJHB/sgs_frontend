<template lang="pug">
.loginImage
  q-img(:src="formData.loginImage",spinner-color="white",style="display:flex;max-height: 300px; max-width: 300px")
.position
  q-form.q-gutter-md(@submit="onSubmit")
    q-input(type="email",filled,v-model="formData.email",label="email" required)
    q-input(v-show="my_type",type="password",filled,v-model="formData.password",label="password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="formData.password",label="password" required)

    q-toggle(v-model="formData.viewPass",@click="show_pass",label="show password" )
    q-toggle(v-model="formData.remember",label="remember me")
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


</style>


<script setup>
import { onMounted, reactive, ref } from 'vue';

const formData =
        reactive({
              email:"",
              password:"",
              remember:false,
              viewPass:false,
              loginImage:ref('key.png')
         })

const my_type = ref(true)

const onSubmit = ()=>{
  console.log(formData)
}

const show_pass = ()=>{
  my_type.value = !my_type.value
}

onMounted(()=>{

})

</script>
