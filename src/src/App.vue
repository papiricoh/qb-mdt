<script setup>

</script>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <main>
    <div class="header">
      <div></div>
      <div class="exit_button">Exit</div>
    </div>
    <div class="main_page">

    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #002142;
  height: 45rem;
  width: 80rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: #bfd6ff;
  display: grid;
  grid-template-columns: 9rem 8fr;
  padding: 1rem;
}
.header {
  padding: 1rem;
  border-right: 2px solid #bfd6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.main_page {
  
}
</style>
