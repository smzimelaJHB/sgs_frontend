<template>
  <q-layout view="hHr LpR lfr">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer
      class="profile"
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
    >
      <div class="avatar">
        <q-avatar size="8rem">
          <img class="profileImage" src="profile/img/siya.jpg" />
        </q-avatar>
      </div>

      <q-field standout :model-value="email" prefix="Name:" style="margin-top:2rem">
        <template v-slot:prepend>
          <q-icon name="face" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline text-right" tabindex="0">{{name}}</div>
        </template>
      </q-field>

      <q-field standout :model-value="email" prefix="Email:" style="margin-top:1rem">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>

        <template v-slot:control>
          <div class="self-center full-width no-outline text-right" tabindex="0">{{email}}</div>
        </template>
      </q-field>

      <div class="profile-buttons">
          <q-btn style="color: green" label="Update" icon="update"/>
          <q-btn style="color: red" label="Logout" icon="logout" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

  const leftDrawerOpen = ref(false);
  const rightDrawerOpen = ref(true);
  const email = ref('mzimelasiyabonga00@gmail.com');
  const name = ref('Siyabonga Mzimela');


  let toggleLeftDrawer=() =>{
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

  let toggleRightDrawer=()=> {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

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
