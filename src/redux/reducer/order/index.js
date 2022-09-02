const stateOrder = {
  order: {},
};

const order = (state = stateOrder, action) => {
  if (action.type === "GET_ORDER") {
    return {
      ...state,
      order: action.payload,
    };
  }

  return state;
};

export { order };
