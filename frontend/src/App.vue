<script lang="ts" setup>
import {reactive} from 'vue'
import {Greet} from '../wailsjs/go/main/App'

const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then((result: string) => {
    data.resultText = result
  })
}

</script>

<template>
  <main>
    <div class="flex justify-center items-center">
      <div class="card">
        <div id="result" class="result">{{ data.resultText }}</div>
        <div id="input" class="input-box">
          <input id="name" v-model="data.name" autocomplete="off" class="input" type="text"/>
          <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" @click="greet">Greet</button>
        </div>
      </div>
    </div>
  </main>
</template>
