import axios from "axios";

let filterQuery = { apikey: "OJX32GcJR0Vu00DtMtPPnWNWMHK5VI9F" };

const getData = (query) => {
  let getDataPromise = new Promise((resolve, reject) => {
    filterQuery = Object.assign(filterQuery, query);
    axios
      .get("https://app.ticketmaster.com/discovery/v2/events.json", {
        params: filterQuery,
      })
      .then((res) => {
        if (res.data.page.totalElements > 0) {
          resolve(res.data._embedded.events);
        } else {
          reject("No data found");
        }
      })
      .catch((err) => {
        console.log(err);
        reject("Error fetching data");
      });
  });
  return getDataPromise;
};

export { getData };
