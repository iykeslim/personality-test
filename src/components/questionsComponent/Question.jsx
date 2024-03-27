import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Spinner from "react-bootstrap/Spinner" // Import Spinner component
import { useDispatch } from "react-redux"
import { addAnswer } from "../../redux-files/actions/answer"
import { Retake } from "../Retake.jsx"
import "./Question.css" // Create a CSS file for styling

const Question = ({ question, answers, selectAnswer }) => {
  const [showSpinner, setShowSpinner] = useState(false) // State for controlling spinner visibility
  const dispatch = useDispatch()

  function onClickAnswer(answer) {
    setShowSpinner(true) // Show spinner and overlay when transitioning to the next question
    setTimeout(() => {
      selectAnswer(answer)
      dispatch(addAnswer(answer))
      setShowSpinner(false) // Hide spinner and overlay after transitioning
    }, 2000) // Adjust the timeout duration as needed (2000ms = 2 seconds)
  }

  // Function to toggle the alternate class for text color
  function toggleAlternateClass(index) {
    return index % 2 === 0
      ? "chat-bubble-answer"
      : "chat-bubble-answer alternate"
  }

  return (
    <div data-testid="question-show" className="chat-container">
      {showSpinner && ( // Render the overlay with spinner if showSpinner is true
        <div className="overlay">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <Card className="d-flex text-center border-0 chat-bubble">
        <Card.Body>
          <div className="chat-content">
            <Card.Header className="border-0">
              <h4
                className="text-white border-0 chat-bubble-question"
                style={{
                  fontSize: window.innerWidth > 768 ? "24px" : "18px",
                  marginBottom: "5px",
                }}
              >
                {question}
              </h4>
            </Card.Header>
            <ul className="list-group border-0" data-testid="answers-show">
              {answers.map((answer, key) => (
                <li
                  className={`list-group-item border-0 text-white ${toggleAlternateClass(
                    key,
                  )}`} // Apply the alternate class based on index
                  data-testid="answer-show"
                  role="button"
                  key={key}
                  onClick={() => onClickAnswer(answer)}
                  style={{
                    fontSize: window.innerWidth > 768 ? "18px" : "14px",
                    marginBottom: "5px",
                  }} // Adjust font size for smaller screens
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
