<template>
  <var-space direction="column" size="large">
    <var-form ref="form" :disabled="disabled" :readonly="readonly">
      <var-row>
        <var-col :span="24">
          <var-select placeholder="Select Country" v-model="selectedCountry">
            <var-option
              :key="key"
              v-for="(code, key) in countryCodeList"
              :label="code"
              :value="key"
              @click="onSelected()"
            ></var-option>
            <!-- <var-option label="Sleep" /> -->
          </var-select>
        </var-col>
      </var-row>

      <var-input placeholder="Enter Event Name" v-model="eventName" />
      <div class="mt-2">
        <label class="mr-2">Start Date</label>
        <input type="date" v-model="startDate" />
      </div>
      <div class="mt-2">
        <label class="mr-2">End Date</label>
        <input type="date" v-model="endDate" />
      </div>
      <var-loading class="mt-2" color="#3a7afe" type="wave" v-if="isLoading" />
      <var-button
        v-else
        class="mt-2"
        block
        type="primary"
        @click.prevent="
          $emit('form-submit', {
            selectedCountry: this.selectedCountry,
            eventName: this.eventName,
            startDate: formatDate(this.startDate),
            endDate: formatDate(this.endDate),
          })
        "
      >
        Search Events
      </var-button>
    </var-form>
  </var-space>
</template>

<script>
import countryCodes from "../assets/countryCodes.json";
import moment from "moment";

export default {
  props: ['isLoading'],
  emits: ["search-event"],
  data() {
    return {
      countryCodeList: countryCodes,
      selectedCountry: "US",
      eventName: "",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
    };
  },
  methods: {
    onSelected() {
      console.log(this.selectedCountry);
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    },
  },
};
</script>
