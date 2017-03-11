<template>
  <div class="header">
    <a class="logo_box" href="http://baijia.baidu.com/">
      <img class="logo" src="./logo_baijia.png"/>
    </a>
  	<div class="right">
  	  <a class="home_baidu" href="http://www.baidu.com/">
  	  	<img class="logo" src="./logo_baidu.png"/>
  	  </a>
  	  <a href="#">
  	  	<img class="logo" src="./icon_search.png"/>
  	  </a>
  	  <a href="javascript:void(0)">
  	  	<img class="logo menu" @click='showMenu' src="./icon_menu.png"/>
  	  </a>
  	</div>
  	<AsideBJ></AsideBJ>
  </div>
</template>

<script>
import $ from 'jquery'
import AsideBJ from '../AsideBJ/AsideBJ'
export default {
  name: 'head',
  data () {
    return {
      msg: 'Welcome to baijia'
    }
  },
  components: {
    AsideBJ
  },
  methods: {
    showMenu () {
      $('.aside').addClass('hide')
    }
  }
}
</script>

<style lang="stylus">
.header{
	height: 60px;
	padding: 0 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #262627;
  .logo{
  	height: 40px;
  }
	a{
		color: #fff;
	}
}
</style>
