<template>
  <div class="day">
    <h1 class="day-title">
      {{ $route.paramsdate }}
    </h1>
    <h1 class="day-list">
      <li v-for="item in items" :key="item.id" class="day-list-item">
        <div class="time">
          <h2>
            {{item.id}}
          </h2>
        </div>
        <div class="action">
            <input class="input" type="text" v-model="item.action" placeholder="한 일을 작성해주세요">
        </div>
        <div class="note">
          <textarea class="textarea" v-model="item.note" placeholder="노트를 작성해 주세요"></textarea>
        </div>
        <day-score @onUpdateScore="onUpdateScore" :item="item"></day-score>
      </li>
    </h1>
  </div>
</template>

<script>
import DayScore from './DayScore'
export default {
  name: "Day",
  methods: {
    onUpdateScore(item,score){
      item.score=score;
    }
  },
  components:{
    DayScore
  },
  data() {
    return {
      items: [
        {
          action: "",
          id: "2018-04-01-08-10",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-08-11",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-08-12",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-08-10",
          note: "",
          open: false,
          score: undefined,
        }
      ],
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
