<template>
  <ion-page>
    <Head name="Home" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Home page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonHeader,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import Head from "@/components/Head.vue";
</script>
