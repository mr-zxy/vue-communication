<template>
  <div>
    <h2>父组件</h2>
    子级$parent调用父组件改变父组件Count:<strong id="colorRed">{{ count }}</strong>
    <el-button @click="handleChildrenFun">调用子级函数</el-button>
    <el-button @click="handleChildrenTwoFun">调用子子级函数</el-button>
    <children></children>
  </div>
</template>
<script>
import children from "./children.vue";
/**
 * $parent 可以调用父父父...级数据
 * $children 只可以调用下一层子级函数，不能调用多个子级，原因：在vue渲染中,
 * 父组件执行完beforeMount时，会渲染第一层子组件所以只能获取到第一层子级方法
 *
 *
 */
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    //   调用子级函数
    handleChildrenFun() {
      this.$children[2].handleParentCaller();
    },
     //  调用子子级函数
    handleChildrenTwoFun(){
     this.$children[2].$children[2].handleParentTwoCaller();
    },
    //   提供给子组件调用
    handleChildrenCaller() {
      this.count++;
    },
  },
  components: { children },
};
</script>