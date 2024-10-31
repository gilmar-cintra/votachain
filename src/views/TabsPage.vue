<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="pieChart" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="VotingList" href="/tabs/voting-list">
          <ion-icon aria-hidden="true" :icon="newspaper" />
          <ion-label>Votações</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Results" href="/tabs/results">
          <ion-icon aria-hidden="true" :icon="trendingUp" />
          <ion-label>Resultados</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="UserProfile" href="/tabs/user-profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Configurações</ion-label>
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