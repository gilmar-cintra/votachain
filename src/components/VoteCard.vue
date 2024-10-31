<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col>
          <img :src="slide.image" alt="Sabesp" class="card-image" />
          <div class="overlay">
            <ion-chip class="chipType ion-margin-top" :outline="true">{{
              getSlideType(slide.type)
            }}</ion-chip>
            <br /><br />
            <div class="backgroundTxt">
              <span class="imageTxt">{{ slide.title }}</span>
            </div>
          </div>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-card-content>
            <ion-chip :outline="true">{{ slide.endData }}</ion-chip
            ><br /><br />
            <span class="text">{{ slide.description }}</span>
          </ion-card-content>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-button expand="block" color="tertiary">{{
            getBtnText(slide.voted)
          }}</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonChip,
    IonButton,
  },

  props: {
    votig: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      slide: this.votig,
    };
  },

  methods: {
    getSlideType(type) {
      switch (type) {
        case 1:
          return "Reverendos";
        case 2:
          return "Plebiscito";
        case 3:
          return "Orçamento";
        case 4:
          return "Consultas";
        case 5:
          return "Iniciativas";
        default:
          return "Tipo Desconhecido"; // Caso o tipo não corresponda a nenhum valor
      }
    },
    getBtnText(voted) {
      return voted ? "Destalhes" : "Votar";
    },
  },
});
</script>

<style scoped>
.card-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>