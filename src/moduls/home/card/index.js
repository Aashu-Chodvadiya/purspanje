import React from 'react'
import './card.css'
import Henk from '../../../assets/images/henk.webp'
import Wim from '../../../assets/images/wim.webp'
import Verbeek from '../../../assets/images/verbeek.webp'
import Geen from '../../../assets/images/geen.webp'
export default function Card() {
    return (
        <div>
            <div className='Waarom'>

                <div className='card-heading'>
                    <h2>Waarom een huis kopen in Spanje met Puurspanje?</h2>
                </div>

                <div className='card-grid'>

                    <div className='card-item'>
                        <h2>Betrouwbare makelaar</h2>
                        <p>Puurspanje is een award-winning makelaar in Spanje. We hebben twee keer de ‘Property Award’ voor beste aanbieder in buitenlands vastgoed gewonnen en we zijn winnaar van de ‘Luxury Lifestyle Award 2020-2021-2022-2023-2024.</p>
                    </div>

                    <div className='card-item'>
                        <h2>Nederlandstalige makelaar</h2>
                        <p>Zelf geen ster in de Spaanse taal? Geen zorgen, we helpen u graag bij het vinden van uw droomhuis.  Puurspanje is een Nederlandstalige makelaar in Spanje. Het is namelijk wel zo fijn om in uw eigen taal uit te kunnen leggen wat u precies zoekt in uw nieuwe woning.</p>
                    </div>

                    <div className='card-item'>
                        <h2>Kennis van de regio</h2>
                        <p>Puurspanje deelt al bijna 20 jaar zijn liefde voor Costa Cálida en de Costa Blanca en weet daardoor precies te vertellen welk dorp of welke stad matcht met uw wensen en waar u bijvoorbeeld het beste kunt eten.</p>
                    </div>

                    <div className='card-item'>
                        <h2>Actief sinds 2005</h2>
                        <p>Puurspanje is al sinds 2005 dé specialist in Spaans vastgoed. In al deze jaren hebben we veel klanten blij kunnen maken met hun droomwoning in Spanje. En dat hebben we met veel plezier gedaan.</p>
                    </div>

                    <div className='card-item'>
                        <h2>Juridische kennis</h2>
                        <p>Puurspanje neemt alle zorgen uit handen en regelt alle juridische zaken voor u rondom de koop van uw nieuwe woning. Zo komt u nooit voor verrassingen te staan en kunt u geheel zorgeloos genieten van uw nieuwe woning in Spanje.</p>
                    </div>

                    <div className='card-item'>
                        <h2>Staat altijd voor u klaar</h2>
                        <p>Puurspanje biedt service die verder gaat dan de drempel van uw nieuwe huis. We helpen u ook na de koop als u bijvoorbeeld tegen problemen aanloopt. We zijn het Nederlandstalige aanspreekpunt voor al uw vragen.</p>
                    </div>
                </div>
            </div>

            <div className='peter-item'>
                <h1>Wat klanten zeggen</h1>
            </div>
            <div className='peter'>

                <div className='Onze'>
                    <div className='card-item-1'>
                        <img src={Henk} alt='henk' />
                        <h2>Henk-Peter & Esther ✴️✴️✴️✴️✴️</h2>
                      
                    </div>
                    <div className='card-item-per'>
                        <p>Onze Spaanse droom wordt werkelijkheid. Nadat we besloten hadden om te gaan
                            kijken voor een tweede huis in Spanje, zijn we ons in eerste instantie gaan
                            oriënteren op de regio. Mede door het gunstige klimaat dachten we aan de</p>
                        <h4>Lees meer</h4>
                    </div>
                </div>

                <div className='werden'>
                    <div className='card-item-1'>
                        <img src={Wim} alt='wim' />
                        <h2>Lenie & Wim ✴️✴️✴️✴️✴️</h2>
                    </div>
                    <div className='card-item-per'>
                        <p> Op 23 december 2023 hebben wij, Lenie en Wim in samenspraak met de dochters besloten om ons te oriënteren op het kopen van een woning in Spanje.  Bij het zoeken op het net enkele woningen gezien. Deze werden aangeboden door</p>
                        <h4>Lees meer</h4>
                    </div>
                </div>

                <div className='Toen'>
                    <div className='card-item-1'>
                        <img src={Verbeek} alt='verbeek' />
                        <h2>Lisette & Peet Verbeek ✴️✴️✴️✴️✴️</h2>
                    </div>
                    <div className='card-item-per'>
                        <p>Toen wij besloten hadden om in Costa cálida/ blanca onze vakantiewoning te kopen hebben wij contact gezocht met Daphne. Na wat mailtjes met Daphne zijn wij voor het eerst in november 2023 op pad gegaan met Rob. Die heeft ons in 2</p>
                        <h4>Lees meer</h4>
                    </div>
                </div>
            </div>

            <div className='geen-image'>
                <div className='image-text'>
                    <h2>Nog geen zoekprofiel aangemaakt?</h2>
                    <p>Krijg automatisch de beste woningen toegestuurd op basis van uw persoonlijke voorkeuren.</p>
                    <button>Aanmaken</button>
                </div>
            </div>

        </div>
    )
}
