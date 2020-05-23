<template>
  <div class="day">
    <h1 class="day-title">
      {{ $route.params.date }}
    </h1>
    <ul class="day-list">
      <li v-for="item in items" :key="item.id" class="day-list-item" :class="{'open':item.open}">
        <div class="time"><h2> {{ item.id }} </h2></div>
        <div class="action">

          <p v-if="!item.open" @click="toggleOpen(item)"
            >{{ item.action }}
            <span v-if="item.action.length === 0">내용을 작성해주세요.</span>
          </p>
            <input v-if="item.open" class="input" type="text" v-model="item.action" @keyup.enter="updateItem(item)" placeholder="할 일을 작성해주세요">
        </div>
        <div class="note" v-if="item.open">
          <textarea class="textarea" v-model="item.note" @keyup.enter="updateItem(item)" placeholder="노트를 작성해 주세요"></textarea>
        </div>
        <div>
        <day-score @onUpdateScore="onUpdateScore" :item="item"></day-score>
        </div>
        <div class="buttons" v-if="item.open">
          <button class="save" @click="updateItem(item)">저장</button>
          <button class="cancel" @click="toggleOpen(item)">취소</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DayScore from './DayScore';
import axios from 'axios';
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  name: "Day",
  methods: {
    //Day.vue에서 가져온다.
    onUpdateScore(item,score){
      item.score=score;
      this.updateItem(item);
    },
    getItems(){
      console.log('get Items');
      //https://daily-report-df45f.firebaseio.com/items.json?orderBy="$key"&startAt="2018-09-11"&endAt="2018-09-11-22-44"
      //let url =  `https://daily-report-df45f.firebaseio.com/items.json?orderBy="$key"&startAt="2020-05-23"&endAt="2020-05-23-22-44"`
      //let url =  `https://daily-report-df45f.firebaseio.com/items.json?orderBy="$key"&startAt="2020-05-23"&endAt="2020-05-23-22-44"`
      let time = `"$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-44"`;
      let url = 'https://daily-report-df45f.firebaseio.com/items.json?orderBy=' + time ;

      axios.get(url).then((res) =>{
        this.items = this.displayItems(res.data);
        console.log(this.items);
      })
    },displayItems(result){
      let items = [];
      //let startTime = '08:00';
      let startTime = this.savedSettings.starttime;

      for (let i=0; i < 12; i++){
        let datetime = moment(this.$route.params.date + ' ' + startTime);

        let itemKey = `${this.$route.params.date}-${datetime.add(i*2,'hours').format('HH')}-${datetime.add(2,'hours').format('HH')}`;

        let item = {
          id: itemKey,
          action:'',
          note: '',
          open: false,
          score: undefined
        }
        Object.keys(result).map((key => {
          if(key === itemKey){
            item = result[key]
          }
        }))
        items.push(item);
      }

      return items;
    },updateItem(item){
      console.log('update');
      console.log(item);
      let url = `https://daily-report-df45f.firebaseio.com/items/${item.id}.json`
      axios.put(url,item).then((res) => {
        this.getItems();
        console.log(res);
      })
    },toggleOpen(item){
      item.open = !item.open;
    }
  },
  components:{
    DayScore
  },
  data() {
    return {
      items: [],
    };
  },
  props: {},
  created(){
    this.getItems();
  },
  watch:{
    '$route' (to, from){
      this.getItems();
      console.log(to,from);
    }
  },computed:{
    ...mapGetters(['savedSettings'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
