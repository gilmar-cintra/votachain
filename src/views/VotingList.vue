<template>
  <ion-page>
    <Head name="Votações" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Voting List</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding ion-text-center">
        <ion-searchbar
          v-model="searchTerm"
          placeholder="Pesquisar..."
        ></ion-searchbar>
        <div v-for="slide in slides" :key="slide.id">
          <VoteCard :votig="slide" v-if="!slide.voted" />
        </div>
      </div>
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
  IonSearchbar,
} from "@ionic/vue";

import Head from "@/components/Head.vue";
import VoteCard from "@/components/VoteCard.vue";

const searchTerm = "";

import slidesData from "./slidesData"; // Ajuste o caminho se necessário

const slides = slidesData;
</script>
