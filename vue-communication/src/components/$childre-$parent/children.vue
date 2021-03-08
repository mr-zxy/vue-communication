<template>
  <div>
    <h2>子组件</h2>
    <el-button @click="handleParentFun">子组件调用父级函数</el-button>
    <el-button @click="handleParentState">子组件直接操作父级data数据</el-button>
    <children2></children2>
  </div>
</template>
<script>
import children2 from './children2.vue'
export default {
  data() {
    return {};
  },
  methods: {
    //  子级$parent调用父级函数
    handleParentFun() {
      this.$parent.handleChildrenCaller()  
    },
    //  子级$parent 直接操作父级data数据
    handleParentState(){
      this.$parent.count++  
    },
    // 提供给父组件调用
    handleParentCaller(){
        alert('父组件$children调用子组件')
    }
  },
  components:{children2}
};
</script>