<template>
  <div class="article">
    <img src="./img_1.jpg"/>
    <a class="content" v-for='article in articles'>
	    <h4>{{article.title}}</h4>
      <p><span>{{article.author}}</span>|<span>{{article.time}}</span></p>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [{
        title: '实体店不好干 不能组团赖马云',
        author: '齐俊杰',
        time: '08:12'
      }],
      src: './img_1.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
.article{
	height: 80px;
	padding: 10px;
	display: flex;
	justify-content: flex-start;
	border-bottom: 1px solid #eee;
	img{
		height: 100%;
		max-width: 120px;
	}
	.content{
		color: #333;
		margin-left: 8px;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h4{
			font-weight: bold;
			font-size: 18px;
		}
	}
}
</style>
