export const actionType = {
  SET_USER: 'SET_USER',
  SET_SHOES_ITEMS: 'SET_SHOES_ITEMS',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_SHOES_ITEMS:
      return {
        ...state,
        shoesItems: action.shoesItems,
      };

    default:
      return state;
  }
};

export default reducer;
