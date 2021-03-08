<template>
  <div>
    <h2>
      子组件:<strong id="colorRed">{{ $attrs }}</strong>
    </h2>
    <children2 v-bind="$attrs" v-on="$listeners"></children2>
  </div>
</template>
<script>
/*
  注：$attrs 如果在props上挂载过了 就不会显示了
     $listeners 把事件传递给 下一级
*/
import children2 from "./children2.vue";
export default {
  components: { children2 },
};
</script>