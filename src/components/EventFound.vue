<template>
  <var-space direction="column" size="large">
    <var-row>
      <div>
        <label>Filter</label>
        <var-checkbox-group
          v-model="sortAndFilter.statusFilter"
          @change="$emit('filter-updated', this.sortAndFilter)"
        >
          <var-checkbox id="TBA" checked-value="tba">TBA</var-checkbox>
          <var-checkbox id="TBD" checked-value="tbd">TBB</var-checkbox>
        </var-checkbox-group>
      </div>
    </var-row>
    <var-row>
      <label>Sort</label>
      <var-select
        placeholder="Select sort column"
        v-model="sortAndFilter.sortColumn"
        @change="$emit('filter-updated', this.sortAndFilter)"
      >
        <var-option label="Name" value="name" />
        <var-option label="Date" value="date" />
        <var-option label="Relevance" value="relevance" />
      </var-select>
      <var-select
        placeholder="Ascending / Decending"
        v-model="sortAndFilter.sortOrder"
        @change="$emit('filter-updated', this.sortAndFilter)"
      >
        <var-option label="Ascending" value="asc" />
        <var-option label="Decending" value="desc" />
      </var-select>
    </var-row>
    <var-row>
      <var-col :span="16"> <h3>Search Result</h3> </var-col>
    </var-row>
    <event-row
      v-for="event in events"
      :key="event.id"
      :event="event"
      @row-click="rowClicked"
    />
  </var-space>
</template>

<script>
import EventRow from "./EventList/EventRow.vue";
// import { getData } from "../common/fetchData";

export default {
  updated() {
    console.log("Component Updated", this.filteredEvents);
  },
  data() {
    return {
      sortAndFilter: {
        sortColumn: "relevance",
        sortOrder: "desc",
        statusFilter: [],
      },
      filteredEvents: [...this.events],
    };
  },
  props: ["events"],
  emits: ["filter-updated"],
  methods: {
    rowClicked(eventSelected) {
      console.log(eventSelected);
      this.$router.push(`/event-details/${eventSelected.id}`);
    },
  },
  components: {
    EventRow,
  },
};
</script>