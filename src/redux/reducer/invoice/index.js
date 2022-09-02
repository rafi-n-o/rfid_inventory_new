const stateInvoices = {
  invoices: [],
};

const invoices = (state = stateInvoices, action) => {
  if (action.type === "GET_INVOICES") {
    return {
      ...state,
      invoices: action.payload,
    };
  }

  return state;
};

export { invoices };
