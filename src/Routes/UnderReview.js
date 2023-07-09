import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import Slider from '../componentes/verticalSlider/Slider';

function UnderReview() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };
    return (
        <div>
            <Header rota="cadastrarCandidato" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

            <div className='adjustParticles'>
                <div className='disclaimerReview'>
                    <p>Estamos analisando sua Inscrição e em breve entraremos em contato para informar seu resultado. Enquanto isso, confira ao lado mais detalhes sobre os programas de capacitação do <strong>EY Institute</strong></p>
                </div>
                <div style={{display: 'flex', justifyContent: 'end'}}>
                <Slider/>
                </div>
                    
            </div>
        </div>
    )
}

export default UnderReview