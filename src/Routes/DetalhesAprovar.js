import React, { useState } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { BsCheck } from 'react-icons/bs'

const DetalhesAprovar = ({ data }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const [realize, setrealize] = useState(false);
    const [empodera, setempodera] = useState(false);
    const [career, setcareer] = useState(false);
    const [crescer, setcrescer] = useState(false);
    const [transform, settransform] = useState(false);
    const [techelas, settechelas] = useState(false);
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
                        <div className="detalheCandidato">Candidato: </div>
                        <div className="detalheCandidato">Nascimento: </div>
                        <div className="detalheCandidato">Gênero: </div>
                        <div className="detalheCandidato">Endereço: </div>
                        <div className="detalheCandidato">CPF: </div>
                        <div className="detalheCandidato">RG: </div>
                        <div className="detalheCandidato">Se enquadra como PCD: </div>
                        <div className="detalheCandidato">Faz parte da comunidade LGBTQIAP+?</div>
                        <div className="detalheCandidato">Grupo de etinia: </div>
                        <div className="detalheCandidato">Povos Originários: </div>
                        <div className="detalheCandidato">Renta Familiar: </div>
                        <div style={{ display: 'flex' }}>
                            <div className="sendApply reset-margin">Aprovar Inscrição</div>
                            <div style={{ margin: '10px' }}></div>
                            <div className="sendDenny reset-margin">Reprovar Inscrição</div>
                        </div>
                    </div>
                    <div className="sub50">
                        <div style={{ display: 'flex', margin: '2rem 0' }}>
                            <div style={{ justifyContent: 'flex-end', width: '100%', textAlign: 'end', fontSize: '13px', color: 'white', fontWeight: 'bold' }}>Status da Inscrição:</div>
                        </div>
                        <div>
                            <h3 className='detalheCandidato'>Selecione os programas de capacitação que serão recomendados:</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>Realize LAS</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setrealize(!realize)}>{realize && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>EY Empodera</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setempodera(!empodera)}>{empodera && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>IP Career</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setcareer(!career)}>{career && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>Crescer EY</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setcrescer(!crescer)}>{crescer && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>Transformação Profissional </p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => settransform(!transform)}>{transform && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>Tech para elas</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => settechelas(!techelas)}>{techelas && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" hidden={showModal}>
                    <div className="modal-container">
                        <textarea className='modal-ta'></textarea>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div className="sendApply reset-margin">Confirmar</div>
                            <div style={{ margin: '10px' }}></div>
                            <div className="sendDenny reset-margin">Cancelar</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetalhesAprovar