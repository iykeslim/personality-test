import React from "react"
import { Card } from "react-bootstrap"
import Outcome from "./otcomeComponents/Outcome.jsx"

export const Introvert = () => {
  return (
    <Outcome result="INTROVERT">
      <Card.Text
        className="text-center"
        style={{ lineHeight: 1.5, color: "#333" }}
      >
        You recharge when you are alone: you take pleasure in solitary
        activities such as reading, writing, and meditating. You feel
        unproductive in gatherings or when interacting with people who do not
        enlighten you. The best activity for you is a mentally stimulating
        interaction, whether with your materials or with people.
      </Card.Text>
    </Outcome>
  )
}

