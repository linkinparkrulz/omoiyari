import React, { useState, useEffect } from 'react'
import OmoiyariForm from './components/OmoiyariForm.js'
import AllocationForm from './components/AllocationForm.js'

function App() {
  const [selectedProjects, setSelectedProjects] = useState([])
  const [totalAmount, setTotalAmount] = useState(0.0)
  const [currentStep, setCurrentStep] = useState(1)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OmoiyariForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedProjects={selectedProjects}
            setSelectedProjects={setSelectedProjects}
          />
        )
      case 2:
        return (
          <AllocationForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedProjects={selectedProjects}
            setSelectedProjects={setSelectedProjects}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
        )
      default:
        return null
    }
  }

  return <div className="App">{renderStep()}</div>
}

export default App
