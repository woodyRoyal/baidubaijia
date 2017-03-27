<template>
  <div class="phase">
    <div class="content">
    	<span class="time">{{phase.time}}</span>
	    <h4 class="title">{{phase.title}}</h4>
	    <p class="text">{{phase.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      phase: {
        time: '607期',
        title: '三星手机是否会一蹶不振',
        text: '三星终于公布手机爆炸原因：电池设计与制造过程中存在问题，此前Note 7事件让其...'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.phase{
	color: #fff;
	height: 150px;
	margin-bottom: 5px;
  background: url(./sanxing.jpg) no-repeat;
  background-size: 100%;
  text-align: center;
  position: relative;
  .content{
  	height: 150px;
  	width: 100%;
  	background: rgba(0,0,0,0.5);
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: column;
  }
  .time{
  	color: #eee;
  	background-color: #333;
  	padding: 3px 6px;
  	position: absolute;
  	top: 0;
  	left: 0;
  }
  .title{
  	font-size: 20px;
  	font-weight: bold;
  }
  .text{
  	color: #eee;
  	margin: 15px;
  }
}
</style>
