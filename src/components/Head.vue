<template>
  <ion-header class="image-header">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/" />
      </ion-buttons>
      <ion-title>Votação</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/vue";
</script>

<style scoped>
.image-header {
  background-image: url("https://i.postimg.cc/pdbv8fVc/head-Backgroud.png"); /* Caminho da imagem */
  background-size: cover; /* Ajusta a imagem para cobrir todo o espaço */
  background-position: top right; /* Posiciona a imagem no canto superior direito */
  height: 60px; /* Altura do cabeçalho */
  position: relative;
}

ion-toolbar {
  --background: transparent; /* Torna o fundo da toolbar transparente */
  --ion-color-base: #000; /* Define a cor do texto */
}

ion-title {
  font-weight: bold;
  font-size: 24px;
  color: #000; /* Cor do texto */
}

ion-back-button {
  color: #000; /* Cor do ícone de voltar */
}
</style>
