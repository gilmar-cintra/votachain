<template>
  <swiper
    :navigation="true"
    :pagination="true"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-container">
        <img :src="slide.image" :alt="slide.alt" style="height: 200px" />
        <!-- Camada de sobreposição com cor linear -->
        <div class="overlay">
          <ion-chip class="chipType ion-margin-top" :outline="true">{{
            getSlideType(slide.type)
          }}</ion-chip>
          <br /><br />
          <div class="backgroundTxt">
            <span class="imageTxt">{{ slide.title }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IonChip } from "@ionic/vue";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default {
  name: "MySwiper",
  components: {
    Swiper,
    SwiperSlide,
    IonChip,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000, // 3 segundos de atraso entre os slides
          disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
        },
      },
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
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos para os botões e a paginação */
.swiper-button-next,
.swiper-button-prev,
.swiper-pagination {
  color: #fff;
}

/* Estilos para a imagem do slide */
.slide-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem preencha o contêiner */
  border-radius: 20px; /* Bordas arredondadas da imagem */
}

/* Container para a imagem e a sobreposição */
.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Estilos para a imagem do slide */
.slide-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
