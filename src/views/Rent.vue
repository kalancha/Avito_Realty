<template>
   <div>
      <div class="detinf" v-if="getInfo">
         <p>{{getInfo.title}}</p>
         <gallery class="gallery" :images="getInfo.images"></gallery>
         <p>{{getInfo.sellerName}}</p>
         <p>Адрес: {{getInfo.address}}</p>
         <p>{{getInfo.description}}</p>
         <p>Цена: {{getInfo.price}}</p>
      </div>
   </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import gallery from "@/components/gallery.vue";

export default {
   name: "Rent",
   components: {
      gallery
   },

   data() {
      return {
         id: this.$route.params.cardId
      };
   },

   computed: mapGetters(["getInfo"]),
   methods: mapActions(["getInformation"]),

   async mounted() {
      this.getInformation(this.id);
   }
};
</script>

<style lang="less" scoped>
.detinf {
   padding-top: 20px;
   display: grid;
   grid-gap: 10px;
   grid-template-columns: 2fr 6fr 2fr;
}

.gallery {
   grid-column: 2;
}

p {
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   font-size: 18px;
   grid-column: 2;
}

p:first-child {
   font-size: 26px;
   font-weight: 550;
}

@media (max-width: 1440px) {
   .detinf {
      grid-template-columns: 1fr 8fr 1fr;
   }
}

@media (min-width: 860px) and (max-width: 1440px) {
   p {
      font-size: 2.3vh;
   }

   p:first-child {
      font-size: 2.7vh;
   }
}

@media (max-width: 860px) {
   p {
      font-size: 2.5vh;
   }

   p:first-child {
      font-size: 3vh;
   }
}
</style>