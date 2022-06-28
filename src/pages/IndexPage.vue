<template lang="pug">

div(v-if="isData")
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
.absolute-center(v-else)
  q-spinner-hourglass(color="purple", size="4em" text="Loading...")

</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { api } from "boot/axios";

const columns = ref([
  {
    label: "School Names",
    field: "schoolName",
    name: "schoolName",
    align: "left",
    headerStyle: { fontSize: "1.5em" },
    sortable: true,
  },
  {
    label: "Emails",
    field: "email",
    name: "email",
    align: "center",
    headerStyle: { fontSize: "1.5em" },
  },
  {
    label: "",
    field: "id",
    name: "id",
    align: "left",
    headerStyle: { fontSize: "1.5em" },
  },
]);

const rows = ref([]);
let filter = ref();
let isData = ref(false);

const schools = async () => {
  await api
    .get("/api/schools")
    .then((response) => {
      rows.value = response.data.data;
      if (rows.value.length > 0) {
        isData.value = true;
      } else {
        isData.value = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  schools();
});
</script>
