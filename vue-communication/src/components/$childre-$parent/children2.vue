<template>
  <div>
    <h2>子子组件</h2>
    <el-button @click="handleParentTwoState"
      >调用父级-父级组件函数--$parent.$parent</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   调用父级父级组件
    handleParentTwoState() {
      this.$parent.$parent.handleChildrenCaller();
    },
    //  提供给父级父级调用
    handleParentTwoCaller() {
      alert("父级调用了子级子级组件~~~");
    },
  },
};
</script>