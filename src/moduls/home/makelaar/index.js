import React from "react";
import './makelaar.css';
import Spanje from '../../../assets/images/spanje.webp'

export default function Makelaar() {
    return (
        <div>
            <div className="makelaargrid">
                <div className="subtitle">
                    <h2>NEDERLANDSE MAKELAAR</h2>
                    <h1>Puurspanje, meer dan een makelaar!</h1>
                    <h3>✓ Vertrouwd kopen in Spanje</h3>
                </div>

                <div className="semititle">
                    <p>Puurspanje is een familiebedrijf. Wij zetten ons met hart en ziel in om uw dromen waar te maken. Als Nederlandstalige makelaar delen wij sinds 2005 onze liefde voor de Costa Cálida en de Costa Blanca Zuid. Zo slagen wij erin om voor elke klant het juiste droomhuis te vinden. Telkens opnieuw, maar elke keer anders. Want twee zaken staan centraal: een persoonlijke service en tevreden klanten.</p>
                </div>
            </div>

            <div className="makelaar-grid">

                <div className="Ervaren">
                    <h4>Ervaren Nederlandse makelaar in Spanje</h4>
                    <p>Wij zijn DE regio specialist! Wij wonen en werken al sinds 2005 aan de Costa Cálida en Costa Blanca Zuid. Met ons eigen service kantoor in de regio.</p>
                </div>

                <div className="Toezicht">
                    <h4>Toezicht op kwaliteit bouw</h4>
                    <p>Strak toezicht op het bouwproces en regelmatige inspecties om de kwaliteit van het vastgoed te waarborgen. Via uw persoonlijke pagina kijkt u zelf mee!</p>
                </div>

                <div className="vertrouwde">
                    <h4>Geverifieerde en vertrouwde ontwikkelaars</h4>
                    <p>Puurspanje werkt enkel samen met de beste projectontwikkelaars in Spanje. Het kan dus zo zijn dat u een bepaald project niet kunt vinden op onze site. Dit heeft dan een reden.</p>
                </div>

            </div>

            <div className="over-grid">

                <div className="one">
                    <span>OVER ONS</span>
                    <h2>Makelaar in Spanje</h2>
                    <p>Puurspanje is dé Nederlandstalige makelaar in Spanje die erin slaagt om voor iedereen het juiste droomhuis te vinden. Telkens opnieuw, maar elke keer anders. We regelen alle zaken, van het koopcontract en juridische zaken tot het interieur, internet en verzekeringen</p>
                </div>

                <div className="dat">
                    <p>En dat doen we allemaal volledig gratis! Want twee zaken staan centraal: een persoonlijke service en tevreden klanten. Een huis kopen in Spanje was nog nooit zo eenvoudig en relaxed. Weet u al aan welke wensen uw droomhuis moet voldoen? Maak eenvoudig een zoekprofiel aan. Dan sturen we u een persoonlijke top 5.</p>
                </div>
                
            </div>

            <div className="spanjeIMG">
                <img src={Spanje} alt="spanje"/>
            </div>

            <div className="regio">
                
                <div className="text-1">
                    <h1>Beste regio Spanje</h1>
                </div>

                <div className="text-2">
                    <p>De Costa Cálida en Costa Blanca Zuid in Spanje zijn de laatste verborgen Mediterrane schatten, amper beïnvloed door massatoerisme. De stranden en de natuur hebben hun natuurlijke schoonheid behouden. En de cultuur is authentiek gebleven. Proef van het leven in het echte Spanje</p>
                </div> 
            </div>
        </div>
    )
}