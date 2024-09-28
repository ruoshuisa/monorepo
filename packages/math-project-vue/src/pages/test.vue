<script lang="ts" setup>
import { onMounted } from "vue";
import { useDark } from "../composables/useDark";

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark();
onMounted(() => {
  applySavedTheme();
});
</script>


<template>
    <div class="dark:bg-red">
       <div class="flex justify-center gap-5">
        <button @click="disableDarkMode">
          Light
        </button>
        <button @click="enableDarkMode">
          Dark
        </button>
      </div> 
    </div>
</template>