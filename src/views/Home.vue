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
      </div>
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

import Head from "@/components/Head.vue";
import Slide from "@/components/Slide.vue";

const slides = [
  {
    image: "https://i.postimg.cc/7655MVLs/Alagamento.jpg",
    type: "Referendos",
    text: "Como podemos melhorar o combate a enchentes?",
    title: "Slide 1",
    alt: "Imagem destaque alagamento",
  },
  {
    image: "https://i.postimg.cc/yN5tQmKp/escola.jpg",
    type: "Orçamentos",
    text: "Incluir aulas de programação nas escolas melhora a educação?",
    title: "Slide 2",
    alt: "Imagem escola",
  },
  {
    image: "https://i.postimg.cc/VvbYZf2n/sabesp.jpg",
    type: "Plebiscitos",
    text: "Você concorda com a privatização da Sabesp?",
    title: "Slide 3",
    alt: "Imagem Sabesp",
  },
];
</script>
