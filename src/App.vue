<template>
  <header-bar @click="headerClicked" title="My Event Finder App"></header-bar>
  <router-view> </router-view>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
  methods: {
    headerClicked() {
      this.$router.push("/event-search");
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.m1 {
  margin: 10px;
}
.mb-1 {
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
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
