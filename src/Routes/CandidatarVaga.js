import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';

function CandidatarVaga() {
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
                <div className="divideContainer">
                    <div className="divideContainer-sub">
                        <h3 className="detalheVaga">Vaga:</h3>
                        <br />
                        <br />
                        <h3 className="detalheVaga">Detalhes da Vaga:</h3>
                        <h3 className="detalheVaga">Level:</h3>
                        <h3 className="detalheVaga">Publicação:</h3>
                        <h3 className="detalheVaga">Local:</h3>
                        <h3 className="detalheVaga">Salário:</h3>
                        <h3 className="detalheVaga">Setor:</h3>
                        <h3 className="detalheVaga">ID:</h3>
                    </div>
                    <div className="divideContainer-sub">
                        <div className="divideContainer-sub-center">
                            <div>
                                <p>Seu currículo: </p>
                                <input type="file" name="cv" id="cv" />
                                <div className="sendApply">Se Candidatar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatarVaga