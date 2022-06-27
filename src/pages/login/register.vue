<template lang="pug">
.position
  q-form.q-gutter-md(@submit="onSubmit")
    q-input(type="text",filled,v-model="formData.fullName",label="Full Names" required)
    q-input(type="email",filled,v-model="formData.email",label="Email" required)
    q-input(type="number",filled,v-model="formData.IDNumber",label="ID Number" required)
    q-input(type="number",filled,v-model="formData.Cell",label="Cell" required)

    .q-pa-md
      .q-gutter-sm()
        q-radio(v-model="formData.gender",checked-icon="task_alt",unchecked-icon="panorama_fish_eye",val="f",label="Female")
        q-radio(v-model="formData.gender",checked-icon="task_alt",unchecked-icon="panorama_fish_eye",val="o",label="Other")
        q-radio(v-model="formData.gender",checked-icon="task_alt",unchecked-icon="panorama_fish_eye",val="m",label="Male")


    //- 1st password field
    q-input(v-show="my_type",type="password",filled,v-model="formData.password",label="Password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="formData.password",label="Password")

    //- 2nd password field
    q-input(v-show="my_type",type="password",filled,v-model="formData.password2",label="Repeat Password" required)
    q-input(v-show="!my_type",type="text",filled,v-model="formData.password2",label="Repeat Password")

    q-toggle(v-model="formData.viewPass",@click="show_pass",label="show password" color="pink",,style="float:left;")

    q-btn(color='blue',type="submit",label="Submit",style="float:right;")


</template>

<style>
  .position{
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin-top: 5%;
  }
  form{
    min-width: 50%;
  }

</style>


<script setup>
import { onMounted, reactive, ref } from 'vue';

const formData = reactive({
            email:"",
            password:"",
            password2:"",
            remember:false,
            viewPass:false,
            IDNumber:"",
            Cell:"",
            gender:"m",
            row:""
         })

const my_type = ref(true)

const onSubmit =()=>{
     console.log(formData)
}

const show_pass = ()=>{
  my_type.value = !my_type.value
}

onMounted(()=>{

})

</script>
