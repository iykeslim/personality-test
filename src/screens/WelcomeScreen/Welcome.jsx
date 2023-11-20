import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom"
import "./welcome.css"

const Welcome = () => {
  const navigate = useNavigate()

  function onGoClick() {
    navigate("/questions")
  }

  return (
    <div className="justify-content-center">
      <Card
        id="main-container"
        className="text-center p-3 mb-5 bg-transparent border-0"
      >
        <Card.Body className="rounded-3" style={{ backgroundColor: "transparent" }}>
          <Card.Header className="my-3 text-white border-0">
            Take a personality test: find out if you are an Introvert or an
            Extrovert
          </Card.Header>
          <Card.Text className="text-white fs-5" style={{ fontSize: "8px" }}>
            Only honest answers guarantee honest results
          </Card.Text>
          <Button
            variant="secondary border-0"
            className="btn btn-outline-dark btn-lg px-3 bg-light-grey"
            onClick={onGoClick}
          >
            Let's Go
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Welcome
