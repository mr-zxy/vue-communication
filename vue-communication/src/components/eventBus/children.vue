<template>
  <div>
    <h2>
      子组件1:<strong id="colorRed">{{ count }}</strong>
      <el-button @click="handleChildTwoProps">子组件1往子组件传值</el-button>
    </h2>
  </div>
</template>
<script>
import { eventBus } from '@/index.js'
export default {
  data() {
    return {
      count: 0,
    };
  },
  created () {
     eventBus.$on("eventBusOne", (num) => {
      this.count += num;
    });
  },
  methods:{
    handleChildTwoProps(){
      eventBus.$emit('eventBusTwo',1)
    }
  }
};
</script>