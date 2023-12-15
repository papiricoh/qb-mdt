<script setup>

</script>

<script>
export default {
  data() {
    return {
      search_input: "",
      search_list: [
        
      ],
      
    }
  },
  watch: {
    search_input(newValue, oldValue) {
      
    }
  }
}
</script>

<template>
  <div class="incidents_page">
    <div class="page_title">
      <div style="font-size: 2rem; font-weight: bold;">Incidents</div>
      <div>Search for incidents by citizen</div>
    </div>
    <div class="main_page">
      <div class="search_container">
        <div>Search incidents:</div>
        <div class="input_container">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          <input v-model="search_input" placeholder="Search" type="text">
        </div>
        <div class="list_container">

        </div>
      </div>
      <div>dawaw</div>
    </div>
  </div>
</template>

<style scoped>

.incidents_page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: stretch;
}
.page_title {
  height: 4rem;
  padding: 0 .6rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #bfd6ff2f;
  margin-bottom: 1rem;
}
.main_page {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
}
.search_container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: .4rem;
}
input {
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  width: 100%;
}
input:focus-visible {
  outline: none;
}
.input_container {
  background-color: #052442;
  border-radius: .4rem;
  padding: .4rem;
  display: flex;
  align-items: center;
  gap: .4rem;
}
.list_container {
  height: 100%;
  overflow-y: scroll;
}
</style>
