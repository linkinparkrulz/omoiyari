import React, { useState, useEffect } from 'react'

const AllocationForm = ({
  selectedProjects,
  setSelectedProjects,
  currentStep,
  setCurrentStep,
  totalAmount,
  setTotalAmount,
}) => {
  const [allocationMode, setAllocationMode] = useState('percentage')

  const handleAllocationChange = (project, allocation) => {
    // Update the allocation for the selected projec*/t
  }

  const [scrollableAreaHeight, setScrollableAreaHeight] = useState(
    'calc(100vh - 200px)',
  )

  useEffect(() => {
    const handleResize = () => {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0
      const instructionsHeight =
        document.querySelector('.instructions')?.offsetHeight || 0
      const filterButtonHeight =
        document.querySelector('.filter-button')?.offsetHeight || 0
      const nextButtonHeight =
        document.querySelector('.next-button')?.offsetHeight || 0

      const totalHeight =
        headerHeight +
        instructionsHeight +
        filterButtonHeight +
        nextButtonHeight +
        160 // Add some extra padding
      setScrollableAreaHeight(`calc(100vh - ${totalHeight}px)`)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call it initially to set the height

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  var percentage
  var amount

  return (
    <div className="bg-white p-5 rounded-md min-h-screen flex flex-col relative">
      <div className="flex pt-5 items-center justify-center mb-4">
        <img
          className="w-12 h-12 mr-4"
          alt="logo"
          src="logo-500x500-c12727.png"
        />
        <h2 className="text-4xl font-black font-space-mono ">Omoiyari</h2>
      </div>
      <p className="mb-4 text-gray-700 text-center instructions">
        Please select which projects/foundations to allocate donations.
      </p>
      <div className="flex justify-center mb-4">
        <div className="flex items-center">
          <div className="mx-auto">
            <input
              type="text"
              className="border-2 border-secondary rounded-md w-24 h-9 text-center"
              defaultValue="0.0000001"
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </div>
          <label className="ml-2">BTC</label>
        </div>
      </div>
      <div
        className="bg-tertiary mb-2 pl-4 pr-4 pt-4 rounded-md overflow-y-auto"
        style={{ maxHeight: scrollableAreaHeight }}
      >
        {selectedProjects.map((project, index) => (
          <div key={index} className="flex items-center justify-between mb-5">
            <button
              className="mr-3 text-xl font-bold bg-transparent w-7 h-7 border-none cursor-pointer hover:text-red-500"
              onClick={() => {
                /* Handle remove project action here */
              }}
            >
              X
            </button>
            <div className="bg-primary shadow-md rounded-md pl-4 pr-4 flex items-center flex-grow">
              <div className="flex items-center md:mb-0 mb-2 ">
                <div className="mr-2 w-12 h-12">
                  <img
                    className="rounded-md"
                    alt="project"
                    src={project.icon}
                  />
                </div>
              </div>

              <div className="bg-primary p-4 flex flex-col sm:flex-row justify-between w-full">
                <div className="mb-2 sm:w-1/3">
                  <span className="pl-0 pr-0 text-lg md:mb-0">
                    {project.name}
                  </span>
                </div>
                <div className="flex flex-col items-left flex-grow ">
                  <div className="flex mb-2 sm:justify-center">
                    <input
                      type="text"
                      value={project.percentage}
                      /* onChange={(e) =>
                      handlePercentageChange(index, e.target.value)
                    }*/
                      className="w-16 px-2 py-1 border-2 border-secondary text-right rounded-md"
                    />
                    <span className="pl-3">%</span>
                  </div>
                </div>
                <div className="flex flex-col flex-shrink-0 sm:items-left">
                  <div>
                    <input
                      type="text"
                      value={project.amount}
                      /*onChange={(e) => handleAmountChange(index, e.target.value)}*/
                      className="w-24 px-2 py-1 border-2 border-secondary text-right rounded-md"
                    />
                    <label className="pl-3">BTC</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllocationForm
