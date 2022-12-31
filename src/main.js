import { createApp } from 'vue'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faMagnifyingGlass,  faCartShopping, faPlay, faBars, faReceipt, faPhone, faLocationArrow, faClock, faPenNib, faCircleInfo, faHouse} from '@fortawesome/free-solid-svg-icons'

import {faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';

import { faComment, faPenToSquare, faImages, faMap } from '@fortawesome/free-regular-svg-icons';


/* add icons to the library */
library.add(faFacebookF, faInstagram, faMagnifyingGlass, faCartShopping, faPlay, faBars, faReceipt, faPhone, faLocationArrow, faImages, faComment, faPenToSquare, faMap, faClock, faPenNib, faCircleInfo, faHouse)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')