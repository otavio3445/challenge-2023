import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';

function RecrutadorLogin() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log('container ok');
  };

  return (
    <div className="RecrutadorLogin">
      <div className='logoEY'>
        <img alt='logo' width='125px' src={require('../assets/logo-ey-black.png')} />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConf}
      />
      <div className='adjustParticles'>
        <h1 className='title-ey'>Bem Vindo a plataforma de recrutamento e seleção do EY Institute</h1>
        <div className="login">
          <input className='ey-input' type="text" name="cpf" id="cpf" placeholder='Digite seu CPF' />
          <button className='ey-button' onClick={() => window.location.href = "/gestaoDeCandidatos"}>Entrar na Plataforma</button>
        </div>

        <p className="disclaimer">
          Atenção, esta plataforma é destinada para recrutamento e seleção de candidatos em vulnerabilidade social. Destinada a direcionálos a programas do EY Institute ou em caso de conclusão de algum programa, ao recrutamento da EY
        </p>

      </div>
    </div>
  );
}

export default RecrutadorLogin;
