<template>
  <div class="author_msg">
    <div class="msg">
    	<div class="img">
    		<img src="./author_msg.jpg"/>
		    <div>
		    	<p>{{authorMsg.author}}</p>
		    	<p>{{authorMsg.job}}</p>
		    </div>
    	</div>
	    <span class="focus">{{authorMsg.focus}}</span>
    </div>
    <div class="pages">
    	<span>{{authorMsg.pageNum}}</span>
    	<span>{{authorMsg.lookNum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      authorMsg: {
        author: '冬青',
        job: '媒体人',
        focus: '加关注',
        pageNum: '文章数： 16',
        lookNum: '阅读数： 117,428'
      }
    }
  }
}
</script>

<style lang="stylus">
.author_msg{
	height: 80px;
	margin-bottom: 20px;
	.msg{
		height: 60px;
		background: #eee;
		display: flex;
			justify-content: space-between;
			align-items: center;
		.img{
			display: flex;
			justify-content: space-between;
			align-items: center;
			img{
				height: 60px;
				margin-right: 5px;
			}
		}
		.focus{
			background: #f00;
			color: #fff;
			padding: 6px 10px;
			border-radius: 15px;
			margin-right: 10px;
		}
	}
	.pages{
		height: 20px;
		padding: 10px 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
