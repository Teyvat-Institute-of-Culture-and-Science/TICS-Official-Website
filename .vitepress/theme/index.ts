import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
import GlobalNotice from './GlobalNotice.vue'
import GeneralMembersList from './components/GeneralMembersList.vue'
import Hitokoto from './components/Hitokoto.vue'
import CustomLayout from './CustomLayout.vue'


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(GlobalNotice)
    })
  },
  enhanceApp({ app }) {
    app.component('GeneralMembersList', GeneralMembersList)
    app.component('Hitokoto', Hitokoto)
  }
}