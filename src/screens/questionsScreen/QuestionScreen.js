import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getQuestions} from '../../dummy-api/data.js'
import Question from '../../components/questionsComponent/Question'
import { saveQuestions } from '../../redux-files/actions/questions'

const QuestionScreen = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
     
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setQuestions(getQuestions())
    }, [])

    // dispatch action to save question

    useEffect(() => {
        dispatch(saveQuestions(questions));
    }, [questions, dispatch]);

 // increment - decrement state count function
    function onSelectResponse() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else if (currentQuestion === questions.length - 1) {
            navigate('/outcome')
        }
    }
  return (
      <div>
          <main>
            <p className='question'>
                  Question {currentQuestion + 1} of {questions.length}
              </p>
              {questions.length && (
                  <Question
                      question={questions[currentQuestion].question}
                      responses={questions[currentQuestion].responses}
                      selectResponse={onSelectResponse}
                  />
              )}
          </main>
      </div>
  )
}

export default QuestionScreen