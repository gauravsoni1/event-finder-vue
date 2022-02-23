<template>
  <var-loading class="mt-2" color="#3a7afe" type="wave" v-if="isLoading" />
  <div v-else class="var-elevation--2 m1">
    <var-image fit="contain" height="250px" :src="this.image" />
    <div class="card-body">
      <div class="p1">
        <div class="card-header-1">
          <h3>{{ this.eventName }}</h3>
          <span>12-feb-2022 (10:30PM)</span>
        </div>
        <div>
          <strong>Location: </strong><span>{{ this.venue }}</span>
        </div>
      </div>
      <hr />
      <div class="card-description p1">
        {{ this.info }}
      </div>
      <hr />
      <div class="card-footer p1">
        <span>
          <strong>Type: </strong>
          {{ this.classifications.genre }} /
          {{ this.classifications.segment }}
        </span>
        <span
          ><strong>Price -</strong> {{ this.price.min }}
          {{ this.price.currency }} to
          {{ this.price.max }}
          {{ this.price.currency }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getEventDetails } from "../common/fetchData";

export default {
  data() {
    return {
      isLoading: false,
      eventName: "",
      classifications: { segment: "", genre: "" },
      info: "",
      image: "",
      dateTime: "",
      price: { min: "", max: "", currency: "" },
      venue: "",
    };
  },
  props: ["eventId"],
  async mounted() {
    try {
      this.isLoading = true;
      let eventData = await getEventDetails(this.eventId);
      this.isLoading = false;

      let mockObj = {
        name: "N/A",
        info: "N/A",
        images: [{ url: "" }],
        priceRanges: [{ min: "", max: "", currency: "" }],
        classifications: [{ segment: { name: "" }, genre: { name: "" } }],
        _embedded: { venues: [{ name: "" }] },
      };
      let finalObj = Object.assign(mockObj, eventData);
      //Assign to state
      this.eventName = finalObj.name;
      this.info = finalObj.info ?? "Not found";
      this.image = finalObj.images[0].url;
      this.price = {
        min: finalObj.priceRanges[0].min,
        max: finalObj.priceRanges[0].max,
        currency: finalObj?.priceRanges[0]?.currency,
      };
      this.classifications = {
        segment: finalObj.classifications[0].segment.name,
        genre: finalObj.classifications[0].genre.name,
      };
      this.venue = finalObj._embedded.venues[0].name;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>


<style scoped>
.card-header-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-description {
  text-align: justify;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}
</style>

