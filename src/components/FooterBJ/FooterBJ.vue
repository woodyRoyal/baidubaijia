<template>
  <div class="footer">
    <img class="footer_img" src="../HeadBJ/logo_baijia.png"/>
    <div class="footer_msg">
    	<p>{{footerMsg.linkMe}}</p>
    	<p>{{footerMsg.origin}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerMsg: {
        linkMe: '联系我们：Baijia@baidu.com',
        origin: '百度新闻独家出品'
      }
    }
  }
}
</script>

<style lang="stylus">
.footer{
	color: #fff;
	height: 120px;
	background-color:#262627;
	display: flex;
	justify-content: space-around;
	align-items: center;
	.footer_img{
		height: 40px;
	}
	.footer_msg{
		border-left: 1px solid #eee;
		padding-left: 20px;
	}
	p{
		margin: 5px;
	}
}
</style>
