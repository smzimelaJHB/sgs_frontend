<template lang="pug">

q-table(:rows="rows",:columns="columns",row-key="name",title-class="text-bold text-blue-9",table-class="text-black",table-header-style="height: 65px;",:filter="filter")
    template(v-slot:top-right)
      q-input(borderless,dense,debounce="300",v-model="filter", placeholder="Search")
        template(v-slot:append)
          q-icon(name="search")


    template(v-slot:body="props")
        q-tr(:props="props")
            q-td(key="schoolName", :props="props")
                | {{ props.row.schoolName }}
            q-td(key="email", :props="props")
                | {{ props.row.email }}
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { api } from 'boot/axios'

const columns = ref([
  { label: 'School Names', field: 'schoolName', name: 'schoolName', align: 'left' ,headerStyle: {fontSize: '1.5em'} ,sortable:true },
  { label: 'Emails', field: 'email', name: 'email', align: 'center',headerStyle: {fontSize: '1.5em'}},
  { label: '', field: 'id', name: 'id', align: 'left',headerStyle: {fontSize: '1.5em'}}
])

const rows = ref([])
let filter = ref();



const schools = () => {
    api.get('/sanctum/csrf-cookie').then(response => {
            api.get('/api/schools').then(response=>{
                    rows.value = response.data.data
                }).catch(error => {
                      console.log(error)
                })
          })
}

onMounted(()=>{
    schools()
})


</script>
