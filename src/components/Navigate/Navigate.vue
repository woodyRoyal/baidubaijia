<template>
  <div class="navigate">
    <router-link to='/jx'><span>{{navigate.selection}}</span></router-link>
    <router-link to='/zm'><span class="middle">{{navigate.contend}}</span></router-link>
    <router-link to='/zz'><span>{{navigate.author}}</span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navigate: {
        selection: '精选',
        contend: '争鸣',
        author: '作者'
      }
    }
  }
}
</script>

<style lang="stylus">
.navigate{
	height: 45px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	span{
		height: 40px;
    line-height: 40px;
    display: inline-block;
    width: 100%;
	}
	.middle{
		border-right: 1px solid #eee;
		border-left: 1px solid #eee;
	}
	a{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333;
		font-size: 20px;
		text-decoration: none;
		box-sizing: border-box;
	}
	.active{
		border-bottom: 1px solid red;
	}
}
</style>
