<template>
   <div class="layout">
      <card
         v-for="card in allCards"
         :key="card.id"
         :title="card.title"
         :address="card.address"
         :previewImage="card.previewImage"
         :price="card.price"
         :id="card.id"
      ></card>
   </div>
</template>
<script>
import card from "@/components/card.vue";
import { mapGetters, mapActions } from "vuex";
export default {
   name: "Main",
   components: {
      card
   },
   computed: mapGetters(["allCards"]),
   methods: mapActions(["fetchCards"]),
   async mounted() {
      this.fetchCards();
   }
};
</script>
<style lang="less" scoped>
.layout {
   padding: 20px 0px;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 350px));
   grid-gap: 30px;
   justify-content: center;
}
@media (max-width: 400px) {
   .layout {
      grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
   }
}
</style>