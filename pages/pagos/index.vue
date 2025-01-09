<template>
  <form @submit.prevent="prueba" class="border-2 mt-5 gap-2 text-linen-p rounded-md items-center flex flex-col w-1/2 p-2 border-linen-p  mx-auto">
    <label for="title" class="text-xl">Titulo</label>
    <input v-model="title" class="text-black p-2" type="text" id="title" name="title" placeholder="ej. Pago de la Luz" />

    <label for="amount">Cantidad</label>
    <input v-model="amount" class="text-black p-2" type="number" id="amount" name="amount" placeholder="ej. 500"/>

    <label for="freq">Frecuente</label>
    <input v-model="freq" type="checkbox" id="freq" name="freq" />
    <button class="bg-linen-p text-sm font-bold p-2 text-davys-grey hover:translate-y-3 duration-150">Registrar</button>
  </form>

  <button>

  </button>
</template> 

<script>
  import { supabase } from '../utils/supabase'
  export default{
    data(){
      return {
        title: '',
        amount: 0,
        freq: false
      }
    },
    methods: {
      async prueba(){
      const { data, error } = await supabase
        .from('payments')
        .insert([
          { title: this.title, amount: this.amount, frequently: this.freq },
        ])
        .select()
        console.log(data);
        console.log(error);
      },
      
    },
  }
</script>