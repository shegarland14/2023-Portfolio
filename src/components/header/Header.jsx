import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/portim.jpg'

const Header = () => {
    return (
       
            <header> 
                <div className="container header_container">
                    <h5>hello I'm</h5>
                    <h1>Sheridan Garland</h1>
                    <h5 className="text-light"> Front-End Developer</h5>
                    <CTA />
                    <div className="me">
                        <img src={ME} alt='me'/>
                    </div>
                    
                    <a href='#contact' className='scroll_down'> Scroll Down</a>
                </div>
            </header>
        
    )
}
export default Header