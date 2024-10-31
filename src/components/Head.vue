<template>
  <ion-header class="image-header">
    <ion-toolbar>
      <ion-buttons v-if="backBtn" slot="start">
        <ion-back-button default-href="/" />
      </ion-buttons>
      <ion-title class="title">{{ name }}</ion-title>
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

defineProps({
  name: {
    type: String,
    required: true,
  },
  backBtn: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.image-header {
  background-image: url("@/assets/header-background.png"); /* Caminho da imagem */
  background-size: cover; /* Ajusta a imagem para cobrir todo o espaço */
  background-position: top right; /* Posiciona a imagem no canto superior direito */
  height: 60px; /* Altura do cabeçalho */
  position: relative;
}

ion-toolbar {
  --background: transparent; /* Torna o fundo da toolbar transparente */
  --ion-color-base: #3e3e3e; /* Define a cor do texto */
}

ion-title {
  font-weight: bold;
  font-size: 24px;
  color: #3e3e3e; /* Cor do texto */
}

ion-back-button {
  color: #3e3e3e; /* Cor do ícone de voltar */
}
</style>
