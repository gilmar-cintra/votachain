<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Terms</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Terms Of Service</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Terms Of Service page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>
