<template>
  <div>
    <h2>子组件3:<strong id="colorRed">{{ count }}</strong></h2>
    <children4></children4>
  </div>
</template>
<script>
import { eventBus } from "@/index.js";
import children4 from "./children4.vue";
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
  components:{children4}
};
</script>