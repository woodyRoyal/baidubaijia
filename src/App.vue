<template>
  <div id="app">
  	<HeadBJ></HeadBJ>
  	<Navigate></Navigate>
  	<keep-alive>
	    <router-view></router-view>
    </keep-alive>
    <FooterBJ></FooterBJ>
  </div>
</template>

<script>
import HeadBJ from './components/HeadBJ/HeadBJ'
import Navigate from './components/Navigate/Navigate'
import FooterBJ from './components/FooterBJ/FooterBJ'
import 'element-ui/lib/theme-default/index.css'
export default {
  name: 'app',
  components: {
    HeadBJ,
    Navigate,
    FooterBJ
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
