<script>
import ButtonComponent from '../components/ButtonComponent.vue'
export default {
    name: 'FooterComponent',
    components: {
        ButtonComponent,
    }
};
</script>

<template>
    <div class="bg-black px-5 py-6 lg:px-8">
        <div>
            <div class="top-footer spaceyx-5">
                <div class="space-y-5 flex flex-col items-start justify-start">
                    <img src="../assets/pictures/logoFooter.png" alt="Logo">
                    <div class="space-y-4">
                        <p class="text-white ctaText">
                            Subscribe to our newsletter for upcoming products and best discount for all items
                        </p>
                        <div class="btn">
                            <ButtonComponent 
                            :name="'Connect Wallet'" 
                            :classes="['bg-white', 'py-2', 'px-4']"
                            :iconEnd="'../src/assets/icons/arrow.svg'" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">

            </div>
        </div>
    </div>
</template>

<style>
    .ctaText {
        font-family: 'archivoRegular';
        font-size: 12px;
    }
</style>