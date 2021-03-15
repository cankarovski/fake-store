const reducer = (state, action) => {
  switch (action.type) {
    case "INIT-ITEMS":
      return [...action.items];

    case "ADD-ITEMS":
      return [...state, ...action.items];

    default:
      return state;
  }
};

export default reducer;
