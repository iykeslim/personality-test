import React from "react"
import Card from "react-bootstrap/Card"
import { useDispatch } from "react-redux"
import { addAnswer } from "../../redux-files/actions/answer"
import { Retake } from "../Retake.jsx"
import "./Question.css" // Create a CSS file for styling

const Question = ({ question, answers, selectAnswer }) => {
  const dispatch = useDispatch()

  function onClickanswer(answer) {
    selectAnswer(answer)
    dispatch(addAnswer(answer))
  }

  return (
    <div data-testid="question-show" className="chat-container">
      <Card className="d-flex text-center border-0 chat-bubble">
        <Card.Body>
          <div className="chat-content">
            <Card.Header className="border-0">
              <h4 className="text-white border-0 chat-bubble-question">
                {question}
              </h4>
            </Card.Header>
            <ul className="list-group border-0" data-testid="answers-show">
              {answers.map((answer, key) => (
                <li
                  className="list-group-item border-0 text-white chat-bubble-answer"
                  data-testid="answer-show"
                  role="button"
                  key={key}
                  onClick={() => onClickanswer(answer)}
                >
                  {answer.answer}
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
      <Retake />
    </div>
  )
}

export default Question
