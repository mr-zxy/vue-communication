<template>
  <div>
    <h2>子子组件:<strong id="colorRed">{{count}}</strong></h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    //   提供给父父组件调用
    handleParentTwoCaller() {
      this.count++;
    },
  },
};
</script>