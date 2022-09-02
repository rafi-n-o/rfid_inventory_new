const stateDevices = {
  devices: [],
};

const devices = (state = stateDevices, action) => {
  if (action.type === "GET_DEVICES") {
    return {
      ...state,
      devices: action.payload,
    };
  }

  return state;
};

export { devices };
