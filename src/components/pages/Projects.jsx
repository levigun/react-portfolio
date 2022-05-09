import React from 'react'
import cryptoMuggles from './images/cryptomuggles-logo.png'
import musicalChair from './images/musical-chair.png'
import weatherApp from './images/weather-app-look.png'

const styles = {
  cardContainer: {
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceAround',
    borderRadius: '15px',
    backgroundColor: '#ffc0cb',
    padding: '10px',
    marginTop: '30px',
    border: 'solid #FFAFBD',
    margin: '0 10px',
  },
  image: {
    width: '280px',
    height: '230px'
  }
}

export default function Projects() {
  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center text-center'>
      <h1 className='text-center'>My Projects</h1>
        <div className='row d-flex align-items-center justify-content-center text-center'>

          <div className="col-12 col-md-3" style={styles.cardContainer}>
            <div>
              <h3 className="text-center">Crypto Muggles</h3>
              <a href='https://github.com/levigun/crypto-website.git' target="_blank">
                <img src={cryptoMuggles} style={styles.image}/>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-3" style={styles.cardContainer}>
            <div>
              <h3 className="text-center">Musical Chair</h3>
              <a href='https://github.com/levigun/musical-chair.git' target="_blank">
                <img src={musicalChair} style={styles.image}/>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-3" style={styles.cardContainer}>
            <div>
              <h3 className="text-center">Weather App</h3>
              <a href='https://github.com/levigun/weather-app.git' target="_blank">
                <img src={weatherApp} style={styles.image}/>
              </a>
            </div>
          </div>
        </div>


    </div>
  )
}
