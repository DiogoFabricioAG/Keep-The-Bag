<script setup lang="ts">

</script>

<template>
  <div class="text-center text-linen-p mt-5 mx-auto md:w-1/2 w-3/4 after:scale-0 before:scale-90">
    <h1 class=" font-brawler md:text-7xl text-6xl font-bold  break-words">Zona de Ahorro Inteligente</h1>
  </div>
  <div class="md:mx-auto flex md:flex-row flex-col gap-2 items-center justify-between md:w-3/4 mt-5">
    <ButtonDesign title="Registrar Pagos" description="Zona de Registro de Pagos" :kind="1" route="about"/>
    <ButtonDesign title="Historial" description="Zona de Registro de Pagos" :kind="2"/>
    <ButtonDesign title="Miscelaneos" description="Personalización del servicio" :kind="3"/>
  </div>
  
</template>

