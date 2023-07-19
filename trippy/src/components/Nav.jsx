import React from 'react'


function Nav() {
  return (
<div className='navbar'>
    <div className='navbar-container'>

        <div className='navbar-title'>Trippy</div>

        <div className='navbar-items'>
            <ul>
            <li><a className='a-link' href="/">Home</a></li>
            <li><a className='a-link' href="/about">About</a></li>
            <li><a className='a-link' href="#">Contact</a></li>
            <li><a className='a-link' href="#">Services</a></li>
            <li><a className='a-link' href="#">Reviews</a></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Nav
