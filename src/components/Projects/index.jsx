import React from 'react'
import './style.css'
import '../../App.scss'
import cryptoMuggles from '../pages/images/cryptomuggles-logo.png'
import musicalChair from '../pages/images/musical-chair.png'
import weatherApp from '../pages/images/weather-app-look.png'



export default function Projects() {
  return (
    <div className='container-fluid min-height'>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center'>My Projects</h1>
        </div>
      </div>

      <div className='row align-items-center justify-content-center text-center'>

        <div className="col-12 col-md-3 card-container">
          <div>
            <h3 className="text-center">Crypto Muggles</h3>
            <a href='https://github.com/levigun/crypto-website.git' target="_blank">
              <img src={cryptoMuggles} />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 card-container">
          <div>
            <h3 className="text-center">Musical Chair</h3>
            <a href='https://github.com/levigun/musical-chair.git' target="_blank">
              <img src={musicalChair} />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 card-container">
          <div>
            <h3 className="text-center">Weather App</h3>
            <a href='https://github.com/levigun/weather-app.git' target="_blank">
              <img src={weatherApp} />
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

