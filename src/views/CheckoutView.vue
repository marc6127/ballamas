<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import axios from 'axios';

export default {
  name: "CheckoutView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  },
  data() {
    return {
      lesImages: [],
      shippingMethod:[
        { number: '1', name: 'Free shipping', details: '7-30 business days', price: '$0'},
        { number: '2', name: 'Regular shipping', details: '3-14 business days', price: '$7,50'},
        { number: '3', name: 'Express shipping', details: '1-3 business days', price: '$22,50'}
      ],
      shippingAddressFormInput:[
        { label: 'First name', for: 'firstname', id: 'firstname', placeholder: 'Enter your first name'},
        { label: 'Last name', for: 'lastname', id: 'lastname', placeholder: 'Enter your last name'},
        { label: 'Email address', for: 'email', id: 'email', placeholder: 'Enter your email adress'},
        { label: 'Phone number', for: 'phone', id: 'phone', placeholder: 'Enter your phone number'},
        { label: 'Address', for: 'address', id: 'address', placeholder: 'Enter your address'},
        { label: 'City', for: 'city', id: 'city', placeholder: 'City'},
        { label: 'Région', for: 'region', id: 'region', placeholder: 'Select region'},
        { label: 'Postal code', for: 'postalCode', id: 'postalCode', placeholder: 'Enter your postal code'},
      ],
    };
  },
  created() {
    this.getImage();
  },
  methods: {
    async getImage() {
      try {
        const response = await axios.get('https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D');
        this.lesImages = response.data.data.products.edges;
      } catch (error) {
        console.error(error);
      }
    }
  },

};
</script>

