const stateCategories = {
  categories: [],
};

const categories = (state = stateCategories, action) => {
  if (action.type === "GET_CATEGORIES") {
    return {
      ...state,
      categories: action.payload,
    };
  }

  return state;
};

export { categories };
