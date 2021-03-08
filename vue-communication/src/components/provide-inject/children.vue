<template>
  <div>
    <h2>
      子组件:<strong id="colorRed">{{ resetCurrentDate }}</strong>
    </h2>
    <children2></children2>
  </div>
</template>
<script>
import children2 from "./children2.vue";
export default {
  inject: {
    currentDate: {
      default: () => ({}),
    },
  },
  provide(){
      return{
          count:'我是子组件1过来的'
      }
  },
  computed: {
    resetCurrentDate() {
      let date = new Date(this.currentDate.date);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${year}年${month}月${day}日${hours}时:${minutes}分:${seconds}秒`;
    },
  },
  components:{children2}
};
</script>