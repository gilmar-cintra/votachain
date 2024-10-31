<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="pieChart" />
          <ion-label class="text txtMenu">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="VotingList" href="/tabs/voting-list">
          <ion-icon aria-hidden="true" :icon="newspaper" />
          <ion-label class="text txtMenu">Votações</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Results" href="/tabs/results">
          <ion-icon aria-hidden="true" :icon="trendingUp" />
          <ion-label class="text txtMenu">Resultados</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="UserProfile" href="/tabs/user-profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label class="text txtMenu">Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { pieChart, newspaper, trendingUp, person } from "ionicons/icons";
</script>

<style scoped>
.txtMenu {
  font-size: 11px;
  text-transform: uppercase;
  margin-top: 3px;
}

ion-tab-button {
  --color: grey;
  --color-selected: #f21cc8;

  --background: white;
  --background-focused: white;
  --ripple-color: white;
}
</style>