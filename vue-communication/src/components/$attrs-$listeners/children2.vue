<template>
  <div>
    <h2>
      子子组件:<strong id="colorRed">{{ $attrs }}</strong>
      <el-button @click="handleParentTwoState">通过$listeners调用第一层父级函数</el-button>
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    parentChildOneProps: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      transmitCount: 1,
    };
  },
  methods:{
    handleParentTwoState(){
      this.$emit('handleParentFun',this.transmitCount)
    }
  }
};
</script>