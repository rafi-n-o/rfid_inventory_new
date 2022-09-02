const stateServices = {
  services: [],
};

const stateService = {
  service: {},
};

const services = (state = stateServices, action) => {
  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      services: action.payload,
    };
  }

  return state;
};

const service = (state = stateService, action) => {
  if (action.type === "GET_SERVICE") {
    return {
      ...state,
      service: action.payload,
    };
  }

  return state;
};

export { services, service };
