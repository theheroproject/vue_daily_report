<template>
  <div class="intro">
    <div class="intro-inner">
      <h1>Daily<br>Report</h1>
      <router-link 
        class="button" :to="todayUrl"
        >
        START
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Intro',
  methods:{
  },
  computed:{
    todayUrl(){
      let todayUrl = moment(new Date()).format('YYYY-MM-DD');
      console.log(todayUrl)
      return `/day/${todayUrl}`;
      //return '/day/2018-01-01';
    } 
  },
  data(){
    return{
     
    }
  }
  ,
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>