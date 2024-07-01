import React from 'react'
import './Featured.css';
import Featured1 from '../../../assets/images/Featured-item.webp'
import Featured2 from '../../../assets/images/Featured-item-1.webp'
import Featured3 from '../../../assets/images/Featured-item-2.webp'
import Arrow from '../../../assets/images/arrow.svg'
export default function Featured() {
    return (
        <div>
            <div className='woningen'>
                <div className='Uitgelichte'>
                    <h1>Uitgelichte woningen</h1>
                </div>
            </div>

            <div className='Featured-grid'>

                <div className='Featured-item'>
                    <img src={Featured1} alt='Featured-item' />
                    <div className='arrow'>
                    <h2>Villa op La Finca Golf, Costa Blanca, Spanje</h2>
                    <img src={Arrow} alt='arrow' />
                    </div>
                    <p>€ 565.000</p>
                </div>

                <div className='Featured-item'>
                    <img src={Featured2} alt='Featured-item-1' />
                    <div className='arrow'>
                        <h2>Penthouse in Pilar de la Horadada, Costa Blanca, Spanje</h2>
                        <img src={Arrow} alt='arrow' />
                    </div>
                    <p>€ 244.000</p>
                </div>

                <div className='Featured-item'>
                    <img src={Featured3} alt='Featured-item-2' />
                    <div className='arrow'>
                    <h2>Appartement in Pilar de la Horadada, Costa Blanca, Spanje</h2>
                    <img src={Arrow} alt='arrow' />
                    </div>
                    <p>€ 225.000</p>
                </div>
                
                   
            </div>
        </div>
    )
}
