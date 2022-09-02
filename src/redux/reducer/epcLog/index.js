const stateEpcLogs = {
  epc_logs: [],
};

const epcLogs = (state = stateEpcLogs, action) => {
  if (action.type === "GET_EPC_LOGS") {
    return {
      ...state,
      epc_logs: action.payload,
    };
  }

  return state;
};

export { epcLogs };
