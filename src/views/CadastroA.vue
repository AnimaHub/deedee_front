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
            <!-- "nome": "discente 1", -->
            <FormKit type="text" name="nome" label="Your name" placeholder="discente 1" help="What do people call you?"
                validation="required" />

            <!-- "email": "discente1@email.com", -->
            <FormKit type="text" name="email" label="Your email" placeholder="discente1@email.com"
                help="What email should we use?" validation="required|email" />

            <!-- "celular": "11911111111", -->
            <FormKit type="tel" name="celular" label="Phone number" placeholder="11911111111"
                validation="required|matches:/^[0-9]{2}[0-9]{5}[0-9]{4}$/" help="number format 11911111111" />

            <!-- "ie": 1, -->
            <FormKit type="select" label="Sua instutuição de Ensino (IE)" placeholder="Instituição de Ensino" name="ie" :options="{
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

            <!-- "campus": 1, -->
            <FormKit type="select" label="Seu Campus" placeholder="Campus" name="campus" :options="{
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
                }" />

            <!-- "curso": 1, -->
            <FormKit type="select" label="Nome do curso" placeholder="Curso" name="curso" :options="{
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

            <!-- "ra": "1111" -->
            <FormKit type="text" name="ra" label="Registro Acadêmico (RA)" placeholder="aluxxxxxxxxx" validation="required"/>

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