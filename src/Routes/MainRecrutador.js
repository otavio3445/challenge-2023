import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';

function MainRecrutador() {
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
                <div>
                    <h1 className='title'>Bem Vindo(a) Recrutador(a)</h1>
                </div>
                <div className="divideContainer">
                    <div className="sub65">
                        <div className="btnRecrutadorHolder">
                            <div className="btnRecrutadorUp">
                                <div className="btnRecrutador">Preencher vagas</div>
                            </div>
                            <div className="btnRecrutadorDown">
                                <div className="btnRecrutador">Aprovar Inscrições</div>
                            </div>
                        </div>
                    </div>
                    <div className="sub35">
                        <div className="instituteInfos reset-position">
                            <p className="big-font">54</p>
                            <p className="small-font">Novas Inscrições</p>
                            <br />
                            <br />
                            <p className="big-font">14</p>
                            <p className="small-font">Novas Vagas Abertas</p>
                            <br />
                            <br />
                            <p className="big-font">4</p>
                            <p className="small-font">Candidatos Empregados</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainRecrutador