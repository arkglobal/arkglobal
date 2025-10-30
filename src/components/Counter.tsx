import React, { useEffect, useRef, useState } from 'react'

interface CounterItemProps {
  target: number
  suffix: string
  label: string
}

const CounterItem: React.FC<CounterItemProps> = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const increment = target / 100
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 30)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div className="counter-item" ref={ref}>
      <div className="counter-number">{count}</div>
      <div className="counter-suffix">{suffix}</div>
      <div className="counter-label">{label}</div>
    </div>
  )
}

const Counter: React.FC = () => {
  return (
    <section className="counter-section">
      <div className="container">
        <div className="counter-grid">
          <CounterItem target={100} suffix="M+" label="Estimated Project Cost" />
          <CounterItem target={3000} suffix="+" label="Projects Completed" />
          <CounterItem target={12000} suffix="+" label="Man Hours Saved" />
        </div>
      </div>
    </section>
  )
}

export default Counter