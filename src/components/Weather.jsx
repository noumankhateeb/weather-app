import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsCloud } from 'react-icons/bs'
import { FaLocationDot, FaWind } from 'react-icons/fa6'

const Weather = () => {
  return (
    <div className='weather-container'>

        <div className="main-section">

            <div className="weather-info">
                <div className="location">
                    <h3>New York - USA</h3>
                </div>
                <div className="condition">
                    <h1>Overcast</h1>
                </div>
            </div>

            <div className="weather-hours">
                <div className="hour-card">
                    <div className="hour-time">
                        <p>09:00</p>
                    </div>
                    <div className="hour-condition">
                        <BsCloud />
                    </div>
                    <div className="hour-temp">
                        <h2>10*C</h2>
                    </div>
                </div>
            </div>

        </div>

        <div className="side-section">
            <div className="search-box">
                <FaLocationDot className='icon' />
                <input type="text" placeholder='New York' />
                <BiSearch className='icon' />
            </div>

            <div className="temp-info">
                <h1>10*C</h1>
                <p>
                    <FaWind /> NE 40 km/h
                </p>
            </div>

            <div className="forecast-days">
                <h1 className='forecast-heading'>The Next Days Forecast</h1>
                <div className="forecast-item">
                    <div className="forecast-details">
                        <div className="forecast-icon">
                            <BsCloud />
                        </div>
                        <div className="details">
                            <h2>monday, December 16</h2>
                            <p>overcast</p>
                        </div>
                    </div>
                    <div className="forecast-temp">
                        <div className="temp-display">
                            <h2>10*C</h2>
                            <h2>5*C</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather