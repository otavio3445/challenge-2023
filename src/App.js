import React, { useState } from 'react';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from './assets/particlesConfig';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {

  const history = useNavigate();
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log('container ok');
  };

  const [cpf, setcpf] = useState("");

  const handleButtonClick = async () => {
    try {
      let res = await axios.post('/candidatos/verifyCandidato', {
        headers: {
          'Accept': 'application/json',
        },
        cpf
      });
      if (res && res.data) {
        if (res.data > 0) {
          history('/candidato/main', {
            state: {
              cpf: cpf
            }
          });
        } else {
          history('/cadastrarCandidato');
        }
      }
    } catch (error) {
      console.error('Erro ao contar candidatos:', error);
    }
  };

  return (
    <div className="App">
      <div className='logoEY'>
        <img alt='logo' width='125px' src={require('./assets/logo-ey-black.png')} />
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
          <input className='ey-input' autocomplete="off" type="text" name="cpf" id="cpf" placeholder='Digite seu CPF' onChange={(e) => {
            setcpf(e.target.value)
          }} />
          <button className='ey-button' onClick={handleButtonClick}>Entrar na Plataforma</button>
        </div>

        <p className="disclaimer">
          Atenção, esta plataforma é destinada para recrutamento e seleção de candidatos em vulnerabilidade social. Destinada a direcionálos a programas do EY Institute ou em caso de conclusão de algum programa, ao recrutamento da EY
        </p>

      </div>
    </div>
  );
}

export default App;
