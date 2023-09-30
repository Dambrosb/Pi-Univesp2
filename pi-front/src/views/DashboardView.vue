<template>
 <CardsFrequencia @clicked="pegarValor"/>
  <v-card v-if="showCard" class="ma-8">
    <v-card-title>{{ this.titulo }}</v-card-title>
    <v-table v-show="mostrarTabela(this.titulo)" >
      <thead>
        <tr>
          <th class="text-center">
            Nome do aluno
          </th>
          <th class="text-center">
            RG
          </th>
          <th class="text-center">
            Turma
          </th>
          <th class="text-center">
            Quantidade de falta
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lista" :key="item.name">
          <td class="text-center">{{ item.nome }}</td>
          <td class="text-center">{{ item.rg }}</td>
          <td class="text-center">{{ item.turma }}</td>
          <td class="text-center">{{ item.faltas }}</td>
        </tr>
      </tbody>
    </v-table>
</v-card>
</template>

<script>
import { defineComponent } from 'vue';

import CardsFrequencia from '../components/CardsFrequencia.vue';

export default defineComponent({
  name: 'DashboardView',
  components: {
    CardsFrequencia,
},
data () {
  return {
    lista: [],
    titulo: '',
    showCard: false
  }
},
methods:  {
    pegarValor(item) {
        this.titulo = item
        if (this.titulo) {
          this.showCard = true
        }
    },
    mostrarTabela(tabela) {
      if (tabela === 'Alunos com Frequência Perfeita'){
        this.lista = [{nome: "Bruno", rg: "52.009.212-x", turma: "9A", faltas: 0}, { nome: "Carlos", rg: "90.039.903-2", turma: "8B", faltas: 0}]
        return true
      }
      else if (tabela === 'Frequência Abaixo do Ideal'){
        this.lista = [{nome: "Ana", rg: "52.009.212-x", turma: "9A", faltas: 10}, { nome: "José", rg: "90.039.903-2", turma: "8B", faltas: 11}]
        return true
      }
      else if (tabela === 'Alunos em Risco de Frequência'){
        this.lista = [{nome: "Stephanie", rg: "52.009.212-x", turma: "9A", faltas: 20}, { nome: "Maria", rg: "90.039.903-2", turma: "8B", faltas: 25}]
        return true
      }
    }
}
});
</script>