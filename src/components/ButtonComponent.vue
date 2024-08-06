<script>
    export default {
        name: "ButtonComponent",
        props: {
            name: {
            type: String,
            required: true
            },
            classes: {
            type: Array,
            required: true
            },
            iconStart: {
            type: String,
            },
            iconEnd: {
            type: String,
            }
        }
    };
</script>


<template>
    <button :class="classes">
        <img v-if="iconStart" :src="iconStart" class="icon-start" />
        {{ name }}
        <img v-if="iconEnd" :src="iconEnd" class="icon-end" />
    </button>
</template>

<style>
    button{
        font-family: "archivoSemibold";
        font-size: 14px;
        border-radius: 100px;
        display: flex;
        gap: 3px;
        align-items: center;
    }

    .icon-start, .icon-end {
        width: 20px;
        height: 20px;
    }
    
</style>