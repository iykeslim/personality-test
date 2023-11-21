import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getQuestions } from '../../dummy-api/questions';
import Question from '../../components/questionsComponent/Question.jsx';
import { saveQuestions } from '../../redux-files/actions/questions.js';

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);
  // gotta add this for redux - Remember TODO
  useEffect(() => {
    dispatch(saveQuestions(questions));
  }, [questions]);

  function onSelectanswer() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length - 1) {
      navigate('/outcome');
    }
  }

  return (
    <div>
      <main>
        <p className='d-flex justify-content-center text-white'>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        {questions.length && (
          <Question
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            selectAnswer={onSelectanswer}
          />
        )}
      </main>
    </div>
  );
}
