<template>
  <div class="calendar">
    <!-- <full-calendar :config="config" :events="events"/> -->
    <full-calendar default-view="dayGridMonth"
    :plugins="calendarPlugins" :config="config" @dateClick="handleDateClick"></full-calendar>

    <!-- :weekends="true" :events="events"  -->
  </div>

</template>

<script>
//import { FullCalendar } from 'vue-full-calendar'
//import moment from 'moment'
import FullCalendar from '@fullcalendar/vue';
import 'fullcalendar/dist/fullcalendar.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { mapGetters } from 'vuex'


export default {
  name: 'Calendar',
  computed:{
    ...mapGetters(['savedSettings'])
  },
  methods:{
    handleDateClick(arg){

      let date = new Date(arg.date),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
      let url = '/day/'+[date.getFullYear(), mnth, day].join("-");
      //let url = `/day/${(arg.date.format('YYYY-MM-DD'))}`;
      console.log(url);
      this.$router.push(url);
    },
    applySettings(){
      this.config['locale'] = this.savedSettings.lang;
    }
  },
  components:{
    FullCalendar
  },
    data() {
    return {
      events: [

      ],
      calendarPlugins: [dayGridPlugin,
      timeGridPlugin, listPlugin , interactionPlugin],
      config: {
        defaultView: "month",
        header: {
          left: "prev",
          center: "title",
          right: "next"
        },
        height: 500
      }
    };
  },
  created(){
      this.applySettings()
  }
}
/*   props: {
    msg: String
  } */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped>
</style>
-->
<style lang='scss'>

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';

</style>