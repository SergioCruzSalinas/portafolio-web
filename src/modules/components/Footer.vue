<template>
    <div class="bg-[#007BFF] text-white p-10 pt-5 sm:p-6 md:p-8">  

        <h2 class="text-3xl sm:text-2xl md:text-3xl">Mira mi 
            <a href="../files/Sergio_Cruz_Salinas_CV.pdf" download>
                <strong class="text-[#FF5722]">curriculum</strong>
            </a> 
            y ponte en contacto conmigo
        </h2>

        <p class="text-xl sm:text-lg md:text-xl">
            <button @click="sendEmail" id="emailButton" class="sm:text-sm md:text-base">Correo electrónico</button> | 
            <a href="https://www.linkedin.com/in/sergio-cruz-salinas-336210262/" class="sm:text-sm md:text-base">LinkedIn</a>
        </p><br>

        <p class="text-center text-xl sm:text-base md:text-xl">© {{ year }} Sergio Cruz Salinas</p>

    </div>
</template>

<script setup>

const date = new Date()
const year = date.getFullYear()
const email = "sergiocruz7913@gmail.com"

const sendEmail = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
}

</script>
