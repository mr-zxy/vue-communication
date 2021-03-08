<template>
  <div>
    <h2>
      子子组件:<strong id="colorRed">{{ currentDate.date }}-----{{count}}</strong>
    </h2>
  </div>
</template>
<script>
export default {
  inject: {
    currentDate: {
      default: () => ({}),
    },
    count:{
        default:0,
    },
  },
};
</script>