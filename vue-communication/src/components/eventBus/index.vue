<template>
  <div>
    <h2>父组件</h2>
    <div class="img">
      <h2>1.先定义eventBus对象</h2>
      <img src="@/assets/eventBus.jpg">
    </div>
    <children></children>
    <children2></children2>
  </div>
</template>
<script>
import children from "./children.vue";
import children2 from "./children2.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  components: { children,children2 },
};
</script>