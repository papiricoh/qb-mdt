<script setup>

</script>

<script>
export default {
  props: {
    incident: Object
  },
  data() {
    return {
      isDeleting: false,
    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="incidents_data_page">
    <div class="title">{{ incident.title }}</div>
    <div>{{ incident.desc }}</div>
    <div>{{ new Date(incident.timestamp).toLocaleDateString() }}</div>
    <div class="player_container">
      <div>{{ incident.user.first_name }} {{ incident.user.last_name }}</div>
      <div>{{ incident.user.citizenid }}</div>
    </div>
    <div class="fine_container">
      <div v-if="incident.fine.paid">Fine paid</div>
      <div v-else>Fine pay pending...</div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>Quantity: ${{ incident.fine.quantity.toLocaleString() }}</div>
        <div v-if="incident.fine.prison < 60">Prison: {{ incident.fine.prison }} months</div>
        <div v-else>Life in prison</div>
      </div>
    </div>
    <div class="isDeleting">
      <div v-if="!isDeleting" @click="isDeleting = true" class="delete">Delete Incident</div>
      <div v-else class="isDeleting_box">
        <div @click="isDeleting = false" class="delete noDelete">Cancel Delete</div>
        <div class="delete">Delete</div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.incidents_data_page {
  display: flex;
  flex-direction: column;
  height: 560px;
  justify-content: stretch;
  box-sizing: border-box;
  overflow-y: scroll;
  gap: .8rem;
}
.title {
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: .6rem;
  border-bottom: 1px ridge #bfd6ff2f;
}
.fine_container {
  background-color: #052442;
  padding: 1rem;
  border-radius: .4rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.player_container {
  background-color: #052442;
  padding: 1rem;
  border-radius: .4rem;
  display: flex;
  justify-content: space-between;
  gap: .4rem;
}
.delete {
  text-align: center;
  padding: 1rem;
  border: 2px solid #052442;
  cursor: pointer;
  border-radius: .4rem;
  font-weight: 600;
  transition: .4s;
}
.delete:hover {
  background-color: rgb(155, 3, 0);
  color: white;
  transition: .4s;
}
.delete:active {
  background-color: transparent;
  color: white;
  transition: .4s;
}
.isDeleting {
  display: flex;
  justify-content: stretch;
  margin: 2rem 8rem;
  align-items: center;
  justify-content: center;
}
.isDeleting_box {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.noDelete:hover {
  background-color: #052442;
}
</style>
