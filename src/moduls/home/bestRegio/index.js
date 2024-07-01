import React from 'react';
import './bestRegio.css';
import Image1 from '../../../assets/images/Torre de la Horadada.webp'
import Image2 from '../../../assets/images/Roldan.webp'
import Image3 from '../../../assets/images/Vistabella.webp'
import Image4 from '../../../assets/images/San Javier.webp'
import Image5 from '../../../assets/images/Cabo Roig.webp'
import Image6 from '../../../assets/images/El Carmoli.webp'
import Arrow from '../../../assets/images/arrow.svg'


export default function Bestregio() {
  return (
    <div>
      <div className='content'>

        <div className='bestregio-1'>
          <h2>Costa Blanca</h2>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image1} alt='Torre de la Horadada' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>Torre de la Horadada</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente Pilar de la Horadada en telt ongeveer 2.000 inwoners.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image2} alt='Roldan' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>Roldan</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>In het knusse dorpje Roldán. hangt een ongedwongen Spaans sfeer.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image3} alt='Vistabella' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>Vistabella</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente Pilar de la Horadada en telt ongeveer 2.000 inwoners.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>
        </div>

        <div className='bestregio-1'>
          <h2>Costa Cálida</h2>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image4} alt='San Javier' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>San Javier</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente Pilar de la Horadada en telt ongeveer 2.000 inwoners.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image5} alt='Cabo Roig' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>Cabo Roig</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente Pilar de la Horadada en telt ongeveer 2.000 inwoners.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>

          <div className='content-1'>
            <div className='image-Torre'>
              <img src={Image6} alt='El Carmoli' />
            </div>
            <div className='content-2'>
              <div className='content-title'>
                <h3>El Carmoli</h3>
                <img src={Arrow} alt='arrow' />
              </div>
              <div className='content-p'>
                <p>Torre de la Horadada is gelegen aan de stranden van de Middellandse Zee. Het dorp behoort tot de gemeente Pilar de la Horadada en telt ongeveer 2.000 inwoners.</p>
              </div>
            </div>
          </div>
            <div className='border-bottom'></div>

        </div>
      </div>

      <div className='spanje-title'>
        <div className='spanje-title-1'>
        <p>BESTE EIGENDOM</p>
        <h3>Verken het beste aanbod van woningen in Zuid-Spanje</h3>
        </div>
        <div className='spanje-text'>
          <p>Wat weerhoudt u ervan om voluit voor uw droom te gaan en een huis in Spanje te kopen? Voor de prijs moet u het niet laten. U heeft al een appartement vanaf 175.000 euro en een villa vanaf 300.000 euro.</p>
        </div>
      </div>
    </div>
  )
}
