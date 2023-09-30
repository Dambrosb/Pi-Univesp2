<template>
    <v-row justify="space-around" class="ma-8">
      <v-col cols="3">
        <v-card max-width="368" @click="cardClick">
          <v-card-title>Alunos com Frequência Perfeita</v-card-title>
          <v-card-text class="py-0">
            <v-row align="center" justify="end" no-gutters>
              <v-col class="text-h2 ma-2" cols="3">
                80
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="368" @click="cardClick">
          <v-card-title>Frequência Abaixo do Ideal</v-card-title>
          <v-card-text class="py-0">
            <v-row align="center" justify="end" no-gutters>
              <v-col class="text-h2 ma-2" cols="3">
                80
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card max-width="368" @click="cardClick">
          <v-card-title>Alunos em Risco de Frequência</v-card-title>
          <v-card-text class="py-0">
            <v-row align="center" justify="end" no-gutters>
              <v-col class="text-h2 ma-2" cols="3">
                80
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>

<script>
  export default {
    name: 'CardsFrequencia',
  
    data () {
      return {
        titulo: '',
      }
    },
    methods: {
      cardClick(event) {
        const card = event.currentTarget;
        const title = card.querySelector(".v-card-title").innerText;
        this.$emit("clicked", title)
      }
    },
  }
</script>