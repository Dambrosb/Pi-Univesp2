<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="auto"><BarraLateral/></v-col>
        <v-col cols="10"><DashboardView/></v-col>
    </v-row>
    </v-main>
  </v-app>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue';
import DashboardView from './views/DashboardView.vue';

export default {
  name: 'App',
  components: {
    BarraLateral,
    DashboardView
  },
  data: () => ({
    //
  }),
}
</script>
