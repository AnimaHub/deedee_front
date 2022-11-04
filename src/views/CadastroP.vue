<template>
  <div
    className="bg- p-6 max-w-sm mx-auto mt-10 rounded-xl shadow-lg flex items-center space-x-4 aspect-auto bg-zinc-700">
    <FormKit label="global" type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'"
      submit-label="Register" @submit="sendData()" :actions="false" #default="{ value }">
      <h1>Register!</h1>
      <p className="flex">
        You can put any type of element inside a form, not just FormKit inputs
        (although only FormKit inputs are included with the submission).
      </p>
      <hr />
      <!-- "nome": "docente 1",, -->
      <FormKit type="text" name="nome" label="Your name" placeholder="docente 1" help="What do people call you?"
        validation="required" v-model="nome" />

      <!-- "email": "docente1@email.com", -->
      <FormKit type="text" name="email" label="Your email" placeholder="docente1@email.com"
        help="What email should we use?" validation="required|email" v-model="email" />

      <!-- "celular": "11921111111", -->
      <FormKit type="tel" name="celular" label="Phone number" placeholder="11921111111"
        validation="required|matches:/^[0-9]{2}[0-9]{5}[0-9]{4}$/" help="Number format 11921111111" v-model="celular" />

      <!-- "ie": 1, -->
      <FormKit type="select" label="Instutuição de Ensino (IE)" placeholder="Instituição de Ensino" name="ieNome"
        v-model="ieNome" :options="ies.map((ie) => ie.nome)" :key="ies.id" @change="salvaIe($event.target.options)" />

      <!-- "campus": null, -->
      <FormKit v-if="iePren" type="select" label="Campus" placeholder="Campus" name="campusNome" v-model="campusNome"
        :options="campusSelect.map((single) => single.campus)" @change="salvaCampus($event.target.options)" />


      <!-- "status": 0, -->
      <FormKit type="select" label="Status social" placeholder="Status" name="status" :options="{
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        mars: 'Mars',
        jupiter: 'Jupiter',
        saturn: 'Saturn',
        uranus: 'Uranus',
        neptune: 'Neptune',
      }" validation="required|is:jupiter" validation-visibility="dirty" :validation-messages="{
  is: 'Nope! Jupiter is the largest planet',
}" v-model="status" />

      <!-- " area_conhecimento": "Computação e engenharias" , -->
      <FormKit type="text" name="area_conhecimento" label="Area de conhecimento" placeholder="Computação e engenharias"
        v-model="area_conhecimento" />

      <!-- " tp_contrato ": "Computação e engenharias" , -->
      <FormKit type="text" name="tp_contrato" label="Tipo de contrato" placeholder="CLT" v-model="tp_contrato" />

      <!-- "matricula": "1111", -->
      <FormKit type="text" name="matricula" label="matricula" placeholder="1111" validation="required"
        v-model="matricula" />

      <!-- "sem_entrada": null -->
      <FormKit type="select" label="sem_entrada" placeholder="Select a planet" name="sem_entradaOption"
        v-model="sem_entradaOption" :options="option.map((s) => s.value)" :key="option.id"
        @change="salvaIdSemEntrada($event.target.options)" />

      <!-- "ano_entrada": 2022, -->
      <FormKit v-if="sem_entradaOption == 'yes'" type="date" name="ano_entrada" label="Ano de entrada" help="2022"
        validation="required" v-model="ano_entrada" />

      <!-- "sem_saida": null -->
      <FormKit type="select" label="sem_saida" placeholder="Select a planet" name="sem_saidaOption"
        v-model="sem_saidaOption" :options="option.map((s) => s.value)" :key="option.id"
        @change="salvaIdSemSaida($event.target.options)" />

      <!-- "ano_saida": 2022, -->
      <FormKit v-if="sem_saidaOption == 'yes'" type="date" name="ano_saida" label="Ano de saida" help="2022"
        validation="required" v-model="ano_saida" />

      <FormKit id="submit" type="submit" label="Register" />
      <pre wrap>{{ value }}</pre>

    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>

<script>


// preenche os selects
import services from '../../axios/services'
const IEs = services.getIEs()
const Campus = services.getCampus();
const idP = services.getProfessors()

export default {
  name: "Cadastro",
  data() {
    return {
      //variáveis
      idProfessor: idP,
      ies: IEs,
      ieNome: "",
      iePren: false,
      campusSelect: [],
      campusNome: "",
      vazio: "Selecione a IE",
      sem_entradaOption: "",
      sem_saidaOption: "",
      option: [
        {
          value: 'yes',
          id: 1
        },
        {
          value: 'no',
          id: 2
        }
      ],

      //formulário
      id: 0,
      nome: "",
      email: "",
      celular: "",
      ie: 0,
      campus: "",
      matricula: "",
      status: "",
      tp_contrato: "",
      area_conhecimento: "undefined",
      sem_entrada: 0,
      ano_entrada: 2020,
      sem_saida: 0,
      ano_saida: "0000"
    }
  },
  methods: {
    salvaCampus(option) {
      this.campus = option.selectedIndex
      console.log(this.campus)
    },
    salvaIe(option) {
      this.ie = option.selectedIndex
      console.log(this.ie)
      if (this.ie != 0) {
        this.iePren = true
      }
      this.campusIe(this.ie)
    },
    campusIe(ieId) {
      this.campusSelect = []
      Campus.map((s) => {
        if (s.ie == ieId) {
          this.campusSelect.push(s)
        }
      })
    },
    salvaIdSemSaida(n) {
      this.sem_saida = n.selectedIndex
      console.log(this.sem_saida)
    },
    salvaIdSemEntrada(n) {
      this.sem_entrada = n.selectedIndex
      console.log(this.sem_entrada)
    },
    pegaUltimoIdProfessor(e) {
      e.preventDefault()
      this.id = (this.idProfessor.length + 1)
      console.log(this.id)
    },
    async sendData() {
    
      const id = this.id
      const nome = this.nome
      const email = this.email
      const celular = this.celular
      const ie = this.ie
      const campus = this.campus
      const matricula = this.matricula
      const status = this.status
      const tp_contrato = this.tp_contrato
      const area_conhecimento = this.area_conhecimento
      const sem_entrada = this.sem_entrada
      const ano_entrada = this.ano_entrada
      const sem_saida = this.sem_saida
      const ano_saida = this.ano_saida

      const data = { id, nome, email, celular, ie, campus, matricula, status, tp_contrato, area_conhecimento, sem_entrada, sem_saida, ano_entrada, ano_saida };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      
      const response = services.postProfessor(options)
      console.log(response)
    }
  }
}

</script>
