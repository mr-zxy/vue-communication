<template>
  <div>
    <h2>父组件:<strong id="colorRed"></strong>
     <el-button @click="getCurrentDate()">获取当前时间</el-button>
    </h2>
    <children></children>
  </div>
</template>
<script>
import children from "./children.vue";
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  provide() {
    return {
      currentDate: this,
    };
  },
  methods: {
    getCurrentDate() {
      this.date = new Date();
    },
  },
  mounted(){
    setInterval(()=>{
      this.getCurrentDate()
    },1000)  
  },
  components: { children },
};
</script>