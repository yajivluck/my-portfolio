import React from 'react'
import Wellness from '../MyIcons/wellness.jpeg'




function MyIcon() {
    return(
        <a className="icon-link" href="https://www.mcgill.ca/studentservices/wellness-wheel">
            <img className='wellness' src={Wellness} alt=""></img>
        </a>
    )

}

export default MyIcon

