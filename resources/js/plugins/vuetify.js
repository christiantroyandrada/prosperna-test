import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'  //This is where the Vuetify JS files are imported and exported to be used in the
                                      //app.js file.                   
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)