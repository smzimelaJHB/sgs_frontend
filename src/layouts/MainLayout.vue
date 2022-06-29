<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-toolbar-title style="text-align: center">
          J&J School Grading System</q-toolbar-title
        >
      </q-toolbar>
      <q-toolbar>
        <q-list style="display: inline-flex; color: orange">
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" color="orange" />
            </q-item-section>

            <q-item-section style="color: white"> Home </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/login">
            <q-item-section avatar>
              <q-icon name="login" color="orange" />
            </q-item-section>

            <q-item-section style="color: white"> Login </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/register">
            <q-item-section style="color: white"> Signup </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="teal lighten-1 white--text text-center">
      <q-toolbar>
        <q-toolbar-title> 2022 - ST Mzimela</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script></script>
