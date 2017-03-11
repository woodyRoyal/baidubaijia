<template>
  <div class="contend">
  	<div v-for='templ in 5'>
  		<Phase></Phase>
  	</div>
  </div>
</template>

<script>
import Phase from '../Phase/Phase'
export default {
  data () {
    return {
      msg: 'msg'
    }
  },
  components: {
    Phase
  }
}
</script>

<style lang="stylus">
</style>
