<template>
   <div>
      <div class="detinf" v-for="infoItem in getInfo" :key="infoItem.id">
         <p>{{infoItem.title}}</p>
         <gallery class="gallery" :images="infoItem.images"></gallery>
         <p>{{infoItem.sellerName}}</p>
         <p>Адрес: {{infoItem.address}}</p>
         <p>{{infoItem.description}}</p>
         <p>Цена: {{infoItem.price}}</p>
      </div>
   </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import gallery from "@/components/gallery.vue";
export default {
   name: "detInf",
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
      font-size: 24px;
   }
   p:first-child {
      font-size: 32px;
   }
}
</style>