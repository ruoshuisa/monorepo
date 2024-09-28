<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import dayjs from "dayjs";
import { Person } from "@ruoshuisa/tools";
//import ZhihuHot from './pages/ZhihuHot.vue';
import { onMounted } from "vue";

import { RouterLink } from 'vue-router';




const p = new Person("23 张雨佳", "math");
</script>

<template>
  <div class="bg-#a992d5 p-10 dark:bg-purple md:bg-amber-4 sm:bg-blue-3">
    <div
      class="-4 m-auto size-100 bg-purple hover:(bg-cyan text-4xl) md:bg-pink sm:bg-blue-3"
      flex
      content-center
      items-center
      justify-center
      transition-1000
    >
      <button btn>
        OnClick
      </button>
      <div class="i-carbon-logo-github" />
    </div> 

    
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <HelloWorld msg="Vite + Vue" /> 
     <section
      class="grid grid-cols-3 m-auto mb-4 mt-4 w-800px items-center gap-2 rounded-md bg-pink-2"
    >
      <div class="h-10 place-content-center bg-pink-3">
        1
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        2
      </div>
      <div class="h-10 place-content-center bg-pink-3">
        3
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        4
      </div>
      <div class="h-10 place-content-center bg-pink-3">
        5
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        6
      </div>
    </section> 
     <!-- <ZhihuHot /> -->
    
  </div>
<!-- <Apifox/>
<i18n /> -->

<main class="m-2 h-70vh overflow-y-scroll rounded-xl bg-truegray-200 p-2 dark:bg-purple-300">
  <p>
    <strong>Current route path:</strong>{{ $route.fullPath }}
  </p>
  <header flex justify-center gap-4 text-xl>
    <RouterLink to="/">
      知乎热榜
    </RouterLink>
    <RouterLink to="/theme">
      主题切换
    </RouterLink>
    <RouterLink to="/mock">
      以赝顶真
    </RouterLink>
    <RouterLink to="/api">
      api
    </RouterLink>
    <RouterLink to="/I18n">
      I18n
    </RouterLink>
  </header>
  <router-view />
</main>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
