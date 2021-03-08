<template>
  <div>
    <h2>父组件</h2>
    子级传过来的数:<strong id="colorRed">{{ childNum }}</strong><br/>
    父组件v-model传子组件,子级操作完成返回父级:<strong id="colorRed">{{modelCount}}</strong>
    <children
      :count="count"
      :childFun1="childFun1"
      @handleChildEmit="handleChildEmit"
      @handleChildEmitCallback="handleChildEmitCallback"
      v-model="modelCount"
    ></children>
  </div>
</template>
<script>
import children from "./children.vue";
export default {
  data() {
    return {
      count: 0,
      childNum: 0,
      modelCount:0
    };
  },
  methods: {
    //   count++ 并每一次都传入子级
    childFun1() {
      this.count++;
    },
    // 监听子级传给父级数据的函数
    handleChildEmit(num) {
      this.childNum = num;
    },
    // 监听子级传给父级数据的函数，并调用子级回调函数
    handleChildEmitCallback(cb) {
      alert("父级收到了！！！");
      cb();
    },
  },
  components: { children },
};
</script>