<script lang="ts" setup>
import { onMounted,ref } from 'vue';
import { ZhiHuHot,ZhiHuHotList } from '../types/zhihu';

const list = ref<ZhiHuHot[]>([]);

const getData = async () => {
    const url = "/api/v3/feed/topstory/hot-lists/total";
//   const url =
//     "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  let response = await fetch(url, { mode: "no-cors" });
  const res: ZhiHuHotList = await response.json();
  list.value = res.data;
};

onMounted(() => {
  getData();
});

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`);
};

</script>

<template>
<div class="list"> 
<section v-for="(item, index) in list" :key="item.id" class="hot"
@click="toggleHot(item.target.id)">
<span>{{ index+1 }}</span>
<div style="background-color: pink;text-align: start;padding-left: 30px;padding-top: 10px;padding-bottom: 18px;border-radius: 10px;">
    <h1 class='ellipsis 2' style="font-size: 20px;">
    {{ item.target.title }}
    </h1>
<p class='ellipsis 1'>
    {{ item.target.excerpt }}
</p>
    <div style="text-align: start;">
    {{ item.detail_text }}  
    </div>

  </div>
    <img :src="item.children[0].thumbnail" alt="" style="width: 100px;height: 100px; position: absolute; left: 340px;margin-top: -120px; "></section>
</div>

</template>

