import React from "react";
import './herobanner.css';
import HerobannerIMG from '../../../assets/images/herobanner.webp'

export default function Herobanner() {
    return (
        <div>
            <div className="flex">
                <div className="title-flex">

                    <div className="title">
                        <h1>Huis kopen in Spanje? Vind uw droomhuis.</h1>
                        <p>Puurspanje is een 🏆award-winning makelaar aan de Costa Cálida en Costa Blanca.
                        <h3>✴️✴️✴️ 4.8 / 565 reviews op Facebook</h3>
                        </p> 
                    </div>

                    <div className="herobanner">
                        <img src={HerobannerIMG} alt="herobanner"/>
                    </div>

                </div>
            </div>
        </div>
    )
}