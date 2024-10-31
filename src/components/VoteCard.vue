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

/* Estilos para a camada de sobreposição */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(229, 69, 198, 0.6),
    rgba(12, 242, 180, 0.6)
  );
  border-radius: 20px;
  z-index: 1;
}

.chipType {
  background-color: #0cf2b4;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
}

.imageTxt {
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  color: #fff;
  padding: 10px;
}

.backgroundTxt {
  background-color: rgba(150, 107, 232, 0.7);
  width: 70%; /* Largura da div */
  margin: 0 auto; /* Centraliza horizontalmente */
  text-align: center; /* Centraliza o texto dentro da div */
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>