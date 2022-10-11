<template>
    <div
        className="bg- p-6 max-w-sm mx-auto mt-10 rounded-xl shadow-lg flex items-center space-x-4 aspect-auto bg-zinc-700">
        <FormKit label="global" type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'"
            submit-label="Register" @submit="submitHandler" :actions="false" #default="{ value }">
            <h1>Register!</h1>
            <p className="flex">
                You can put any type of element inside a form, not just FormKit inputs
                (although only FormKit inputs are included with the submission).
            </p>
            <hr />
            <!-- "nome": "docente 1",, -->
            <FormKit type="text" name="nome" label="Your name" placeholder="docente 1" help="What do people call you?"
                validation="required" />

            <!-- "email": "docente1@email.com", -->
            <FormKit type="text" name="email" label="Your email" placeholder="docente1@email.com"
                help="What email should we use?" validation="required|email" />

            <!-- "celular": "11921111111", -->
            <FormKit type="tel" name="celular" label="Phone number" placeholder="11921111111"
                validation="required|matches:/^[0-9]{2}[0-9]{5}[0-9]{4}$/" help="Number format 11921111111" />

            <!-- "ie": 1, -->
            <FormKit type="select" label="Instutuição de Ensino (IE)" placeholder="Instituição de Ensino" name="ie"
                :options="{
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
  }" />

            <!-- "campus": null, -->
            <FormKit type="select" name="campus" label="Campus" placeholder="Campus"
                :options="{
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
  }" />

            <!-- "status": 0, -->
            <FormKit type="select" label="Status social" placeholder="Status" name="status"
                :options="{
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
  }" />

            <!-- "area_conhecimento": "Computação e engenharias", -->
            <FormKit type="text" name="area_conhecimento" label="Area de conhecimento"
                placeholder="Computação e engenharias" validation="required"/>

            <!-- "matricula": "1111", -->
            <FormKit type="text" name="matricula" label="matricula" placeholder="1111" validation="required"/>

            <!-- "ano_entrada": 2022, -->
            <FormKit type="date" name="ano_entrada" label="Ano de entrada" help="2022"
                validation="required" />


            <!-- "sem_entrada": null -->
            <FormKit type="select" label="sem_entrada" placeholder="Select a planet" name="planet"
                :options="{
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
  }" />


            <!-- "ano_saida": 2022, -->
            <FormKit type="date" name="ano_saida" label="Ano de saida" help="2022"
                validation="required" />


            <!-- "sem_saida": null -->
            <FormKit type="select" label="sem_saida" placeholder="Select a planet" name="sem_saida"
                :options="{
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
  }" />

            <FormKit type="submit" label="Register" />
            <pre wrap>{{ value }}</pre>

        </FormKit>
        <div v-if="submitted">
            <h2>Submission successful!</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
    // Let's pretend this is an ajax request:
    await new Promise((r) => setTimeout(r, 1000))
    submitted.value = true
}
</script>

