<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" :width="200">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="Prof Carlos" nav>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="dashboard" style="text-decoration: none; color: inherit;"><v-list-item prepend-icon="mdi-view-dashboard" title="DashBoard" value="dashboard"></v-list-item></router-link>
          <v-list-item prepend-icon="mdi-format-list-bulleted-square" title="Frequencia" value="frequencia"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Turmas" value="turmas"></v-list-item>
          <router-link to="home" style="text-decoration: none; color: inherit;"><v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="Home"></v-list-item></router-link>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 970px"></v-main> 
    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'BarraLateral',

  data () {
    return {
      drawer: true,
      rail: true,
    }
  },
}


</script>
