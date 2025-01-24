<template>
    <div class="container mx-auto p-6">
      <div class="flex flex-col space-y-4">
        <div>
          <label for="project-select" class="block text-lg font-semibold">Selecciona un Proyecto</label>
          <select
            id="project-select"
            v-model="selectedProject"
            class="w-full p-3 border rounded-md"
          >
            <option disabled value="">Selecciona un proyecto</option>
            <option v-for="project in projects" :key="project.id" :value="project">
              {{ project.name }}
            </option>
          </select>
        </div>
  
        <div v-if="selectedProject" class="bg-white p-6 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-4">
              <div v-if="selectedProject.github">
                <a :href="selectedProject.github" target="_blank" class="text-[#FF5722] font-bold hover:underline">
                  GitHub
                </a>
              </div>
  
              <div v-if="selectedProject.productionLink">
                <a :href="selectedProject.productionLink" target="_blank" class="text-[#FF5722] font-bold hover:underline">
                  Proyecto en Producción
                </a>
              </div>
  
              <div v-if="selectedProject.techStack">
                <h3 class="text-[#FF5722] font-bold">Tech Stack:</h3>
                <ul class="list-disc pl-6 mt-2">
                  <li v-for="tech in selectedProject.techStack" :key="tech" class="text-gray-700">
                    {{ tech }}
                  </li>
                </ul>
              </div>
            </div>
  
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold">
                {{ selectedProject.name }}
              </h2>
              <p class="mt-2 text-gray-700">
                {{ selectedProject.description }}
              </p>
            </div>
  
            <div v-if="selectedProject.images" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                <CarouselImagesProjects :images="selectedProject.images"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CarouselImagesProjects from '../components/CarouselImagesProjects.vue';
  
  const selectedProject = ref(null);
  const projects = ref([
    {
      id: 1,
      name: 'Gym Elegance',
      description: 'Gym Elegance es una plataforma web integral para la gestión de gimnasios. Desarrollé tanto el frontend como el backend, creando una experiencia interactiva e intuitiva para los usuarios, instructores y administradores. Implementé un sistema de autenticación con roles diferenciados y funcionalidades como la consulta y reserva de actividades, gestión de clases, y administración de usuarios. Optimicé la aplicación para dispositivos móviles, garantizando una experiencia fluida en diversas pantallas. ',
      github: ' https://github.com/SergioCruzSalinas/Gym-Elegance',
      productionLink: 'https://gym-elegance-production.up.railway.app/home',
      techStack: ['Vue.js', 'Vuetify', 'Node.js', 'Express.js'],
      images: ['../assets/gym-elegance/admin/panel-administrador.jpg', 
               '../assets/gym-elegance/user/agenda-actividades-usuario.jpg',
               '../assets/gym-elegance/user/pantalla-home.jpg',
               '../assets/gym-elegance/user/pantalla-perfil-usuario.jpg',
               '../assets/gym-elegance/user/responsividad-pantalla.jpg',
               '../assets/gym-elegance/coach/pantalla-actividades-coach.jpg',
              ],
    },
    {
      id: 2,
      name: 'Portafolio Web',
      description: '"Bienvenido a mi portafolio, un espacio donde muestro mis habilidades y proyectos en desarrollo web. Está diseñado con un enfoque moderno, intuitivo y responsivo, aplicando mis primeros conocimientos en Tailwind CSS para lograr un diseño limpio y flexible mientras continúo aprendiendo esta tecnología."',
      github: 'https://github.com/SergioCruzSalinas/portafolio-web',
      productionLink: 'https://server-production-f693.up.railway.app/home',
      techStack: ['Vue.js', 'Tailwind CSS'],
      images: ['../assets/portafolio-web/home.jpg', '../assets/portafolio-web/about.jpg', '../assets/portafolio-web/projects.jpg'],
    },
  ]);
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  