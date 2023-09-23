import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { BsCheck } from 'react-icons/bs';
import { useLocation, useHistory } from 'react-router';
import axios from 'axios';

const DetalhesAprovar = ({ data }) => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const location = useLocation();
    const history = useHistory();
    const [candidatura, setCandidatura] = useState({});

    const [realize, setrealize] = useState(false);
    const [empodera, setempodera] = useState(false);
    const [showModal, setshowModal] = useState(true);

    const [reason, setreason] = useState("");

    useEffect(() => {
        setCandidatura(location.state.vaga)
    }, [])
    
    const handlerReprovacao = async () => {
        console.log(reason)
        console.log(candidatura.cpf)
        let res = await axios.post('/recrutadores/denyCandidato', {
            headers: {
              'Accept': 'application/json',
            },
            data: {
                cpf: candidatura.cpf,
                reason
            }
          });
          if (res && res.data) {
                history.goBack()
          }
    }
    const handlerAprovacao = async () => {
        let recomendacoes = []
        if (empodera) {
            recomendacoes.push("Bootcamp Rocketseat")
        }
        if (realize) {
            recomendacoes.push("Woman in Tech")
        }
        let res = await axios.post('/recrutadores/approveCandidato', {
            headers: {
              'Accept': 'application/json',
            },
            data: {
                cpf: candidatura.cpf,
                reason: recomendacoes
            }
          });
        if (res && res.data) {
            history.goBack()
        }
    }

    return (
        <div>
            <Header rota="candidato" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

            <div className='adjustParticles'>
                <div className="divideContainer">
                    <div className="sub50">
                        <div className="detalheCandidato">Candidato: {candidatura.nome}</div>
                        <div className="detalheCandidato">Nascimento: {candidatura.nascimento}</div>
                        <div className="detalheCandidato">Gênero: {candidatura.genero}</div>
                        <div className="detalheCandidato">Endereço: {candidatura.endereco}, {candidatura.numero}</div>
                        <div className="detalheCandidato">CPF: {candidatura.cpf}</div>
                        <div className="detalheCandidato">RG: {candidatura.rg}</div>
                        <div className="detalheCandidato">Se enquadra como PCD: {candidatura.pcd}</div>
                        <div className="detalheCandidato">Faz parte da comunidade LGBTQIAP+? {candidatura.lgbt}</div>
                        <div className="detalheCandidato">Grupo de etinia: {candidatura.etinia}</div>
                        <div className="detalheCandidato">Povos Originários: {candidatura.povos}</div>
                        <div className="detalheCandidato">Renda Familiar: {candidatura.renda}</div>
                        <div style={{ display: 'flex' }}>
                            <div className="sendApply reset-margin" onClick={handlerAprovacao}>Aprovar Inscrição</div>
                            <div style={{ margin: '10px' }}></div>
                            <div className="sendDenny reset-margin" onClick={() => {
                                setshowModal(!showModal)
                            }}>Reprovar Inscrição</div>
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
                                    <p style={{ fontSize: '16px' }}>Woman in Tech</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setrealize(!realize)}>{realize && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                                <div className="programCard">
                                    <p style={{ fontSize: '16px' }}>Bootcamp Rocketseat</p>
                                    <div style={{ margin: '0 auto', width: '100%' }}>
                                        <div className="checkBoxEy" onClick={() => setempodera(!empodera)}>{empodera && <BsCheck color='black' size='30px' />}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" hidden={showModal}>
                    <div className="modal-container">
                        <textarea className='modal-ta' placeholder='Escreva o motivo da reprovação' onChange={(e) => {
                            setreason(e.target.value)
                        }}></textarea>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div className="sendApply reset-margin"onClick={handlerReprovacao}>Confirmar</div>
                            <div style={{ margin: '10px' }}></div>
                            <div className="sendDenny reset-margin" onClick={() => setshowModal(!showModal)} >Cancelar</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetalhesAprovar