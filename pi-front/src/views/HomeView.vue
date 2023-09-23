<template>
<BarraLateral/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import BarraLateral from '../components/BarraLateral.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    BarraLateral,
  },
});
</script>
