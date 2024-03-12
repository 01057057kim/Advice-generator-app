<script setup>
import { ref } from 'vue'

const advice = ref('');
const id = ref('');

const getAdvice = async () => {
    const get = await fetch('https://api.adviceslip.com/advice')
    const data = await get.json();
    advice.value = data.slip.advice;
    id.value = data.slip.id;
};
</script>

<template>
    <section class="bg-d-g-blue w-[400px] md:w-[500px] h-auto rounded-xl">
        <div class="h-auto text-center flex flex-col p-10 gap-7 min-h-[300px]">
            <h1 class="uppercase text-n-green text-[14px] tracking-[5px] font-bold">Advice #{{ id }}</h1>
            <p v-if="advice" class="text-l-cyan font-semibold">❝{{ advice }}❞</p>
            <img class="hidden md:block mb-7" src="../assets/images/pattern-divider-desktop.svg" alt="desktop pattern">
            <img class="block md:hidden mb-7" src="../assets/images/pattern-divider-mobile.svg" alt="mobile pattern">
        </div>
        <div class="absolute z-20 flex items-center justify-center w-[400px] md:w-[500px] -translate-y-8">
            <button class="border border-transparent bg-n-green  rounded-full transform hover:scale-110 hover:shadow-neon-green" @click="getAdvice"><svg class="hover:animate-spin m-5" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></button>
        </div>
    </section>
</template>
