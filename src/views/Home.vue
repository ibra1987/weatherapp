<template>
  <div class="home">
    <Header :city="city" :country="country" :localtime="localtime" />
    <Current :celecius="celecius" :text="text" :icon="icon" />
    <Form @formSubmit="searchData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Current from "../components/Current.vue";
import Form from "../components/form.vue";
import { ref } from "vue";
export default {
  components: { Header, Current, Form },
  name: "Home",

  setup() {
    const searchedCity = ref("casablanca");
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.VUE_APP_KEY}`;
    const city = ref("");
    const country = ref("");
    const weather = ref({});
    const localtime = ref("");
    const celecius = ref(0);
    const text = ref("");
    const icon = ref("");

    const searchData = async (searchParams) => {
      searchedCity.value = searchParams.city;
      await fetchData();
    };

    const fetchData = async () => {
      const data = await fetch(`${url}&q=${searchedCity.value}`);

      weather.value = await data.json();

      city.value = weather.value.location.name;
      country.value = weather.value.location.country;
      localtime.value = weather.value.location.localtime;
      celecius.value = weather.value.current.temp_c;
      text.value = weather.value.current.condition.text;
      icon.value = weather.value.current.condition.icon;

      return {
        city,
        country,
        weather,
        localtime,
        celecius,
        text,
        icon,
      };
    };

    fetchData();
    return {
      country,
      city,
      weather,
      fetchData,
      url,
      localtime,
      celecius,
      text,
      icon,
      searchData,
      searchedCity,
    };
  },
};
</script>
<style scoped>
.home {
  width: 30vw;
  height: 80vh;
  margin: auto;
  background-image: linear-gradient(
    to left,
    rgba(31, 132, 141, 0.8),
    rgba(41, 198, 212, 0.5)
  );
  padding: 2em;
  border-radius: 10px;
}
@media screen and (max-width: 1200px) {
  .home {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.1em;
  }
}
</style>
