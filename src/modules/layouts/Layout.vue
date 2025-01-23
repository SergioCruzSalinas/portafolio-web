<template>
    <div class="min-h-screen flex flex-col mt-6">
 
     <nav class="ml-auto mr-20 sm:mr-10 md:mr-20">
         <Navigation />
     </nav>
 
     <div class="flex-grow">
         <RouterView />
     </div>
 
     <footer class="justify-center mt-6 sm:mt-4">
         <Footer />
     </footer>
 
    </div>
 </template>
 
 <script setup>
 import Navigation from '../components/Navigation.vue';
 import Footer from '../components/Footer.vue';
 </script>
 