<template>
  <div>
    <h2>子组件4:<strong id="colorRed">{{ count }}</strong></h2>
  </div>
</template>
<script>
import { eventBus } from "@/index.js";
export default {
  data() {
    return {
      count:0
    };
  },
  created () {
    eventBus.$on('eventBusTwo',(num)=>{
        this.count+=num
    })
  },
};
</script>