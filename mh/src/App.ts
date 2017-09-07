import Menus from '@/components/Menu'

export default {
  name: 'app',
  template: `<div id="app">
              <Menus></Menus>
              <router-view></router-view>
            </div>`,
  components: { Menus }
}
