import axios from "axios";

const Api = axios.create({
  baseURL: "http://149.129.232.88/rfid_inventory_new_api/public/api/v1",
});

export default Api;
