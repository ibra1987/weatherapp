<template>
  <div class="current">
    <div span class="temperature">
      <span class="icon">
        <span>
          {{ text }}
        </span>
        <img :src="icon" />
      </span>
      Temperature:<span>{{ celecius }}°C </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Current",
  props: ["celecius", "text", "icon"],
};
</script>

<style scoped>
.current {
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: rgb(70, 77, 77);
  padding: 1vw;
}
@media screen and (max-width: 1200px) {
  .current {
    width: 90%;
    padding: 2em 0;
  }
}
.temperature {
  color: rgb(202, 205, 212);
  font-weight: 600;
  font-size: 1.6em;
}
.temperature span {
  font-size: 1.8rem;
  margin: 0.8em;
}
.icon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.icon span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
}
</style>
