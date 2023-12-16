<script setup>

</script>

<script>
export default {
  data() {
    return {
      

    }
  },
  watch: {
    
  },
  methods: {
    
  }
}
</script>

<template>
  <div class="incidents_page">
    <div class="title_container">
      <div class="page_title">
        <div style="font-size: 2rem; font-weight: bold;">New Incident</div>
        <div>Create a new Incident</div>
      </div>
    </div>
    <div class="main_page">

    </div>
  </div>
</template>

<style scoped>

.incidents_page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: stretch;
  box-sizing: border-box;
}
.title_container {
  height: 4rem;
  padding: 0 .6rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #bfd6ff2f;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main_page {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  box-sizing: border-box;
}

</style>
