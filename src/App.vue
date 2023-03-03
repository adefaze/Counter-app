

<script setup>
import {ref} from 'vue';
  const count = ref(0);

  const addToCount = ()=>{
    count.value = count.value + 1
    }

     const subtractFromCount = ()=>{
    count.value = count.value - 1
    }

</script>

<template>
  <main>
    <div class="bg-gray-600">
      <h1 class="text-right">The count is...</h1>
      <p>{{count}}</p>
      <button @click="subtractFromCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
}

div {
  text-align: center;
}
</style>

