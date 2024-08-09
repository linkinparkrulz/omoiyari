import React, { useState, useEffect } from 'react'

const OmoiyariForm = ({
  selectedProjects,
  setSelectedProjects,
  currentStep,
  setCurrentStep,
}) => {
  const projects = [
    { name: 'Samourai Wallet', icon: 'Samourai Wallet.png' },
    { name: 'Stack Wallet', icon: 'Stack Wallet.png' },
    { name: 'Bitcoiner.guide', icon: 'Bitcoiner.Guide.png' },
    { name: 'UMisfits Podcast', icon: 'UMisfits.png' },
    { name: 'KYC3 Coke Fund', icon: 'KYC3.png' },
    { name: 'Sparrow Wallet', icon: 'Sparrow.png' },
    { name: 'Samourai Wallet', icon: 'Samourai Wallet.png' },
    { name: 'Stack Wallet', icon: 'Stack Wallet.png' },
    { name: 'Bitcoiner.guide', icon: 'Bitcoiner.Guide.png' },
    { name: 'UMisfits Podcast', icon: 'UMisfits.png' },
    { name: 'KYC3 Coke Fund', icon: 'KYC3.png' },
    { name: 'Sparrow Wallet', icon: 'Sparrow.png' },
  ]

  const [scrollableAreaHeight, setScrollableAreaHeight] = useState(
    'calc(100vh - 200px)',
  )

  const handleCheckboxChange = (project, checked) => {
    console.log(project)
    console.log(checked)
    if (checked) {
      setSelectedProjects([...selectedProjects, project])
    } else {
      setSelectedProjects(
        selectedProjects.filter((p) => p.name !== project.name),
      )
      console.log(project.name)
      console.log(selectedProjects)
    }
    console.log(selectedProjects)
  }

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

  return (
    <div className="bg-white p-5 rounded-md min-h-screen flex flex-col relative">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-4xl pt-5 font-black">Omoiyari</h2>
      </div>
      <p className="mb-4 text-gray-700 text-center instructions">
        Please select which projects/foundations to allocate donations.
      </p>

      <div className="mb-4 flex justify-end filter-button">
        <button className="bg-primary hover:bg-gray-400 text-gray-800 font-regular py-2 px-12 rounded flex ">
          Filter
        </button>
      </div>
      <div
        className="bg-tertiary mb-2 pl-4 pr-4 pt-4 rounded-md overflow-y-auto"
        style={{ maxHeight: scrollableAreaHeight }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-primary shadow-md rounded-md p-4 mb-5 flex items-center justify-between"
          >
            <div className="flex items-center">
              <span className="mr-2 w-12 h-12">
                <img className="rounded-md" alt="project" src={project.icon} />
              </span>
              <span className="pl-4">{project.name}</span>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                className="form-checkbox w-7 h-7 border-2 border-secondary rounded-md bg-white text-secondary"
                onChange={(e) =>
                  handleCheckboxChange(project, e.target.checked)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2 next-button">
        <button
          className="bg-secondary hover:bg-red-700 font-regular text-white py-4 px-16 flex items-center rounded mt-4"
          onClick={() => {
            if (selectedProjects.length > 0) {
              setCurrentStep(2)
            }
          }}
          disabled={selectedProjects.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default OmoiyariForm
