<template>
  <div>
    <h2>父组件:<strong id="colorRed">{{ count }}</strong></h2>
    <children
      :parentName="parentName"
      :parentChildOneProps="parentChildOneProps"
      @handleParentFun="handleParentFun"
    ></children>
  </div>
</template>
<script>
import children from "./children.vue";
export default {
  data() {
    return {
      count: 0,
      parentName:'我是父组件',
      parentChildOneProps:'一级子组件没使用了Props,可以显示出来;二级子组件使用了Props,显示不出来。'
    };
  },
  methods:{
    handleParentFun(num){
      this.count+=num
    },
  },
  components: { children },
};
</script>