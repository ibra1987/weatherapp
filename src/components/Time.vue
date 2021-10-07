<template>
  <div class="time">
    {{ localtime }}
  </div>
</template>

<script>
export default {
  name: "Time",
  props: ["localtime"],
  setup() {},
};
</script>

<style scoped>
.time {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
