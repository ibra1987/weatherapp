<template>
  <form @submit.prevent="sendData">
    <input type="text" v-model="city" placeholder="Enter a city name" />
    <button type="submit">Search</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Form",
  setup(props, context) {
    let city = ref("");
    let error = ref("");

    function sendData() {
      if (!city.value) {
        return (error.value = " pleasee fill in all fields");
      }
      const searchParams = {
        city: city.value,
      };

      context.emit("formSubmit", searchParams);
    }
    return { city, sendData, error };
  },
};
</script>

<style scoped>
form {
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin: 1em auto;
}

@media screen and (max-width: 1200px) {
  form {
    flex-direction: column;
    width: 90%;
  }
}

input {
  display: block;
  width: 55%;
  height: 3vh;
  padding: 0.1em 0.6em;
  border: none;
  margin: auto;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;
}

@media screen and (max-width: 1200px) {
  input {
    margin: 0.2em auto;
    width: 99%;

    padding-left: 1vw;
  }
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 3vw;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: rgb(70, 77, 77);
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: rgb(83, 88, 88);
}

@media screen and (max-width: 1200px) {
  button {
    margin: 0.2em auto;
    width: 100%;
    padding: 0.7em 3vw;
    padding-left: 1vw;
  }
}
</style>
