const reducer = (state, action) => {
  switch (action.type) {
    case "SET-STATUS":
      return action.status;
    default:
      return state;
  }
};

export default reducer;
