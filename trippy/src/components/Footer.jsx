import React from 'react'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container' >
            <div className='heading'>
                <div className='footer-title'>Trippy</div>
                <div className='footer-subtitle'>Choose your favourite destination.</div>
            </div>
            <div>
                <div className='container'>
                    <div className='project'>
                    <h3>Project</h3>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">All versions</a></li>
                    </div>

                    <div className='project'>
                    <h3>Community</h3>
            <li><a href="#">Github</a></li>
            <li><a href="#">Issues</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Twitter</a></li>
                    </div>

                    <div className='project'>
                    <h3>Help</h3>
            <li><a href="#">Support</a></li>
            <li><a href="#">Truboleshooting</a></li>
            <li><a href="#">Contact Us</a></li>
                    </div>

                    <div className='project'>
                    <h3>Others</h3>
            <li><a href="#">Term of Service</a></li>
            <li><a href="#">Privacy Issues</a></li>
            <li><a href="#">License</a></li>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer