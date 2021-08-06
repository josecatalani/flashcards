const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "DO_LOGOUT":
      return {
        ...state,
        isLogged: false,
      };
    case "DO_LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default Reducer;
