<template>
  <div>
    <h2>
      子组件2:<strong id="colorRed">{{ count }}</strong>
      <el-button @click="handleParentOneProps">子组件2往子组件1传值</el-button>
    </h2>
    <children3></children3>
  </div>
</template>
<script>
import { eventBus } from "@/index.js";
import children3 from "./children3.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleParentOneProps() {
      eventBus.$emit("eventBusOne", 1);
    },
  },
  created() {
    eventBus.$on("eventBusTwo", (num) => {
      this.count += num;
    });
  },
  components: { children3 },
};
</script>