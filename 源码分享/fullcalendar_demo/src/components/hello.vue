<template>
  <div class="M_container">
    <FullCalendar ref="myCalendar" :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export default {
  name: "index",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        // 引入的插件，比如fullcalendar/daygrid，fullcalendar/timegrid引入后才可显示月，周，日
        plugins: [
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin,
          resourceTimelinePlugin
        ],
        initialView: "resourceTimeline", // 默认为那个视图（月：dayGridMonth，周：timeGridWeek，日：timeGridDay）
        headerToolbar: {
          left: "today prev,next",
          center: "title",
          right: "resourceTimelineDay,resourceTimelineTenDay"
        },
        views: {
          resourceTimelineDay: {
            buttonText: ":15 slots",
            slotDuration: "2:00"
          },
          resourceTimelineTenDay: {
            type: "resourceTimeline",
            duration: { days: 7 },
            buttonText: "1 Hour Slots (7 Days)"
          }
        },
        editable: true,
        scrollTime: "08:00",
        resources:
          "https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors",
        events:
          "https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline",
        firstDay: 1, // 设置一周中显示的第一天是哪天，周日是0，周一是1，类推
        locale: "zh-cn", // 切换语言，当前为中文
        eventColor: "#3BB2E3", // 全部日历日程背景色
        themeSystem: "bootstrap", // 主题色(本地测试未能生效)
        // initialDate: moment().format('YYYY-MM-DD'), // 自定义设置背景颜色时一定要初始化日期时间
        timeGridEventMinHeight: "10", // 设置事件的最小高度
        height: 500,
        aspectRatio: 1, // 设置日历单元格宽度与高度的比例。
        // displayEventTime: false, // 是否显示时间
        allDaySlot: false, // 周，日视图时，all-day 不显示
        eventLimit: true, // 设置月日程，与all-day slot的最大显示数量，超过的通过弹窗显示

        buttonText: {
          // today: '今天',
          // month: '月',
          // week: '周',
          // day: '日'
        },
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false // 设置时间为24小时
        },
        eventLimitNum: {
          // 事件显示数量限制(本地测试未能生效)
          dayGrid: {
            eventLimit: 5
          },
          timeGrid: {
            eventLimit: 2 // adjust to 6 only for timeGridWeek/timeGridDay
          }
        },
        eventClick: this.handleEventClick
      },
      workingTicketVisible: false //工作表票详情页面
    };
  },
  mounted() {},
  methods: {
    /**
     * 点击日历日程事件
     *
     * info: 事件信息
     * event是日程（事件）对象
     * jsEvent是个javascript事件
     * view是当前视图对象。
     */
    handleEventClick(info) {
      console.log(info);
    }
  }
};
</script>

<style>
.fc-license-message {
  display: none !important;
}
</style>
