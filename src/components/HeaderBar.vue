<template>
  <var-app-bar title="title" hidden="false" class="headerBar" />
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
};
</script>

<style scoped>
.headerBar :hover {
  cursor: pointer;
}
</style>