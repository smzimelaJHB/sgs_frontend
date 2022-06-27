<template>
  <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title style="text-align:center">J&J School Grading System</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>
     <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px);  border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/login">
              <q-item-section avatar>
                <q-icon name="loging" />
              </q-item-section>

              <q-item-section>
                Login
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/signup">
              <q-item-section avatar>
                <q-icon name="register" />
              </q-item-section>

              <q-item-section >
                Signup
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>
