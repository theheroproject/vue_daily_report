<template>
  <div class="score">
    <button v-for="button in buttons" @click="updatescore(button.score)" :key="button.score" :class="{'active':button.score === item.score}">{{button.label}}</button>
  </div>
</template>

<script>

export default {
  name: 'DayScore',
  methods:{
    updatescore(score){
      console.log(score);
      console.log(this.item);
      //부모 컴포넌트인 Day로 전송한다.
      this.$emit('onUpdateScore',this.item,score);
    }
  },
  cmputed:{},
  data(){
    return{
     buttons: [
       {label:'GOOD',score:3},
       {label:'SOSO',score:2},
       {label:'BAD',score:1},
     ]
    }
  }
  ,
  props: [
    'item'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
