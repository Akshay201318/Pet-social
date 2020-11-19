const intitialState = {
  user: [],
};

export default function user(state = intitialState, action) {
  if (action.type === "Add_User") {
    return {
      user: action.payload,
    };
  }
  return state;
}
