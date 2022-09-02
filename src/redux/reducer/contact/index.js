const stateContacts = {
  contacts: [],
};

const contacts = (state = stateContacts, action) => {
  if (action.type === "GET_CONTACTS") {
    return {
      ...state,
      contacts: action.payload,
    };
  }

  return state;
};

export { contacts };
