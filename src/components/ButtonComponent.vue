<script>
    export default {
        name: "ButtonComponent",
        props: {
            name: {
            type: String,
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
            },
            numbers: {
            type: String,
            },
            styleNumbersButton: {
                type: Object, 
            },
            styleNameButton: {
                type: Object, 
            },
            classNumbersButton: {
                type: Array, 
            },
            classNameButton: {
                type: Array, 
            },
        }
    };
</script>


<template>
    <button :class="classes">
        <img v-if="iconStart" :src="iconStart" class="icon-start" />
        <span :class="classNameButton" :style="styleNameButton">{{ name }}</span> <span :class="classNumbersButton" :style="styleNumbersButton">{{ numbers }}</span>
        <img v-if="iconEnd" :src="iconEnd" class="icon-end" />
    </button>
</template>

<style>
    button{
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