<template>
  <div>
    <h2>
      父组件:<strong id="colorRed">{{ count }}</strong>
      <el-button @click="handleChildrenFun">通过ref调用子组件方法</el-button>
      <el-button @click="handleChildrenState">通过ref改变子组件数据</el-button>
      <el-button @click="handleChildrenTwoState">通过ref改变子子组件数据</el-button>
    </h2>
    <children ref="childrenOne"></children>
  </div>
</template>
<script>
import children from "./children.vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleChildrenFun() {
      this.$refs.childrenOne.handleParentCaller((childCount) => {
        this.count += childCount;
        alert('ref调用子级方法，子级回调方法改变父级数据。')
      });
    },
    handleChildrenState() {
      this.$refs.childrenOne.count++;
    },
    handleChildrenTwoState(){
        this.$refs.childrenOne.$refs.childrenTwo.handleParentTwoCaller()
    }
  },
  components: { children },
};
</script>