<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click=""
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    

    <div class='nav-bar'>
      <Button class="menuIconWrapper" v-if="!drawer" @click="drawer = !drawer">
        <i class="menuIcon material-icons" >more_vert</i>
      </Button>
    </div>
    
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import routes from '@/router/config'
export default {
  data () {
    const items = routes.map(item => ({
      title: item.name,
      route: item.path
    }))
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style>
.nav-bar{
  position: fixed;
  z-index: 100;
}
.menuIconWrapper{
  width: 40px;
  height: 40px;
  border: rgba(255, 255, 255, 0.3) 1px solid;
  margin: 5px;
  color: rgba(255, 255, 255, 0.7);
}
.menuIconWrapper .menuIcon{
  line-height: 40px;
}
.container {
  padding: 0;
}
</style>
