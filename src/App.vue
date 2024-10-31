<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import "typeface-raleway";
</script>

<style >
.title {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 24px;
}
.text {
  font-family: "Lato", sans-serif;
}
</style>