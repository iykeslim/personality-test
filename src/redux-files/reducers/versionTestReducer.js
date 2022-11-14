const initialState = {
    questions: [],
    answers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "showQuestions":
            return {
                ...state,
                questions: action.payload
            };
        case "addanswer":
            return {
                ...state,
                answers: [
                    ...state.answers,
                    action.payload
                ]
            }
        default:
            return state;
    }
};

export default reducer;
