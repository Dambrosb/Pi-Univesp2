<template>
 <CardsFrequencia/>
</template>


<script>
import { defineComponent } from 'vue';

import CardsFrequencia from '../components/CardsFrequencia.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    CardsFrequencia,
},
});
</script>