<script setup>
</script>

<script>
export default {
  props: {
    citizen: Object
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<template>
  <div class="data_container">
    <div class="name_container">
      <div style="font-size: 2rem; font-weight: 600;">{{ citizen.first_name }} {{ citizen.last_name }}</div>
      <div>{{ citizen.citizenid }}</div>
    </div>
    <div v-if="citizen.hasWarrant" class="warrant_box">
      <div style="font-size: 1.6rem; font-weight: 600;">This citizen has an active warrant!</div>
      <div>{{ citizen.warrant.title }}</div>
      <div>{{ new Date(citizen.warrant.timestamp).toLocaleDateString() }}</div>
    </div>
  </div>
</template>

<style scoped>
.data_container {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex-wrap: wrap;
  gap: .8rem;
  height: 560px;
  overflow-y: scroll;
}
.name_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: .6rem;
  border-bottom: 1px solid #bfd6ff2f;
}
.warrant_box {
  display: flex;
  padding: .6rem;
  background-color: #052442;
  border-radius: .3rem;
  flex-direction: column;
  gap: .4rem;
  cursor: pointer;
  transition: .4s;
}
.warrant_box:hover {
  background-color: #053c74;
  transition: .4s;
}
.warrant_box:active {
  background-color: transparent;
  transition: .4s;
}
</style>
