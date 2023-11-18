import React from "react"
import Outcome from "./otcomeComponents/Outcome.jsx"
import { Card } from "react-bootstrap"


export const Extrovert = () => {
  return (
    <Outcome result="EXTROVERT">
      <Card.Text
        className="text-center"
        style={{ lineHeight: 1.5, color: "#333" }}
      >
        You are energized by and thrive off being around people: social
        activities bring out the best in you; you are more of an expressive
        person even when you are around strangers; you do well working in a
        group, and you don't like being by yourself - that is when boredom steps
        in.
      </Card.Text>
    </Outcome>
  )
}


