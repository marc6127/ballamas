<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";

export default {
  name: "ShopView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ProductCardComponent,
  },
  data() {
    return {
      productColorGreen: '../src/assets/pictures/product.jpg',
      productColorPurple: '../src/assets/pictures/product.jpg',
      productColorOcean: '../src/assets/pictures/productOcean.jpg',
      productColorOlive: '../src/assets/pictures/productOlive.jpg',

      Colors:[
        { name: 'Green', assets: '../src/assets/colors/green.svg'},
        { name: 'Purple', assets: '../src/assets/colors/purple.svg'},
        { name: 'Ocean', assets: '../src/assets/colors/ocean.svg'},
        { name: 'Olive', assets: '../src/assets/colors/olive.svg'}
      ],

      Sizes:[
        { name: 'XS'},
        { name: 'S'},
        { name: 'M'},
        { name: 'L'},
        { name: 'XL'}
      ],

      colorSelected: { name: 'Green' },
      sizeSelected: { name: 'XS' }
    };
  },

  methods: {
    selectColor(color) {
      this.colorSelected = color;
    },
    selectSize(size) {
      this.sizeSelected = size;
    }
  }

};
</script>

<template>
  <NavbarComponent />
  <div class="mx-auto px-5 pt-14 lg:px-8">
    <div class="productDetails space-y-8 lg:space-y-7 lg:items-center lg:justify-between lg:flex lg:space-x-11">
      <img v-if="colorSelected.name == 'Green'" class="rounded-[32px] w-full h-[378px] sm:h-[672px] lg:h-[600px]" :src="this.productColorGreen" />
      <img v-if="colorSelected.name == 'Ocean'" class="rounded-[32px] w-full h-[378px] sm:h-[672px] lg:h-[600px]" :src="this.productColorOcean" />
      <img v-if="colorSelected.name == 'Olive'" class="rounded-[32px] w-full h-[378px] sm:h-[672px] lg:h-[600px]" :src="this.productColorOlive" />
      <img v-if="colorSelected.name == 'Purple'" class="opacity-90 rounded-[32px] w-full h-[378px] sm:h-[672px] lg:h-[600px]" :src="this.productColorPurple" />
      <div class="space-y-7">
        <div class="space-y-5">
          <div class="space-y-2.5">
            <h4 class="text-3xl sm:text-5xl" style="font-family: 'chillaxSemiBold';">
              Badacore Tshirt
            </h4>
            <p style="font-family: 'archivoSemiBold';" class="text-2xl sm:text-3xl lg:text-4xl">CAD $80</p>
            <div class="color space-y-2">
              <div style="font-family: 'archivoMedium';" class="flex text-xl sm:text-3xl">
                <p>Color:<span>{{ colorSelected.name }}</span></p>
              </div>
              <ul class="flex space-x-3">
                <img v-for="item in Colors" :src="item.assets" :class="{'scale-75': colorSelected.name === item.name, 'scale-100': colorSelected.name !== item.name}" class="h-5 w-5 sm:w-7 sm:h-7 transition-transform duration-200 ease-in-out cursor-pointer" @click="selectColor(item)" >
              </ul>
            </div>
            <div class="size">
              <div style="font-family: 'archivoMedium';" class="flex text-xl sm:text-3xl">
                <p>Size:</p>
              </div>
              <ul class="flex space-x-3">
                <ButtonComponent v-for="item in Sizes"
                  :name="item.name" 
                  :classes="['py-1.5 px-3.5 border-2 border-black', sizeSelected.name === item.name ? 'bg-black border-black' : 'bg-white border-black']"
                  @click="selectSize(item)"
                  :styleNameButton="{ fontFamily: 'archivoMedium'}"
                  :classNameButton="['text-xl sm:text-2xl text-center', sizeSelected.name === item.name ? 'text-white' : 'text-black']"
                />
              </ul>
            </div>
          </div>
          <div class="flex space-x-2">
            <ButtonComponent 
              :name="'BUY NOW'" 
              :classes="['bg-black py-3 w-full justify-center']"
              :styleNameButton="{ fontFamily: 'archivoSemiBold'}"
              :classNameButton="['text-sm text-white text-center']"
            />
            <ButtonComponent 
              :name="'ADD TO CART'" 
              :classes="['py-3 w-full justify-center border-black border-2']"
              :styleNameButton="{ fontFamily: 'archivoSemiBold'}"
              :classNameButton="['text-sm text-center text-black']"
            />
          </div>
        </div>
        <div class="description space-y-3">
          <h4 class="text-2xl sm:text-3xl lg:text-4xl" style="font-family: 'chillaxMedium';">
            Description
          </h4>
          <p class="text-sm sm:text-[18px] text-[#7e7e7e]" style="font-family: 'archivoRegular';">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
          </p>
        </div>
      </div>
    </div>
    <div class="pt-14 pb-24 sm:justify-center sm:w-full">
      <p class="text-2xl sm:text-3xl lg:text-4xl font-semibold" style="font-family: 'chillaxBold';">
        You may also like
      </p>
      <div class="flex-wrap space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-4">
        <ProductCardComponent :numbersProduct="4" />
      </div>
    </div>
    
  </div>
  <FooterComponent />
</template>

<style scoped>
</style>
