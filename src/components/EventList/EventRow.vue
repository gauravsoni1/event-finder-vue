<template>
  <div
    class="var-elevation--2 mb-1 row"
    @click="$emit('row-click', this.event)"
  >
    <var-image width="75px" fit="scale-down" :src="this.event.images[0].url" />
    <strong>{{ this.event.name }}</strong>
    <div>{{ this.event.dates.start.localDate }}</div>
  </div>
</template>

<script>
export default {
  emits: ["row-click"],
  props: ["event"],
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  padding: 10px;
}

.row :hover{
  cursor: pointer;
}

.row strong {
  margin-left: 10px;
  flex-grow: 1;
}
</style>