import React, { useState, useEffect } from 'react'

interface Service {
  title: string
  content: string[]
}

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services: Service[] = [
    {
      title: 'ESTIMATING',
      content: [
        'We believe in great people and our estimators are dedicated to cultivating a bespoke standard of preconstruction estimates for your team.',
        'Whether you are a General Contractor or a Sub Contractor, we have the best-in-class Standard Operating Procedures that we develop uniquely for your company, all our team operates on a well-written set of estimation parameters cultivated so that we never miss a detail before submitting an estimate. We provide quality assistance on all stages from receiving a bid, to managing all documents and updates on the bid cycle till the number is delivered to the clients.'
      ]
    },
    {
      title: 'BID MANAGEMENT',
      content: [
        'Don\'t worry about getting hundreds of invites on a daily basis, our team of bid managers will catch those invites for you, and when you reach the office we will keep a daily schedule of your lined up invites and give you a synopsis of what is the next best project for you.'
      ]
    },
    {
      title: 'DOCUMENT AND RFI MANAGEMENT',
      content: [
        'Once you have decided to bid on a project, we will start operating on the documents of that project.',
        'So, you will get a list of all documents that are available, and all that is useful for you, systematically arranged per your preference and genre of work.',
        'This will help you save time in paperwork management and sorting out relevant data.',
        'We will notify you of all discrepancies related to your scope and help you file those important RFIs with accurate detailing and a custom-made RFI format for your team.'
      ]
    },
    {
      title: 'Time Saving',
      content: [
        'We will continuously work at achieving a one-week lead time to all your estimates, we will be ready with the detailed estimate one week before the due date.',
        'We give a strong lead time so that you get enough time for revisions and planning the procurement strategy for every individual project.'
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  const changeSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="slider-container">
          <div className="slider">
            {services.map((service, index) => (
              <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                <h3>{service.title}</h3>
                {service.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="slider-nav">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={index === currentSlide ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services