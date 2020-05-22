<template>
  <div class="day">
    <h1 class="day-title">
      {{ $route.params.date }}
    </h1>
    <ul class="day-list">
      <li v-for="item in items" :key="item.id" class="day-list-item">
        <div class="time"><h2> {{ item.id }} </h2></div>
        <div class="action">
            <input class="input" type="text" v-model="item.action" placeholder="한 일을 작성해주세요">
        </div>
        <div class="note">
          <textarea class="textarea" v-model="item.note" placeholder="노트를 작성해 주세요"></textarea>
        </div>
        <div>
        <!-- props로item을 준다. -->
        <day-score @onUpdateScore="onUpdateScore" :item="item"></day-score>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DayScore from './DayScore'
export default {
  name: "Day",
  methods: {
    //Day.vue에서 가져온다.
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
          id: "2018-04-01-10-12",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-12-14",
          note: "",
          open: false,
          score: undefined,
        },
        {
          action: "",
          id: "2018-04-01-14-16",
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
