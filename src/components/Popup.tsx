import { useState } from 'react';

export default function Popup(){
    const [showPopup, setShowPopup] = useState(false)

    return(
        <div className='section'>
            <p className='hoverText' onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
                Our Works
            </p>
            {showPopup && 
            <div className='popup'>
                <p>UI&UX Design</p>
                <p>Web Development</p>
                <p>Mobile Development</p>
            </div>
            }
            
      </div>
    )
}