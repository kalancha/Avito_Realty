<template>
   <div class="card">
      <img class="image" :src="previewImage" />
      <router-link :to="{ name: 'detInf', params: { cardId: this.id }}" target="_blank">{{title}}</router-link>
      <p>{{price}}</p>
      <p>{{address}}</p>
   </div>
</template>
<script>
export default {
   name: "card",
   props: {
      address: String,
      title: String,
      previewImage: String,
      price: String,
      id: Number
   },
   methods: {
      href() {
         this.$router.push(
            { name: "detInf", params: { cardId: this.id } },
            "_blank"
         );
      }
   }
};
</script>

<style lang="less" scoped>
.card {
   width: 350px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   text-align: center;
   padding-bottom: 5px;
}
.image {
   width: 100%;
   height: auto;
}

@media (max-width: 400px) {
   .card {
       width: 280px;
   }
}
</style>