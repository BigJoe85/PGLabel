import React from 'react'

const Dashboard = () => {
  //date handler
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div>
      <div>
        <h1 className='text-red-600'>Dashboard Here </h1>
        <p>{today}</p>
      </div>
    </div>
  )
}

export default Dashboard
