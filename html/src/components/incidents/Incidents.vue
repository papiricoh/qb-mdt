<script setup>
import IncidentData from './IncidentData.vue'
</script>

<script>
export default {
  data() {
    return {
      search_input: "",
      search_list: [
        
      ],
      selected_incident: null,

    }
  },
  watch: {
    search_input(newValue, oldValue) {
      if(newValue.length < 3) {
        return
      }
      this.search_list = [
        { id: 1, title: "Daños y prejuicios a la policia", desc: "Ha hecho daños", user: {citizenid: "23DWE23", first_name: "John", last_name: "Mclain" }, fine: { paid: true, quantity: 22000, prison: 0, list: [ {id: 1, title: "Example fellony", desc: "Example desc" } ] }, timestamp: 10232422324 },
        { id: 2, title: "Asesinato premeditado de Jonathan Laporta", desc: "Ataco y acabo con la vida de el ciudadano Johnathan Laporta al dia 10 de noviembre", user: {citizenid: "IOW232", first_name: "Jack", last_name: "Brown" }, fine: { paid: false, quantity: 20000, prison: 60, list: [ {id: 1, title: "Example fellony", desc: "Example desc" }, {id: 2, title: "Example fellony2", desc: "Example desc2" } ] }, timestamp: 1021324234224 },
      ]
    }
  },
  methods: {
    isSelected(incident) {
      if(this.selected_incident != null && this.selected_incident.id == incident.id) {
        return "background-color: #083664;";
      }
      return "";
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
        <div v-if="search_list.length != 0" class="list_container">
          <div @click="selected_incident = incident" v-for="incident in search_list" :style="isSelected(incident)" class="incident_box">
            <div style="font-size: 1.2rem; font-weight: 600;">{{ incident.title }}</div>
            <div class="incident_data">
              <div><font-awesome-icon :icon="['far', 'id-card']" /> {{ incident.user.citizenid }} - <font-awesome-icon :icon="['fas', 'user']" /> {{ incident.user.first_name + " " + incident.user.last_name }}</div>
              <div v-if="incident.fine.paid" class="paid">Paid</div>
              <div v-else class="pending">Pending</div>
            </div>
          </div>
        </div>
        <div v-else class="empty_search"><font-awesome-icon :icon="['far', 'folder-open']" size="2xl" />No incidents</div>
      </div>
      <div v-if="selected_incident == null" class="empty_incident"><font-awesome-icon :icon="['fas', 'circle-question']" size="2xl" />Select an incident</div>
      <IncidentData :incident="selected_incident" v-else></IncidentData>
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
  box-sizing: border-box;
}
.search_container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: .4rem;
  height: 100%;
  box-sizing: border-box;
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
  overflow-y: scroll;
  box-sizing: border-box;
  height: 31rem;
}
.incident_box {
  padding: .6rem;
  background-color: #052442;
  border-radius: .3rem;
  margin: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .4rem;
  cursor: pointer;
  transition: .2s;
}
.incident_box:hover {
  background-color: #083664;
  transition: .2s;
}
.incident_box:active {
  background-color: transparent;
  transition: .2s;
}
.empty_search {
  color: rgba(255, 255, 255, 0.10);
  align-self: center;
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
}
.empty_incident {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.10);
  font-size: 2rem;
  gap: 1rem;
}
.incident_data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.paid {
  margin: .2rem;
  padding: .2rem 1rem;
  border-radius: .8rem;
  border: 2px solid rgb(0, 117, 0);
  color: rgb(0, 117, 0);
  font-weight: 500;
}
.pending {
  margin: .2rem;
  padding: .2rem 1rem;
  border-radius: .8rem;
  border: 2px solid rgb(155, 3, 0);
  color: rgb(155, 3, 0);
  font-weight: 500;
}
</style>
