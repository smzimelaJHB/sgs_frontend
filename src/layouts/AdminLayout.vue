<template lang="pug">
q-layout(view="hHr LpR lfr")
  q-header.bg-primary.text-white(reveal, elevated)
    q-toolbar(style="justify-content: space-between")
      q-btn(dense, flat, round, icon="menu", @click="toggleLeftDrawer")
      q-btn(dense, flat,round, icon="menu", @click="toggleRightDrawer",style="float:right")



  q-drawer(v-model="leftDrawerOpen", side="left", overlay, behavior="desktop", elevated)
    q-toolbar
      q-list(style="color: orange")

        q-item(clickable, v-ripple, to="/")
          q-item-section(avatar)
            q-icon(name="home", color="orange")
          q-item-section(style="color: black") Home

        q-item(clickable, v-ripple, to="/")
          //- api/schools/edit
          q-item-section(avatar)
            q-icon(name="school", color="orange")
          q-item-section(style="color: black") Schools

        q-item(clickable, v-ripple, to="/")
          //- api/schools/remove
          q-item-section(avatar)
            q-icon(name="people", color="orange")
          q-item-section(style="color: black") Classes


  q-drawer.profile(v-model="rightDrawerOpen", side="right", overlay, behavior="mobile", elevated)
    .avatar
      q-avatar(size="8rem")
        img.profileImage(src="profile/img/siya.jpg")

    q-field(standout, prefix="Name:", style="margin-top:2rem")
      template(v-slot:prepend)
        q-icon(name="face")
      template(v-slot:control)
        .self-center.full-width.no-outline.text-right(tabindex="0").
          {{userInfo.name}}



    q-field(standout, :model-value="userInfo.email", prefix="Email:", style="margin-top:1rem")
        template(v-slot:prepend)
          q-icon(name="mail")

        template(v-slot:control)
          .self-center.full-width.no-outline.text-right(tabindex="0").
            {{userInfo.email}}


    .profile-buttons
      q-btn(style="color: green", label="Update", icon="update")
      q-btn(style="color: red",@click="logout" label="Logout", icon="logout")


  q-page-container
    router-view

</template>

<script setup>
import { ref,onMounted} from "vue";
import { api } from "boot/axios";
import { useRouter } from "vue-router";
const router = useRouter();

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(true);


let userInfo = ref([]);


let toggleLeftDrawer=() =>{
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

let toggleRightDrawer=()=> {
    rightDrawerOpen.value = !rightDrawerOpen.value;
  }

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

onMounted( async() => {
  await api.get("/api/user").then((response) => {
    userInfo.value = response.data;
  });
});

</script>

<style>
.profile {
  margin-top: 1rem;
}
.avatar {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.profile-buttons {
  display: flex;
  justify-content: space-around;
  margin-top:2rem;
}

img {
  display: flex;
}
</style>
