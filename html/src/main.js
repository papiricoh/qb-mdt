import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faHandcuffs } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark)
library.add(faArrowRightFromBracket)
library.add(faHandcuffs)
library.add(faMagnifyingGlass)
library.add(faScaleBalanced)
library.add(faUser)
library.add(faCircleQuestion)
library.add(faFolderOpen)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
