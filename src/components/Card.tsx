import { useState } from 'react';

export default function Card(){
    const [showDesc, setShowDesc] = useState(false)

    return(
        <div>
        <div className="card" onMouseEnter={() => setShowDesc(true)} onMouseLeave={() => setShowDesc(false)}>
          <div className='card-body'>
            <h1>Little Known Facts</h1>
            {showDesc && <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>}
          </div>
        </div>
      </div>
    )
}