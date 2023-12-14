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
      <div class="exit_button">EXIT</div>
    </div>
    <div class="main_page">
      <div class="tab_bar">
        <div class="tab_button">HOME</div>
      </div>
      <div class="data_page">

      </div>
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
  grid-template-rows: 1fr 8fr;
}
.header {
  padding: 1rem;
  border-bottom: 2px solid #bfd6ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main_page {
  display: grid;
  grid-template-columns: 10rem 6fr;
}
.tab_bar {
  border-bottom-left-radius: 1rem;
  padding-left: 1rem;
  padding-right: .4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: .6rem;
}
.data_page {
  background-color: #052442;
  box-shadow: 0 0 4px black inset;
  border-bottom-right-radius: 1rem;
  width: 100%;
  height: 100%;
}
.tab_button {
  padding: .4rem 1rem;
  background-color: #002850;
  border-radius: .5rem;
  cursor: pointer;
}
.exit_button {
  padding: .4rem 2rem;
  cursor: pointer;
  font-weight: bold;
}
</style>
