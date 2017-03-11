<template>
  <div class="aside" id="aside">
  	<i class="el-icon-close" @click='closeBtn'></i>
  	<div class="login">{{loginStatus}}</div>
    <ul>
    	<li v-for='message in messages'><a href="#">{{message.text}}</a></li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      loginStatus: '已登录',
      messages: [{
        url: '#',
        text: '巨头'
      }, {
        url: '#',
        text: '人物'
      }, {
        url: '#',
        text: '电商'
      }, {
        url: '#',
        text: '创投'
      }, {
        url: '#',
        text: '游戏'
      }]
    }
  },
  methods: {
    closeBtn: function () {
      $('.aside').removeClass('hide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
.hide{
	transform: translateX(0) !important;
}
.aside{
	width: 150px;
	height: 100%;
	color: #fff;
	background: #3C3C3D;
	font-size: 18px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9999;
	transition: all 0.5s;
	transform: translateX(150%);
	.el-icon-close{
		position: absolute;
		left: -25px;
		top: 20px;
		cursor: pointer;
	}
	li{
		height: 45px;
	}
	.login{
		height: 90px;
		line-height: 90px;
	}
}
</style>
