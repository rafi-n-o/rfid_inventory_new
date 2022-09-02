const stateAttributes = {
  attributes: [],
};

const attributes = (state = stateAttributes, action) => {
  if (action.type === "GET_ATTRIBUTES") {
    return {
      ...state,
      attributes: action.payload,
    };
  }

  return state;
};

export { attributes };
