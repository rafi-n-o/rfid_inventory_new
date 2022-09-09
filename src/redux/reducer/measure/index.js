const stateMeasures = {
  measures: [],
};

const measures = (state = stateMeasures, action) => {
  if (action.type === "GET_MEASURES") {
    return {
      ...state,
      measures: action.payload,
    };
  }

  return state;
};

export { measures };
