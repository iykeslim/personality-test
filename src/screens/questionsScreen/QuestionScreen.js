import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {getQuestions} from '../../dummy-api/data.js'
import Question from '../../components/questionsComponent/Question.js'

const QuestionScreen = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
        
    const navigate = useNavigate()
    useEffect(() => {
        setQuestions(getQuestions())
    }, [])

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
                <Card.Title>
                  Question {currentQuestion + 1} of {questions.length}
                </Card.Title>
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