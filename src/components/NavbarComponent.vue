<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars2Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import TopbarComponent from './TopbarComponent.vue';
import { ref } from 'vue';

const navigation = ref([
  { name: 'Men', href: '#', current: false, icon: false },
  { name: 'Women', href: '#', current: false, icon: false },
  { name: 'Kids', href: '#', current: false, icon: false },
  { name: 'Collection', href: '#', current: false, icon: false },
  { name: 'Shop', href: '#', current: false, icon: false },
  { name: 'About Us', href: '#', current: false, icon: false },
  { name: 'Account', href: '#', current: false, icon: true },
  { name: 'Cart(0)', href: '/cart', current: false, icon: false },
]);

const categories = navigation.value.slice(0, 4);

const pagesLinks = navigation.value.slice(4, 8);

const otherPages = ref([
  { name: 'FAQ', href: '#', current: false, icon: false },
  { name: 'Contact Us', href: '#', current: false, icon: false }
]);

</script>

<template>
  <div class="sticky top-0">
    <TopbarComponent/>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="mx-auto px-5 lg:px-8">
      <div class="relative flex h-16 items-center justify-between border-b border-gray-200">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <Bars2Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center lg:items-center lg:justify-center">
          <div class="hidden lg:block">
            <div class="flex space-x-4">
              <router-link
                v-for="item in categories"
                :key="item.name"
                :to="item.href"
                :class="['text-black flex links', { 'current-page': item.current }]"
                :aria-current="item.current ? 'page' : undefined"
              >
              <span v-if="item.icon">
                <img class="mr-1" src="../assets/icons/user.svg" alt="">
              </span>
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="../assets/pictures/logo.png" alt="logo" />
        </div>

        <div class="lg:space-x-4 lg:flex">
          <div class="hidden lg:block">
          <div class="flex space-x-4 lg:justify-end lg:items-center">
            <router-link
              v-for="item in pagesLinks"
              :key="item.name"
              :to="item.href"
              :class="['text-black flex links', { 'current-page': item.current }]"
              :aria-current="item.current ? 'page' : undefined"
            >
            <span v-if="item.icon">
              <img class="mr-1" src="../assets/icons/user.svg" alt="">
            </span>
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 lg:static lg:inset-auto lg:pr-0">
          <button type="button" class="relative rounded-full">
            <span class="absolute -inset-1.5" />
            <img src="../assets/icons/searchIcons.svg" aria-hidden="true">
          </button>
          <button type="button" class="relative rounded-full lg:hidden">
            <span class="absolute -inset-1.5" />
            <img src="../assets/icons/cartIcons.svg" aria-hidden="true">
          </button>
        </div>
        </div>
        
      </div>
    </div>
    <DisclosurePanel class="lg:hidden">
      <div class="absolute fade-in-panel flex flex-col items-center bg-white w-full space-y-4 px-2 pb-4 pt-4">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :class="['text-black flex links', { 'current-page': item.current }]"
          :aria-current="item.current ? 'page' : undefined"
        >
        <span v-if="item.icon">
          <img class="mr-1" src="../assets/icons/user.svg" alt="">
        </span>
          {{ item.name }}
        </router-link>
        <ul class="pt-5 flex flex-col items-center space-y-4">
          <li
          v-for="item in otherPages"
          :key="item.name"
          :to="item.href"
          :class="['text-black flex links', { 'current-page': item.current }]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</li>
        </ul>
      </div>
    </DisclosurePanel>
  </Disclosure>
  </div>
  
</template>

<style>
  .links {
    font-family: 'archivoRegular';
    font-size: 16px;
  }

  .fade-in-panel { 
    animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
