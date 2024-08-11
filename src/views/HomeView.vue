<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    ProductCardComponent,
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  created() {
    this.getImage();
  },
  methods: {
    async getImage() {
      try {
        const response = await axios.get(
          "https://mock.shop/api?query=%7B%20product(id%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F7982905098262%22)%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20%7D%7D"
        );
        if (
          response.data &&
          response.data.data &&
          response.data.data.product &&
          response.data.data.product.featuredImage
        ) {
          this.imageUrl = response.data.data.product.featuredImage.url;
          imageUrl = this.imageUrl;
        } else {
          console.error("Invalid response structure", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        borderRadius: "52px",
      };
    },
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="mx-auto px-5 pt-9 lg:px-8">
    <div class="relative flex justify-center" :style="backgroundStyle">
      <div class="absolute inset-0 bg-black bg-opacity-50 rounded-[52px]"></div>
      <div class="relative z-10 mx-6 my-12 space-y-11 sm:mx-20 sm:my-24">
        <div class="text-white text-center space-y-[18px]">
          <div class="flex space-x-1 justify-center">
            <img src="../assets/images/heroBar.svg" />
            <p class="text-[9px] sm:text-sm hero-top">We bring new fashion to the world</p>
            <img src="../assets/images/heroBar.svg" />
          </div>
          <div class="space-y-4 w-[291px] sm:w-full">
            <p class="title font-bold text-3xl sm:text-[42px] sm:leading-10 lg:text-5xl">
              DISCOVER THE LATEST FASHION TRENDS HERE
            </p>
            <p class="description text-xs sm:text-sm lg:text-base">
              Discover a world of fashion with our meticulously curated outfits.
              Shop now to update your wardrobe with chic and stylish outfits.
            </p>
          </div>
        </div>
        <div class="flex justify-center">
          <ButtonComponent
            :name="'Start shopping'"
            :classes="['bg-white py-2 px-6']"
            :styleNameButton="{ fontFamily: 'archivoSemibold' }"
            :classNameButton="['text-sm text-center']"
          />
          <ButtonComponent
            :iconStart="'arrow.svg'"
            :classes="['bg-white py-2 px-2']"
          />
        </div>
      </div>
    </div>

    <p class="introduction text-xl w-[335px] sm:text-2xl sm:w-full font-semibold text-center pt-8">
      Discover the latest trends in summer fashion. Shop now and refresh your
      wardrobe with our stylish summer shirts.
    </p>
    <div class="categories w-[335px] pt-14 sm:justify-center sm:w-full flex flex-wrap space-x-2">
      <ButtonComponent
        :name="'All'"
        :numbers="'132'"
        :classes="['bg-black items-center text-white space-x-1 py-2.5 px-3.5']"
        :styleNameButton="{ fontFamily: 'archivoMedium' }"
        :classNameButton="['text-sm sm:text-lg lg:text-xl']"
        :styleNumbersButton="{ fontFamily: 'archivoMedium' }"
        :classNumbersButton="['text-xs sm:text-base']"
      />
      <ButtonComponent
        :name="'Accessoires'"
        :numbers="'13'"
        :classes="['bg-white items-center text-black border-solid border-2 border-black space-x-1 py-2.5 px-3.5']"
        :styleNameButton="{ fontFamily: 'archivoMedium' }"
        :classNameButton="['text-sm sm:text-lg lg:text-xl']"
        :styleNumbersButton="{ fontFamily: 'archivoMedium' }"
        :classNumbersButton="['text-xs sm:text-base']"
      />
      <ButtonComponent
        :name="'Featured'"
        :numbers="'67'"
        :classes="['bg-white items-center text-black border-solid border-2 border-black space-x-1 py-2.5 px-3.5']"
        :styleNameButton="{ fontFamily: 'archivoMedium' }"
        :classNameButton="['text-sm sm:text-lg lg:text-xl']"
        :styleNumbersButton="{ fontFamily: 'archivoMedium' }"
        :classNumbersButton="['text-xs sm:text-base']"
      />
      <ButtonComponent
        :name="'Unisex'"
        :numbers="'52'"
        :classes="['bg-white mt-2 sm:mt-0 items-center text-black border-solid border-2 border-black space-x-1 py-2.5 px-3.5']"
        :styleNameButton="{ fontFamily: 'archivoMedium' }"
        :classNameButton="['text-sm sm:text-lg lg:text-xl']"
        :styleNumbersButton="{ fontFamily: 'archivoMedium' }"
        :classNumbersButton="['text-xs sm:text-base']"
      />
    </div>

    <div class="space-y-8">
      <div class="pt-9 flex-wrap space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
        <ProductCardComponent :numbersProduct="6" />
      </div>
      <div class="flex justify-center">
        <ButtonComponent 
          :name="'View More'" 
          :classes="['py-3 w-32 justify-center border-black border-2']"
          :styleNameButton="{ fontFamily: 'archivoSemibold'}"
          :classNameButton="['text-sm text-center text-black']"
        />
      </div>
    </div>

    <div class="pt-10 pb-24 sm:justify-center sm:w-full space-y-9">
      <div class="w-[335px] sm:justify-center sm:w-full">
        <h6 class="collection text-center font-semibold text-2xl">
          OUR COLLECTION
        </h6>
        <p class="collectionDescription text-[#7e7e7e] text-sm text-center">
          Our latest collection, where classic and contemporary styles converge in perfect harmony.
        </p>
      </div>
      <div class="space-y-4 sm:space-y-0 gap-4 sm:flex sm:flex-row-reverse">
        <div class="classicMen w-full relative flex items-center justify-center">
            <div class="absolute inset-0 bg-black bg-opacity-20 rounded-[32px]"></div>
            <div class="text-white relative z-10 space-y-1">
              <p class="titleCollection text-center text-3xl lg:text-5xl">
                CLASSIC MEN
              </p>
              <p class="descriptionCollection text-center text-sm lg:text-base">
                We’re changing the way things get made
              </p>
            </div>
        </div>

        <div class="cta relative w-full lg:w-[675px] flex items-end justify-center">
          <ButtonComponent 
            :iconEnd="'arrow.svg'"
            :name="'Learn more'" 
            :classes="['bg-white py-3 px-5 w-[156px] mb-3.5 justify-center']"
            :styleNameButton="{ fontFamily: 'archivoSemiBold'}"
            :classNameButton="['text-sm text-center']"
          />
        </div>
      </div>
    </div>
    
  </div>
  <FooterComponent />
</template>

<style scoped>
.hero-top .description .descriptionCollection{
  font-family: "archivoRegular";
}

.introduction {
  font-family: "chillaxSemiBold";
}

.title {
  font-family: "chillaxBold";
}

.collection {
  font-family: "chillaxSemiBold";
}

.collectionDescription {
  font-family: "archivoMedium";
}

.classicMen {
  background-image: url("../assets/images/classicMenBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 446px;
  border-radius: 32px;
}

.cta {
  background-image: url("../assets/images/cta.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 446px;
  border-radius: 32px;
}

.titleCollection {
  font-family: "chillaxBold";
  -webkit-text-stroke: 1.5px white; 
  color: transparent;
}
</style>
