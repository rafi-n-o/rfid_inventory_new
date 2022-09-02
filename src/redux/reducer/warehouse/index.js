const stateWarehouses = {
  warehouses: [],
};

const stateWarehouse = {
  warehouse: {},
};

const stateWarehouseStock = {
  warehouse_stock: [],
};

const warehouses = (state = stateWarehouses, action) => {
  if (action.type === "GET_WAREHOUSES") {
    return {
      ...state,
      warehouses: action.payload,
    };
  }

  return state;
};

const warehouse = (state = stateWarehouse, action) => {
  if (action.type === "GET_WAREHOUSE") {
    return {
      ...state,
      warehouse: action.payload,
    };
  }

  return state;
};

const warehouseStock = (state = stateWarehouseStock, action) => {
  if (action.type === "GET_WAREHOUSE_STOCK") {
    return {
      ...state,
      warehouse_stock: action.payload,
    };
  }

  return state;
};

export { warehouses, warehouse, warehouseStock };
