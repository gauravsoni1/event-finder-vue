<template>
  <div class="container">
    <div class="var-elevation--2 p1 m1 eventSearchContainer">
      <h1>Search event</h1>
      <event-search
        @form-submit="searchEvents"
        :isLoading="isLoading"
      ></event-search>
    </div>

    <div class="var-elevation--2 p1 m1 eventFoundContainer">
      <h1>EventFound</h1>
      <event-found
        @filter-updated="filterUpdated"
        :events="eventList"
      ></event-found>
    </div>
  </div>
</template>

<script>
import EventSearch from "./EventSearch.vue";
import EventFound from "./EventFound.vue";
import { getData } from "../common/fetchData";

export default {
  data() {
    return {
      isLoading: false,
      eventList: [],
    };
  },
  components: {
    EventSearch,
    EventFound,
  },
  methods: {
    async searchEvents(searchData) {
      console.log(searchData);
      try {
        this.isLoading = true;
        const data = await getData({
          countryCode: searchData.selectedCountry,
          keyword: searchData.eventName,
          startDateTime: searchData.startDate,
          endDateTime: searchData.endDate,
        });
        this.isLoading = false;
        this.eventList = data;
      } catch (e) {
        this.eventList = [];
        console.log(e);
        this.isLoading = false;
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
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

.eventSearchContainer {
  flex: 0 1 330px;
}

.eventFoundContainer {
  flex: 1 0 385px;
}

.container {
  margin: 10px;
  display: flex;
  flex: 1;
}

.main {
  background: lightblue;
}

.search {
  /* background: yellow; */
}

.filter {
  /* background: green; */
}
</style>