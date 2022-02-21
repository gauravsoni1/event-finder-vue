<template>
  <div class="var-elevation--2 mb-1">
    <var-row align="center">
      <var-col :span="5">
        <var-image
          width="75px"
          fit="scale-down"
          :src="this.event.images[0].url"
        />
      </var-col>
      <var-col :span="11"
        ><strong>{{ this.event.name }}</strong></var-col
      >
      <var-col :span="8">{{ this.event.dates.start.localDate }} </var-col>
    </var-row>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>