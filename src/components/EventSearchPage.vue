<template>
  <header-bar title="My Event Finder"></header-bar>
  <div class="container">
    <div class="var-elevation--2 p1 mb-2">
      <event-search @form-submit="searchEvents"></event-search>
    </div>
    <div class="var-elevation--2 p1">
      <event-found
        @filter-updated="filterUpdated"
        :events="eventList"
      ></event-found>
    </div>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
import EventSearch from "./EventSearch.vue";
import EventFound from "./EventFound.vue";
import { getData } from "../common/fetchData";

export default {
  data() {
    return {
      eventList: [],
    };
  },
  components: {
    HeaderBar,
    EventSearch,
    EventFound,
  },
  methods: {
    async searchEvents(searchData) {
      try {
        const data = await getData({
          countryCode: searchData.selectedCountry,
          keyword: searchData.eventName,
        });
        console.log(data);
        this.eventList = data;
      } catch (e) {
        this.eventList = [];
        console.log(e);
      }
    },
    async filterUpdated(filter) {
      try {
        const data = await getData({
          sort: `${filter.sortColumn},${filter.sortOrder}`,
          includeTBD: filter.statusFilter.indexOf("tbd") === -1 ? "no" : "yes",
          includeTBA: filter.statusFilter.indexOf("tba") === -1 ? "no" : "yes",
        });
        console.log("filteredData", data);
        this.eventList = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>