<script lang="ts" setup>
import { ref } from 'vue';
import { Pet,Response } from '../types/type';
const baseURL = 'http://127.0.0.1:4523/m1/5225091-4891884-default';

const pet = ref<Pet>(); // 初始化为null


async function getData(){
const res=await fetch(`${baseURL}/pet/1`)
const json: Response<Pet> = await res.json()
//console.log("data :>>"，json,data.category)
pet.value = json.data;

}
</script>
 
<template>
<div>
<p>{{ baseURL }}</p>
<button btn @click="getData">
  获取宠物数据
</button>
<div w-full>
<div>{{ pet?.name }}</div>
<div>{{ pet?.category.name }}</div>
<img v-for="(url,index) in pet?.photoUrls" :key="index" :src="url" alt="">
</div>
</div>
</template>