<template>
  <NavbarComponent />
  <div class="mx-auto px-5 pt-11 pb-11 lg:px-8">
    <div class="space-y-5">
      <h4 class="text-lg sm:text-2xl font-semibold" style="font-family: 'chillaxSemiBold';">
        Checkout
      </h4>
      <div class="space-y-14 lg:flex lg:space-x-14">
        <div class="Order lg:w-[50%] space-y-4">
          <div class="">
            <h3 class="text-sm font-semibold" style="font-family: 'archivoSemiBold';">
              Your Order
            </h3>
            <p class="text-xs font-medium text-[#7e7e7e]" style="font-family: 'archivoMedium';">
              By placing your order, you agree to Ballamas <a class="text-black underline underline-offset-1">Privacy</a> and <a class="text-black underline underline-offset-1">Policy</a>.
            </p>
          </div>
          <div class="space-y-6">
            <div>
              <table class="table-fixed w-full">
                <tbody>
                  <tr class="items-center py-4" v-for="(item, index) in lesImages.slice(6, 9)" :key="index">
                    <td class="py-4 text-start ">
                      <div class="flex space-x-1 items-center">
                        <img class="w-11 h-11 sm:w-[70px] sm:h-[70px] lg:w-[72px] lg:h-[72px] rounded-md" :src="item.node.featuredImage.url" alt="">
                        <div class="justify-between">
                          <p style="font-family: 'archivoSemiBold';" class="text-xs sm:text-sm font-semibold">{{ item.node.title }}</p>
                          <p style="font-family: 'archivoMedium';" class="text-[10px] sm:text-xs font-medium text-[#7e7e7e]">Large - Green</p>
                        </div>
                      </div>
                    </td>
                    <td style="font-family: 'archivoSemiBold';" class="py-4 font-semibold text-end w-12 text-xs sm:text-sm">
                      $ {{ item.node.variants.edges[0].node.price.amount*2 }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="space-y-2">
              <div class="space-y-1">
                <p class="text-xs font-medium text-black" style="font-family: 'archivoMedium';">
                  Discount Code
                </p>
                <div class="form flex space-x-2">
                  <input style="font-family: 'archivoRegular';" class="text-xs placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" placeholder="Add discount code">
                  <ButtonComponent 
                    :name="'Apply'" 
                    :classes="['bg-black py-2 px-4']"
                    :styleNameButton="{ fontFamily: 'archivoSemibold'}"
                    :classNameButton="['font-semibold text-sm text-white']"
                  />
                </div>
              </div>
              <p class="text-xs text-[#7e7e7e] font-medium" style="font-family: 'archivoMedium';">
                <span class="text-black">New customer? </span><a class="text-black underline underline-offset-1" >Signup</a> to get better offer
              </p>
            </div>
            <div>
              <div style="font-family: 'archivoMedium';" class="text-sm space-y-1 pb-3 border-b-[1px] border-[#7e7e7e] text-[#7e7e7e] font-medium">
                <div class="flex justify-between">
                  <p>Subtotal</p>
                  <p>$524.00</p>
                </div>
                <div class="flex justify-between" >
                  <p>Discount</p>
                  <p>$0</p>
                </div>
              </div>
              <div style="font-family: 'archivoSemiBold';" class="text-sm text-black pt-3 pb-4 space-y-2 font-semibold">
                <div class="flex justify-between pb-2">
                  <p>Order total</p>
                  <p>$524.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-4" >
            <h4 class="text-sm font-semibold" style="font-family: 'archivoSemiBold';">
              Shipping method
            </h4>
            <ul class="space-y-3">
              <li v-for="item in shippingMethod" class="border flex items-center justify-between rounded-xl border-[#7e7e7e] px-2 py-3">
                <div class="flex items-center">
                  <input :checked="item.number == 2" :id="'helper-radio-'+item.number" name="helper-radio" type="radio" value="" class="w-4 h-4 text-black bg-white border-gray-300 rounded-full focus:ring-black focus:ring-2">
                  <div class="ms-2 text-sm">
                      <label :for="'helper-radio-'+item.number" class="font-medium text-black text-xs">{{ item.name }}</label>
                      <p :id="'helper-radio-text-'+item.number" style="font-family: 'archivoRegular';" class="text-xs font-normal text-[10px] text-[#7e7e7e]">{{ item.details }}</p>
                  </div>
                </div>
                <p class="">{{ item.price }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="paiementDetails lg:w-[50%] space-y-4">
          <div class="space-y-1">
            <h4 class="text-sm font-semibold" style="font-family: 'archivoSemiBold';">
              Payment details
            </h4>
            <p class="text-xs text-[#7e7e7e] font-medium" style="font-family: 'archivoMedium';">
              Complete your purchase by providing your payment details.
            </p>
          </div>
          <div class="space-y-5">
            <div>
              <h4 class="text-sm pb-3 font-semibold" style="font-family: 'archivoSemiBold';">
                Shipping address
              </h4>
              <div class="sm:flex sm:space-x-2">
                <div class="sm:w-[50%]">
                  <div v-for="item in shippingAddressFormInput.slice(0, 4)" class="mb-4">
                    <label class="block text-black text-xs font-medium mb-2" :for="item.for">
                      {{item.label}}
                    </label>
                    <input style="font-family: 'archivoRegular';" class="w-full text-xs placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" :id="item.id" :placeholder="item.placeholder">
                  </div>
                </div>
                <div class="sm:w-[50%]">
                  <div v-for="item in shippingAddressFormInput.slice(4, 8)" class="mb-4">
                    <label class="block text-black text-xs font-medium mb-2" :for="item.for">
                      {{item.label}}
                    </label>
                    <input style="font-family: 'archivoRegular';" class="w-full text-xs placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" :id="item.id" :placeholder="item.placeholder">
                  </div>
                </div>
              </div>
              <div class="payementModel space-y-5">
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold" style="font-family: 'archivoSemiBold';">
                    Select payment method
                  </h4>
                  <div class="flex space-x-4 justify-center">
                    <input type="radio" id="creditCard" value="creditCard" name="paymentMethod" class="hidden peer/creditCard" checked>
                    <label for="creditCard" class="w-[50%] space-y-2 items-center justify-between rounded-xl px-[10px] py-5 border-2 border-[#7e7e7e] peer-hover/creditCard:border-black peer-checked/creditCard:border-black">
                      <img src="../assets/icons/creditCart.svg">
                      <p class="text-xs" style="font-family: 'archivoMedium';">Debit / Credit Card</p>
                    </label>

                    <input type="radio" id="virtualAccount" value="virtualAccount" name="paymentMethod" class="hidden peer/virtualAccount">
                    <label for="virtualAccount" class="w-[50%] space-y-2 items-center justify-between rounded-xl px-[10px] py-5 border-2 border-[#7e7e7e] peer-hover/virtualAccount:border-black peer-checked/virtualAccount:border-black">
                      <img src="../assets/icons/bank.svg">
                      <p class="text-xs" style="font-family: 'archivoMedium';">Virtual Account</p>
                    </label>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="space-y-2">
                    <div class="relative">
                      <input style="font-family: 'archivoRegular';" class="w-full placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" placeholder="Card number">
                      <div class="absolute inset-y-0 end-0 flex px-4 items-center justify-end ps-3.5 pointer-events-none">
                        <img src="../assets/icons/lock.svg">
                      </div>
                    </div>
                    <div class="space-y-2 sm:space-y-0 sm:space-x-2 sm:flex">
                      <input style="font-family: 'archivoRegular';" class="w-full placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" placeholder="Expiration date (MM/YY)">
                      <input style="font-family: 'archivoRegular';" class="w-full placeholder:text-black placeholder:text-xs py-2 px-4 rounded-full border-[1px] border-[#7e7e7e] bg-white text-black" type="text" placeholder="Security code">
                    </div>
                  </div>
                  <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2">
                    <label style="font-family: 'archivoRegular';" for="default-checkbox" class="ms-2 text-xs text-black">Use shipping address as billing address</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <router-link to="/paiement">
                <ButtonComponent 
                :iconEnd="'src/assets/icons/arrow-right.svg'"
                :name="'Pay $524.00'" 
                :classes="['bg-black w-full py-2 px-2 sm:px-3 sm:w-[316px] justify-center']"
                :styleNameButton="{ fontFamily: 'archivoSemiBold'}"
                :classNameButton="['text-sm font-semibold mr-1 text-white text-center']"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>

label {
  font-family: "archivoMedium";
}

input {
  font-family: "archivoRegular";
}

</style>
