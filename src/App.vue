

<script setup> 
  import {ref} from "vue";

  const count = ref(0);


</script>


<template>
  <main>
    <div>
      <h2>The count is...</h2>
      <p>{{count}}</p>
      <button @click="count++">+</button>
      <button @click="count--">-</button>
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

