import React from 'react'
import load from './load.gif'

function spinner() {
  return (
    <div className="text-center">
        <img src={load} alt="loading" />
    </div>
  )
}

export default spinner