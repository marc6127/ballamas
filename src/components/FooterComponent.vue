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
    <div class="bg-black mx-auto py-6 px-5 lg:px-8">
      <div class="space-y-8">
        <div class="top-footer space-y-5">
            <div class="space-y-5 flex flex-col items-start justify-start lg:space-y-0 lg:flex-row lg:justify-between">
                <div class="space-y-5">
                    <img src="../assets/pictures/logoFooter.png" alt="Logo">
                    <div class="space-y-5">
                        <p class="text-white ctaText">
                        Subscribe to our newsletter for upcoming products and best discount for all items
                        </p>
                        <div class="form flex space-x-2">
                        <input class="placeholder:text-white py-3 px-6 rounded-full bg-black border text-white" id="username" type="text" placeholder="Your email">
                        <ButtonComponent 
                            :name="'Subscribe'" 
                            :classes="['bg-white', 'py-2', 'px-6']"
                        />
                        </div>
                    </div>
                </div>
                <div class="flex space-x-5 text-white">
                    <div class="space-y-2">
                    <h5>Product</h5>
                    <ul class="list-none space-y-1">
                        <li v-for="item in footerProduct" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                    <div class="space-y-2">
                    <h5>Categories</h5>
                    <ul class="list-none space-y-1">
                        <li v-for="item in footerCategories" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                    <div class="space-y-2">
                    <h5>Social Links</h5>
                    <ul class="list-none space-y-1">
                        <li v-for="item in footerSocialLinks" :key="item.name">
                        {{ item.name }}
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
          <p class="copywrite text-center text-gray-400">
            © BALLAMAS 2024 by waris
          </p>
        </div>
      </div>
    </div>
  </template>

<style>
    .ctaText {
        font-family: 'archivoRegular';
        font-size: 12px;
    }

    input{
        font-family: "archivoRegular";
        font-size: 12px;
    }

    h5 {
        font-family: "archivoMedium";
        font-size: 12px;
    }

    .copywrite, li{
        font-family: "archivoRegular";
        font-size: 10px;
    }
</style>