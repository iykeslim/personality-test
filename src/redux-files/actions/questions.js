export const saveQuestions = (questions) => {
    return {
        type: "showQuestions",
        payload: questions
    };
};