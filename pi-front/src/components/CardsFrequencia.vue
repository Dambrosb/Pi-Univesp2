<template>
    <v-row justify="space-around">
      <v-col cols="3">
        <v-card max-width="368">
          <v-card-item title="Alunos com Frequência Perfeita"></v-card-item>
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
        <v-card max-width="368">
          <v-card-item title="Frequência Abaixo do Ideal"></v-card-item>
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
        <v-card max-width="368">
          <v-card-item title="Alunos em Risco de Frequência"></v-card-item>
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
        drawer: true,
        rail: true,
      }
    },
  }
  
  
  </script>