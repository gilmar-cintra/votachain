<template>
  <ion-page>
    <Head name="Home" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding ion-text-center">
        <span class="title">Destaques</span>
        <br /><br />
        <Slide :slides="slides" />
      </div>
      <div class="ion-padding ion-text-center">
        <span class="title">minhas votações</span>
        <br /><br />
        <ion-searchbar
          v-model="searchTerm"
          placeholder="Pesquisar..."
        ></ion-searchbar>
        <br />
        <div v-for="slide in slides" :key="slide.id">
          <VoteCard :votig="slide" v-if="slide.voted" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import Head from "@/components/Head.vue";
import Slide from "@/components/Slide.vue";
import VoteCard from "@/components/VoteCard.vue";

import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonHeader,
  IonSearchbar,
} from "@ionic/vue";

import slidesData from "./slidesData"; // Ajuste o caminho se necessário

const slides = slidesData;
const searchTerm = "";
</script>
