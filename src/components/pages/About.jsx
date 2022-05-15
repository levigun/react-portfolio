import React from 'react'
import '../../App.scss'

export default function About() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-center vh-100'>
      <h1  style={{fontSize: '500%'}}> About Me </h1>
        <p  style={{fontSize: '200%'}}>
                I am originally from Indonesia who migrated to Sydney, Australia in 2018.
                <br></br>
                I came here to pursue my baking passion and became a qualified pastry chef since 2019.
                <br></br>
                Now learning to be a developer to gain a new skill set.
        </p>

    </div>
  )
}
