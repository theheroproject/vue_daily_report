<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p> age: {{ age }}</p>
    <p v-html="article"> {{ article }}</p>
    <p>{{ seen ? 'yes':'no'}}</p>
    <p v-if="seen"> 이제 나를 볼 수 있어요. </p>
    <p v-else-if="!seen"> 이제 나를 볼 수 없어요. !!</p>
    <p v-else> 이제 나를 볼 수 없어요. </p>
    <p v-show="seen"> 보여야 하징 </p>
    <p v-show="!seen"> 이제는 안보이징 </p>
    <button @click="updateScore(1)">클릭하세요</button>
    <input type="text" placeholder="입력하세요." v-model="msg">
    <h1>{{msg}}</h1>
    <h1>score: {{score}} </h1>
    <input type="checkbox" v-model="seen">
    <input type="text" @keyup.enter="keyup">
    <input type="radio" v-model="age" value="30">
    <input type="radio" v-model="age" value="20">
    <input type="radio" v-model="age" value="10">
    <p>{{ age }}</p>
    <select v-model="age">
      <option value="30">{{ age }}</option>
      <option value="20">{{ age }}</option>
      <option value="10">{{ age }}</option>
    </select>
    <ul>
      <li v-for="{key,val,index} in person" :key="index"> 
       {{index}} - {{key}} - {{val}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    updateScore(score){
      this.score += score;
      console.log("score up");
    },
    keyup(){
      console.log("key up");
    }
  },
  data(){
    return{
      score: 0,
      msg : '반갑습니다.',
      author: 'bob',
      age: 30,
      article: `
      <strong>Hello</strong> world!`,
      seen: true,
      items:[
        {name: 'red',age:15},
        {name: 'blue',age:16},
        {name: 'green',age:17}
      ],
      person:{
        name: 'bob',
        age: 25,
        location: 'seoul'
      }
    }
  }

/*   props: {
    msg: String
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
