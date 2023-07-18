import React from 'react'
import bkg from '../images/bkg.jpg'


function Section1() {
  return (

    <div>
        <div className='section1-container'>
        <img className='section1-img' src={bkg} ></img>
        <div className='section1-title'>Your journey Your story</div>
        <div className='section1-subtitle'> Choose your favourite destination</div>
        </div>
        <div>
            <button>Travel Plans</button>
        </div>
    </div>
  )
}

export default Section1