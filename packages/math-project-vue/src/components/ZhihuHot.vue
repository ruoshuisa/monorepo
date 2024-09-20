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

<!-- <template>
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
<section class="bg-yellow rounded-md w-800px grid grid-cols-3 items-center gap-2">
  <div class="bg-pink h-10 place-content-center">1</div>
  <div bg-sky>2</div>
  <div>3</div>
  <div>4</div>
</section>
</template> -->

<template>
  <div class="list">
    <section
      v-for="(item, index) in list"
      :key="item.id"
      class="hot flex items-center mb-5 bg-purple-300 rounded-lg px-3 py-3 shadow-md w-full"
      @click="toggleHot(item.target.id)"
    >
      <span class="mr-3 font-bold">{{ index + 1 }}</span>
      <div class="flex-grow max-w-[calc(90%-180px)] pr-5 ">
        <h3 class="text-xl overflow-hidden text-ellipsis whitespace-nowrap">
          {{ item.target.title }}
        </h3>
        <p class="text-base text-gray-600 overflow-hidden text-ellipsis -webkit-line-clamp-3 line-clamp-3 leading-normal">
          {{ item.target.excerpt }}
        </p>
        <div class="text-start">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="" class="rounded-md w-50 h-auto ml-5" />
    </section>
  </div>
</template>


