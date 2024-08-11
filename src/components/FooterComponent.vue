<script setup>
import ButtonComponent from '../components/ButtonComponent.vue'
import { ref } from 'vue';

    const footerProduct = ref([
    { name: 'Jacket' },
    { name: 'T-shirt' },
    { name: 'Jacket' },
    { name: 'Shoes' },
    { name: 'Sunglasses' }
    ]);

    const footerCategories = ref([
    { name: 'Man' },
    { name: 'Woman' },
    { name: 'Kids' },
    { name: 'Gift' },
    { name: 'New arrival' }
    ]);

    const footerSocialLinks = ref([
    { name: 'Instagram' },
    { name: 'Facebook' },
    { name: 'Youtube' },
    { name: 'X' },
    ]);
</script>

<template>
    <div class="bg-black sm:w-full mx-auto py-6 px-5 lg:px-8">
      <div class="space-y-8">
        <div class="top-footer space-y-5">
            <div class="space-y-5 flex flex-col items-start justify-start lg:space-y-0 lg:flex-row lg:justify-between">
                <div class="space-y-5">
                    <img src="../assets/pictures/logoFooter.png" alt="Logo">
                    <div class="space-y-5">
                        <p class="text-white w-[335px] text-xs ctaText sm:w-[452px] sm:text-sm">
                        Subscribe to our newsletter for upcoming products and best discount for all items
                        </p>
                        <div class="form flex space-x-2">
                            <input class="placeholder:text-white w-[199px] sm:w-[316px] placeholder:text-xs py-3 px-6 rounded-full bg-black border text-white" id="username" type="text" placeholder="Your email">
                            <ButtonComponent 
                                :name="'Subscribe'" 
                                :classes="['bg-white py-2 px-6']"
                                :styleNameButton="{ fontFamily: 'archivoSemibold'}"
                                :classNameButton="['font-semibold text-sm']"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex space-x-5 text-white">
                    <div class="space-y-2">
                    <h5 class="text-base">Product</h5>
                    <ul class="list-none text-xs sm:text-sm space-y-1">
                        <li v-for="item in footerProduct" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                    <div class="space-y-2">
                    <h5 class="text-base">Categories</h5>
                    <ul class="list-none text-xs sm:text-sm space-y-1">
                        <li v-for="item in footerCategories" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                    <div class="space-y-2">
                    <h5 class="text-base">Social Links</h5>
                    <ul class="list-none text-xs sm:text-sm space-y-1">
                        <li v-for="item in footerSocialLinks" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
          <p class="copywrite text-center text-xs text-gray-400">
            © BALLAMAS 2024 by waris
          </p>
        </div>
      </div>
    </div>
  </template>

<style>
    .ctaText, input, .copywrite, li {
        font-family: 'archivoRegular';
    }

    h5 {
        font-family: "archivoMedium";
    }
</style>