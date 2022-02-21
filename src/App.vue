<template>
  <event-search-page />
</template>

<script>
import EventSearchPage from "./components/EventSearchPage.vue";

export default {
  name: "App",
  components: {
    EventSearchPage,
  },
};
</script>

<style>
body {
  margin: 0;
}
.mb-1{
  margin-bottom: 10px;
}
.mb-2 {
  margin-bottom: 20px;
}
.mt-2 {
  margin-top: 20px;
}
.mr-2 {
  margin-right: 20px;
}
.p1 {
  padding: 10px;
}
</style>
