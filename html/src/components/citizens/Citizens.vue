<script setup>
import IncidentData from './IncidentData.vue'
</script>

<script>
export default {
  data() {
    return {
      search_input: null,
      search_list: [],

      selected_citizen: null,

    }
  },
  watch: {
    search_input(newValue, oldValue) {
      if(newValue.length < 3) {
        return
      }
      this.search_list = [
        { citizenid: "23DWE23", first_name: "John", last_name: "Mclain", hasWarrant: true },
      ]
    }
  },
  methods: {
    isSelected(incident) {
      if(this.selected_citizen != null && this.selected_citizen.citizenid == incident.citizenid) {
        return "background-color: #083664;";
      }
      return "";
    }
  }
}
</script>

<template>
  <div class="citizens_page">
    <div class="page_title">
      <div style="font-size: 2rem; font-weight: bold;">Citizens</div>
      <div>Search for citizens</div>
    </div>
    <div class="main_page">
      <div class="search_container">
        <div>Search citizen:</div>
        <div class="input_container">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          <input v-model="search_input" placeholder="Search" type="text">
        </div>
        <div v-if="search_list.length != 0" class="list_container">
          <div @click="selected_citizen = citizen" class="citizen_box" v-for="citizen in search_list" :style="isSelected(citizen)">
            <div>{{ citizen.first_name }} {{ citizen.last_name }}</div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>{{ citizen.citizenid }}</div>
              <div v-if="citizen.hasWarrant" class="wanted">Wanted</div>
            </div>
          </div>
        </div>
        <div v-else class="empty_search"><font-awesome-icon :icon="['far', 'folder-open']" size="2xl" />No citizens</div>
      </div>
      <div v-if="selected_citizen == null" class="empty_citizen"><font-awesome-icon :icon="['fas', 'circle-question']" size="2xl" />Select a citizen</div>
      <div v-else></div>
    </div>
  </div>
</template>

<style scoped>

.citizens_page {
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
.citizen_box {
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
.citizen_box:hover {
  background-color: #083664;
  transition: .2s;
}
.citizen_box:active {
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
.empty_citizen {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.10);
  font-size: 2rem;
  gap: 1rem;
}
.wanted {
  margin: .2rem;
  padding: .2rem 1rem;
  border-radius: .8rem;
  border: 2px solid rgb(155, 3, 0);
  color: rgb(155, 3, 0);
  font-weight: 500;
}
</style>
