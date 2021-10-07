<template>
  <div class="header">
    <Time :localtime="localtime" />
    <span class="city">{{ city }}</span>
    <span class="country">{{ country }} </span>
  </div>
</template>
<script>
import Time from "./Time.vue";
export default {
  components: { Time },
  name: "Header",
  props: ["city", "country", "localtime"],
  setup() {},
};
</script>

<style scoped>
.header {
  height: 15vh;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 3em;
}
span {
  display: block;
}
.country {
  font-size: 1rem;
}
.city {
  font-size: 1.8rem;
}
</style>
