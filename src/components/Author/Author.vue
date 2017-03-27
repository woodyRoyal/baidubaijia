<template>
  <div class="author">
    <div v-for='templ in 8'>
    	<AuthorMsg></AuthorMsg>
    </div>
  </div>
</template>

<script>
import AuthorMsg from '../AuthorMsg/AuthorMsg'
export default {
  name: 'head',
  data () {
    return {
      msg: 'Welcome to baijia'
    }
  },
  components: {
    AuthorMsg
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
