<script setup>
import Incidents from './components/Incidents.vue';
</script>

<script>
export default {
  data() {
    return {
      page: "citicens",
    }
  }
}
</script>

<template>
  <main>
    <div class="header">
      <div class="tab_list">
        <img style="align-self: center;" class="logo" src="https://pbs.twimg.com/profile_images/1433549822624100404/p5gTDCOj_400x400.png">

        <div v-if="page == 'citicens'" class="tab_button active_tab"><font-awesome-icon :icon="['fas', 'user']" /> Citizens</div>
        <div @click="page = 'citicens'" v-else class="tab_button"><font-awesome-icon :icon="['fas', 'user']" /> Citizens</div>
        <div v-if="page == 'incidents'" class="tab_button active_tab"><font-awesome-icon :icon="['fas', 'bookmark']" /> Incidents</div>
        <div @click="page = 'incidents'" v-else class="tab_button"><font-awesome-icon :icon="['fas', 'bookmark']" /> Incidents</div>
        <div v-if="page == 'evidences'" class="tab_button active_tab"><font-awesome-icon :icon="['far', 'folder-open']" /> Evidences</div>
        <div v-else @click="page = 'evidences'" class="tab_button"><font-awesome-icon :icon="['far', 'folder-open']" /> Evidences</div>
        <div v-if="page == 'warrants'" class="tab_button active_tab"><font-awesome-icon :icon="['fas', 'handcuffs']" /> Warrants</div>
        <div v-else @click="page = 'warrants'" class="tab_button"><font-awesome-icon :icon="['fas', 'handcuffs']" /> Warrants</div>
        <div v-if="page == 'cases'" class="tab_button active_tab"><font-awesome-icon :icon="['fas', 'scale-balanced']" /> Cases</div>
        <div v-else @click="page = 'cases'" class="tab_button"><font-awesome-icon :icon="['fas', 'scale-balanced']" /> Cases</div>
      </div>

      <div class="tab_button" style="align-self: flex-start;"><font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" /> Exit</div>
    </div>
    <div class="main_page">
      <Incidents v-if="page == 'incidents'"></Incidents>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #00152b;
  height: 45rem;
  width: 80rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: #7b8494;
  display: grid;
  grid-template-columns: 10rem 8fr;
  padding: 1rem;
  margin: 4rem;
  box-sizing: border-box;
}
.header {
  padding: 1rem;
  border-right: 2px solid #bfd6ff2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.tab_list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .4rem;
}
.logo {
  padding: .4rem;
  font-size: .7rem;
  font-weight: bold;
  text-align: center;
  width: 80%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bfd6ff2f;
}
.tab_button {
  font-weight: 500;
  padding: .4rem .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  font-size: .9rem;
  cursor: pointer;
}
.tab_button:hover {
  color: #0085ec;
}
.tab_button:active {
  color: #2056bb;
}
.active_tab {
  color: #0085ec;
}
.main_page {
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
