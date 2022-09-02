const stateItems = {
  items: [],
};

const items = (state = stateItems, action) => {
  if (action.type === "GET_ITEMS") {
    return {
      ...state,
      items: action.payload,
    };
  }

  return state;
};

export { items };
