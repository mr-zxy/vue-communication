<template>
  <div>
    <h2>子组件:<strong id="colorRed">{{count}}</strong></h2>
    <children2 ref="childrenTwo"></children2>
  </div>
</template>
<script>
import children2 from './children2.vue'
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    //   提供给父组件调用
    handleParentCaller(cb) {
      this.count++;
      cb(1)
    },
  },
  components: {children2}
};
</script>