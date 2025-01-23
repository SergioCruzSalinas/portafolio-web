<template>
  <div class="relative w-full max-w-lg h-64 mx-auto"> 
    <div class="overflow-hidden rounded-lg h-full">
      <div class="flex transition-transform duration-500 h-full" :style="`transform: translateX(-${activeSlide * 100}%)`">
        <div v-for="(slide, index) in images" :key="index" class="w-full h-full flex-shrink-0 flex items-center justify-center bg-black">
          <img :src="slide" class="w-full h-full object-contain" :alt="'Slide ' + (index + 1)">
        </div>
      </div>
    </div>

    <button @click="prevSlide" class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none">
      &#10094;
    </button>
    <button @click="nextSlide" class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none">
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const activeSlide = ref(0);

const nextSlide = () => {
  activeSlide.value = (activeSlide.value === props.images.length - 1) ? 0 : activeSlide.value + 1;
};

const prevSlide = () => {
  activeSlide.value = (activeSlide.value === 0) ? props.images.length - 1 : activeSlide.value - 1;
};
</script>

