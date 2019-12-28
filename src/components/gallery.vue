<template>
   <div class="gallery">

      <div class="mainImage" v-bind:style="{ 'background-image': 'url(' + this.mainImage + ')' }">
         <template v-if="this.images.length > 1">
            <button v-if="moveLeft" v-on:click="checkLeft" class="scroll left">◀</button>
            <button v-if="moveRight" v-on:click="checkRight" class="scroll right">▶</button>
         </template>
      </div>

      <div class="allImages">
         <div v-for="image in images" :key="image">
            <div
               class="picture"
               v-on:click="changeImage(image)"
               v-bind:style="{ 'background-image': 'url(' + image + ')' }"
            ></div>
         </div>
      </div>
      
   </div>
</template>

<script>
export default {
   data() {
      return {
         curIndex: 0,
         mainImage: this.images[0],
         moveLeft: false,
         moveRight: true
      };
   },

   props: {
      images: Array
   },

   methods: {
      changeImage(image) {
         this.mainImage = image;
         this.curIndex = this.images.indexOf(image);

         this.curIndex < 1 ? (this.moveLeft = false) : (this.moveLeft = true);

         this.curIndex == this.images.length - 1
            ? (this.moveRight = false)
            : (this.moveRight = true);
      },

      checkLeft() {
         this.curIndex -= 1;
         this.mainImage = this.images[this.curIndex];
         this.moveRight = true;

         if (this.curIndex < 1) {
            this.moveLeft = false;
         }
      },

      checkRight() {
         this.curIndex += 1;
         this.mainImage = this.images[this.curIndex];
         this.moveLeft = true;

         if (this.curIndex == this.images.length - 1) {
            this.moveRight = false;
         }
      }
   }
};
</script>

<style lang="less" scoped>
.gallery {
   display: grid;
   grid-gap: 25px;
}

.mainImage {
   grid-row: 1;
   display: flex;
   height: 500px;
   align-items: center;
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
   background-color: rgb(223, 230, 233, 0.7);
   &:hover .scroll {
      visibility: visible;
   }
}

.allImages {
   grid-row: 2;
   display: grid;
   grid-template-columns: repeat(auto-fit, 150px);
   grid-template-rows: repeat(150px);
   grid-gap: 20px;
}

.picture {
   width: 150px;
   height: 150px;
   background-size: cover;
}

.scroll {
   user-select: none;
   outline: none;
   position: relative;
   visibility: hidden;
   margin: 5px;
   border: none;
   font-size: 60px;
   height: 100%;
   color: rgba(0, 0, 0, 0.4);
   background-color: rgba(0, 0, 0, 0);
   text-decoration: none;
}

.right {
   margin-left: auto;
}

@media (max-width: 1440px) {
   .mainImage {
      height: 38vw;
   }

   .scroll {
      visibility: visible;
   }

   .picture {
      width: 170px;
      height: 170px;
   }

   .allImages {
      grid-template-columns: repeat(auto-fit, 170px);
      grid-template-rows: repeat(170px);
      grid-gap: 10px;
   }
}

@media (max-width: 860px) {
   .mainImage {
      height: 60vw;
   }

   .picture {
      width: 120px;
      height: 120px;
   }

   .allImages {
      grid-template-columns: repeat(auto-fit, 120px);
      grid-template-rows: repeat(120px);
   }

   .scroll {
      font-size: 45px;
      color: rgba(0, 0, 0, 0.6);
   }
}

@media (max-width: 700px) {
   .allImages {
      display: none;
   }

   .scroll {
      font-size: 30px;
   }
}
</style>