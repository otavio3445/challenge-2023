import React, {useState} from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';

function DetalhesVaga() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const [showModal, setshowModal] = useState(true);

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
                    <div className="sub50">
                        <h3 className="title reset-padding" style={{ marginTop: '2rem' }}>Vaga:</h3>
                        <div className="detalheCandidato">Detalhes da vaga:</div>
                        <div className="detalheCandidato">Level:</div>
                        <div className="detalheCandidato">Publicação</div>
                        <div className="detalheCandidato">Local:</div>
                        <div className="detalheCandidato">Salário:</div>
                        <div className="detalheCandidato">Responsável:</div>
                        <div className="detalheCandidato">Setor:</div>
                        <div className="detalheCandidato">ID:</div>
                        <br />
                        <h3 className="title reset-padding reset-margin">Candidaturas externas:</h3>
                        <button className="ey-button">Baixar CVs Externos</button>
                    </div>
                    <div className="sub50">
                        <h3 className="title reset-padding" style={{ marginTop: '2rem' }}>Candidaturas EY Institute:</h3>
                        <br />
                        <div className="inputContainer">
                            <div className="subContainer">
                                <p>Faixa Etária:</p>
                                <select className='ey-input-medium'>
                                    <option selected disabled>Selecione a faixa etária</option>
                                    <option>18-30</option>
                                    <option>31-40</option>
                                    <option>41-50</option>
                                    <option>50+</option>
                                </select>
                            </div>
                            <div className="subContainer">
                                <div style={{ width: '100%' }}>
                                    <p>Parte da comunidade LGBTQIAP+?</p>
                                    <RadioGroup horizontal >
                                        <ReversedRadioButton value="sim" pointColor="#F8D000">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                            Não
                                        </ReversedRadioButton>
                                    </RadioGroup>
                                </div>
                                <div className='correctRadioInput'></div>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="subContainer">
                                <div style={{ width: '90%' }}>
                                    <p>Candidatos PCD?</p>
                                    <RadioGroup horizontal >
                                        <ReversedRadioButton value="sim" pointColor="#F8D000">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                            Não
                                        </ReversedRadioButton>
                                    </RadioGroup>
                                </div>
                                <div className='correctRadioInput'></div>
                            </div>
                            <div className="subContainer">
                                <div style={{ width: '90%' }}>
                                    <p>Parte de povos originários?</p>
                                    <RadioGroup horizontal >
                                        <ReversedRadioButton value="sim" pointColor="#F8D000">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                            Não
                                        </ReversedRadioButton>
                                    </RadioGroup>
                                </div>
                                <div className='correctRadioInput'></div>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="subContainer">
                            <p>Renda Familiar:</p>
                                <select className='ey-input-medium'>
                                    <option selected disabled>Selecione a renda familiar</option>
                                    <option>Classe A</option>
                                    <option>Classe B</option>
                                    <option>Classe C</option>
                                    <option>Classe D</option>
                                    <option>Classe E</option>
                                </select>
                            </div>
                        </div>
                        <button className="ey-button">Baixar CVs Internos</button>
                    </div>
                </div>
                <div className="btnEncerrar">Encerrar Vaga</div>

                <div className="modal" hidden={showModal}>
                    <div className="modal-container">
                        <input type='text' className='ey-input' placeholder='Digite o CPF do Candidato:' />
                        <div style={{ display: 'flex', width: '100%' }}>
                            <button className="ey-button">Confirmar</button>
                            <div style={{ margin: '10px' }}></div>
                            <button className="ey-button" style={{backgroundColor: '#C30000'}}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalhesVaga