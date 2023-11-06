<template>
  <v-row justify="center">
    <CardsFrequencia @clicked="pegarValor"/>
  </v-row>
  <v-row justify="center">
    <v-card v-if="showCard" class="ma-8" width="85%">
      <v-card-title>{{ this.titulo }}</v-card-title>
      <v-table v-show="mostrarTabela(this.titulo)" >
        <thead>
          <tr>
            <th class="text-center">
              Nome do aluno
            </th>
            <th class="text-center">
              Responsavel
            </th>
            <th class="text-center">
              RA Escolar
            </th>
            <th class="text-center">
              Contato
            </th>
            <th class="text-center">
              Quantidade de faltas
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in lista" :key="item.name">
            <td class="text-center">{{ item.nome }}</td>
            <td class="text-center">{{ item.responsavel }}</td>
            <td class="text-center">{{ item.uid }}</td>
            <td class="text-center">{{ item.contato }}</td>
            <td class="text-center">{{ item.ausencias.split(',').length }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-row>
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
    showCard: false,
    listaFaltasConsecutivas: [
    {
        "ausencias": "2023-10-02, 2023-10-03, 2023-10-04, 2023-10-09, 2023-10-10, 2023-10-11, 2023-10-20, 2023-09-31, 2023-07-29, 2023-12-15",
        "nome": "Ana",
        "responsavel": "Miguel",
        "contato": "12 123456789",
        "uid": "ra111111"
    },
    {
        "ausencias": "2023-10-16, 2023-10-17, 2023-10-18",
        "responsavel": "Carlos",
        "nome": "Caio",
        "contato": "12 999999999",
        "uid": "ra111113"
    }
],
    listaAlunos: [
    {
        "ausencias": "2023-10-02, 2023-10-03, 2023-10-04, 2023-10-09, 2023-10-10, 2023-10-11",
        "nome": "Ana",
        "responsavel": "Miguel",
        "contato": "12 123456789",
        "uid": "ra111111"
    },
    {
        "ausencias": "2023-10-02",
        "responsavel": "Claudia",
        "nome": "Maria",
        "contato": "12 987654321",
        "uid": "ra111112"
    },
    {
        "ausencias": "2023-10-16, 2023-10-17, 2023-10-18",
        "responsavel": "Carlos",
        "nome": "Caio",
        "contato": "12 999999999",
        "uid": "ra111113"
    },
    {
        "ausencias": "2023-10-05, 2023-10-06",
        "responsavel": "Flavia",
        "contato": "12 888888888",
        "nome": "Pedro",
        "uid": "ra111114"
    },
    {
        "ausencias": "2023-10-13, 2023-10-13",
        "nome": "Elisa",
        "responsavel": "Talita",
        "contato": "12 777777777",
        "uid": "ra111115"
    },
    {
        "ausencias": "2023-10-13",
        "nome": "Jason",
        "responsavel": "Leonardo",
        "contato": "12 910283746",
        "uid": "ra111116"
    }
],
    listaAlunosRisco: [
    {
        "ausencias": "2023-10-02, 2023-10-03, 2023-10-04, 2023-10-09, 2023-10-10, 2023-10-11, 2023-10-20, 2023-09-31, 2023-07-29, 2023-12-15",
        "nome": "Ana",
        "responsavel": "Miguel",
        "contato": "12 123456789",
        "uid": "ra111111"
    }]
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
      if (tabela === 'Faltas totais'){
        this.lista = this.listaAlunos
        return true
      }
      else if (tabela === 'Alunos com 3+ faltas consecutivas'){
        this.lista = this.listaFaltasConsecutivas
        return true
      }
      else if (tabela === 'Alunos em Risco de Frequência'){
        this.lista = this.listaAlunosRisco
        return true
      }
    }
}
});
</script>