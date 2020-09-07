const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return action.payload;
  }
  return state;
};
