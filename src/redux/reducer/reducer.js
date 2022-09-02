import { combineReducers } from "redux";
import { attributes } from "./attribute";
import { categories } from "./category";
import { contacts } from "./contact";
import { dashboards } from "./dashboard";
import { epcLogs } from "./epcLog";
import { userLogs } from "./userLog";
import { items } from "./item";
import { mutationDatas, mutations } from "./mutation";
import { product, products, productStock } from "./product";
import { transferDatas, transfers } from "./transfer";
import { warehouse, warehouses, warehouseStock } from "./warehouse";
import { services, service } from "./service";
import { durations } from "./duration";
import { devices } from "./device";
import { order } from "./order";
import { invoices } from "./invoice";

const reducer = combineReducers({
  warehouses,
  warehouse,
  warehouseStock,
  categories,
  attributes,
  contacts,
  products,
  product,
  productStock,
  items,
  mutations,
  mutationDatas,
  epcLogs,
  userLogs,
  transfers,
  transferDatas,
  dashboards,
  services,
  service,
  durations,
  devices,
  order,
  invoices,
});

export default reducer;
