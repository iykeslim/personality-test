import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Confetti from "react-confetti"
import { Extrovert } from "../../components/Extrovert.jsx"
import { Introvert } from "../../components/Introvert.jsx"
import computeVersion, {
  EXTROVERT,
  INTROVERT,
} from "../../providers/computeVersion.js"

export default function Outcome() {
  const answers = useSelector((state) => state.versionTest.answers)
  const version = computeVersion(answers)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (version) {
      setShowConfetti(true)
    }
  }, [version])

  return (
    <div>
      <main>
        {showConfetti && <Confetti />}
        {version === EXTROVERT && (
          <div>
            <Extrovert />
          </div>
        )}
        {version === INTROVERT && (
          <div>
            <Introvert />
          </div>
        )}
      </main>
    </div>
  )
}
