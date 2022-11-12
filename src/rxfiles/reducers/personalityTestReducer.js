const initialState = {
  questions: [],
  responses: []
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "populateQuestions":
        return {
          ...state,
          questions: action.payload
        };
      case "addResponse":
        return {
            ...state,
            responses: [
                ...state.responses,
                action.payload
            ]
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  