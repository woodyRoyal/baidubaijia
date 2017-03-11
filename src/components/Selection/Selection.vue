<template>
  <div class="selection">
    <div class="banner">
      <div class="box">
        <a name="1" href="#"><img src="./city.jpg"/></a>
        <a name="2" href="#"><img src="./person.jpg"/></a>
        <a name="3" href="#"><img src="./shop.jpg"/></a>
        <a name="4" href="#"><img src="./shunfeng.jpg"/></a>
      </div>
      <ul class="num_box">
      	<li class="num" @click='clickLi' v-for='num in 4' :name='num'></li>
      </ul>
    </div>
	  <div v-for='templ in 5'>
		  <ArticleBJ></ArticleBJ>
	  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import ArticleBJ from '../ArticleBJ/ArticleBJ'

Vue.use(ElementUI)
export default {
  name: 'head',
  data () {
    return {
      items: [{
        text: '任正非内部讲话： 自爆华为手机五大危机'
      }, {
        text: '中国城市空气质量报告'
      }, {
        text: '深扒“快递首富”王卫的“金融帝国”'
      }, {
        text: '遭奥斯卡集体怒怼 川普：拒绝你们蹭我热度'
      }]
    }
  },
  methods: {
    clickLi () {
      $('.num_box').on('click', function (e) {
        var num = $(e.target).attr('name')
        $('.num_box li[name=' + num + ']').addClass('active').siblings().removeClass('active')
        $('.box a[name=' + num + ']').show().siblings().hide()
      })
    }
  },
  components: {
    ArticleBJ
  }
}
</script>

<style lang="stylus">
.banner{
  height: 250px;
  overflow: hidden;
  position: relative;
  .box a:not(:first-child){
    display: none;
  }
  img{
    height: 250px;
    width: 100%;
  }
  .num_box{
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 999;
    .num{
      height: 20px;
      width: 20px;
      margin: 10px;
      border-radius: 50%;
      background: #fff;
    }
    li.active{
      background: #A2A2A2;
    }
  }
}
</style>
