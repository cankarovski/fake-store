const reducer = (state, action) => {
  switch (action.type) {
    case "GET-CATEGORIES":
      return [...action.categories];
    default:
      return state;
  }
};

export default reducer;
