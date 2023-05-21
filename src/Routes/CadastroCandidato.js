import React from 'react'
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';

function CadastroCandidato() {
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
                <div className="inputContainer">
                    <div style={{ width: '100%' }}>
                        <p>Seu nome completo:</p>
                        <input type="text" className='ey-input-medium' />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu CEP:</p>
                        <input type="number" placeholder='00000-000' className='ey-input-medium' />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu Endereço:</p>
                        <input type="text" disabled className='ey-input-medium disabled' />
                    </div>
                    <div className="subContainer">
                        <p>Número:</p>
                        <input type="number" placeholder='000' className='ey-input-medium' />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu CPF:</p>
                        <input type="number" placeholder='000.000.000-00' className='ey-input-medium' />
                    </div>
                    <div className="subContainer">
                        <p>Data de Nascimento:</p>
                        <input type="text" placeholder='dd/mm/yyyy' className='ey-input-medium' />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu RG:</p>
                        <input type="number" placeholder='00.000.000-0' className='ey-input-medium' />
                    </div>
                    <div className="subContainer">
                        <p>Seu Gênero:</p>
                        <select className='ey-input-medium'>
                            <option selected disabled>Selecione seu Gênero</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Outro</option>
                        </select>
                    </div>
                </div>
                <div className="inputContainer">
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
                <div className="inputContainer">
                    <div style={{ width: '100%' }}>
                        <p>Se enquadra como PCD?</p>
                        <RadioGroup horizontal >
                            <ReversedRadioButton value="sim" pointColor="#F8D000">
                                Sim
                            </ReversedRadioButton>
                            <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                Não
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>
                    <div className='correctRadioInput'>
                        <input className='ey-input-medium' type="text" name="" id="" />
                    </div>
                </div>
                <div className="inputContainer">
                    <div style={{ width: '100%' }}>
                        <p>Faz parte de algum povo originário?</p>
                        <RadioGroup horizontal >
                            <ReversedRadioButton value="sim" pointColor="#F8D000">
                                Sim
                            </ReversedRadioButton>
                            <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                Não
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>
                    <div className='correctRadioInput'>
                        <input className='ey-input-medium' type="text" name="" id="" />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Sua etinia:</p>
                        <select className='ey-input-medium'>
                            <option selected disabled>Selecione sua etinia</option>
                            <option>Branca</option>
                            <option>Preta</option>
                            <option>Parda</option>
                            <option>Outro</option>
                        </select>
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Quantos salários mínimos é sua renda familiar?</p>
                        <select className='ey-input-medium'>
                            <option selected disabled>Selecione sua renda</option>
                            <option>de 10 a 20 salários mínimos</option>
                            <option>de 4 a 10 salários mínimos</option>
                            <option>de 2 a 4 salários mínimos</option>
                            <option>recebe até 2 salários mínimos</option>
                        </select>
                    </div>
                </div>
                <div className="login">
                    <button className='ey-button' onClick={() => window.location.href = "/gestaoDeCandidatos"}>Enviar Inscrição</button>
                </div>
                <div className="instituteInfos">
                    <p>Conheça mais sobre o EY Institute</p>
                    <br/>
                    <p className="small-font">Mais de</p>
                    <p className="big-font">5600</p>
                    <p className="small-font">alunos capacitados</p>
                    <br/>
                    <br/>
                    <p className="small-font">Total de</p>
                    <p className="big-font">1412</p>
                    <p className="small-font">voluntários cadastrados</p>
                    <br/>
                    <br/>
                    <p className="small-font">Somando</p>
                    <p className="big-font">10500</p>
                    <p className="small-font">horas de voluntariado</p>
                    <br/>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img alt='premio01' width="225px" src='https://assets.ey.com/content/dam/ey-sites/ey-com/pt_br/topics/ey-institute/ey-institute-selo-quarta-edicao.png'/>
                        </div>
                        <div>
                            <img alt='premio02' width="225px" src='https://assets.ey.com/content/dam/ey-sites/ey-com/pt_br/topics/ey-institute/ey-institute-selo-quinta-edicao.png'/>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default CadastroCandidato