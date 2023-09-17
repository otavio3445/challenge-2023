import React, { useState } from 'react'
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
// import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CadastroCandidato() {

    // const history = useNavigate();
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [rg, setRg] = useState('');
    const [genero, setGenero] = useState('');
    const [lgbt, setLgbt] = useState(false);
    const [pcd, setPcd] = useState(false);
    const [povos, setPovos] = useState(false);
    const [etinia, setEtinias] = useState('');
    const [renda, setRenda] = useState('');

    const handleCEP = async (cep) => {
        try {
            cep = cep.replace(/[^0-9]/g, '');
            let res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (res && res.data) {
                setEndereco(res.data.logradouro);
                setBairro(res.data.bairro)
                setUf(res.data.uf)
            }
        } catch (error) {
            console.error('Erro ao consultar o CEP');
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
                <div className="inputContainer">
                    <div style={{ width: '100%' }}>
                        <p>Seu nome completo:</p>
                        <input type="text" className='ey-input-medium' autocomplete="off" onChange={(e) => {
                            setNome(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu CEP:</p>
                        <input type="number" placeholder='00000-000' className='ey-input-medium' autocomplete="off"
                            onChange={(e) => { setCep(e.target.value) }}
                            onBlur={async (e) => {
                                if (cep.length >= 8) {
                                    await handleCEP(cep)
                                }
                            }} />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu Endereço:</p>
                        <input type="text" disabled className='ey-input-medium disabled' autocomplete="off" value={endereco} />
                    </div>
                    <div className="subContainer">
                        <p>Número:</p>
                        <input type="number" placeholder='000' className='ey-input-medium' autocomplete="off" onChange={(e) => {
                            setNumero(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu CPF:</p>
                        <input type="number" placeholder='000.000.000-00' className='ey-input-medium' autocomplete="off" onChange={(e) => {
                            setCpf(e.target.value)
                        }} />
                    </div>
                    <div className="subContainer">
                        <p>Data de Nascimento:</p>
                        <input type="text" placeholder='dd/mm/yyyy' className='ey-input-medium' autocomplete="off" onChange={(e) => {
                            setNascimento(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Seu RG:</p>
                        <input type="number" placeholder='00.000.000-0' className='ey-input-medium' autocomplete="off" onChange={(e) => {
                            setRg(e.target.value)
                        }} />
                    </div>
                    <div className="subContainer">
                        <p>Seu Gênero:</p>
                        <select className='ey-input-medium' onChange={(e) => {
                            setGenero(e.target.value)
                        }}>
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
                        <RadioGroup horizontal onChange={(e) => {
                            if (e === 'nao') {
                                setLgbt(false)
                            } else {
                                setLgbt(true)
                            }
                        }}>
                            <ReversedRadioButton value="sim" pointColor="#F8D000" >
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
                        <RadioGroup horizontal onChange={(e) => {
                            if (e === 'nao') {
                                setPcd(false)
                            } else {
                                setPcd(true)
                            }
                        }}>
                            <ReversedRadioButton value="sim" pointColor="#F8D000">
                                Sim
                            </ReversedRadioButton>
                            <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                Não
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>
                </div>
                <div className="inputContainer">
                    <div style={{ width: '100%' }}>
                        <p>Faz parte de algum povo originário?</p>
                        <RadioGroup horizontal onChange={(e) => {
                            if (e === 'nao') {
                                setPovos(false)
                            } else {
                                setPovos(true)
                            }
                        }}>
                            <ReversedRadioButton value="sim" pointColor="#F8D000">
                                Sim
                            </ReversedRadioButton>
                            <ReversedRadioButton value="nao" pointColor="#F8D000" >
                                Não
                            </ReversedRadioButton>
                        </RadioGroup>
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Sua etinia:</p>
                        <select className='ey-input-medium' onChange={(e) => {
                            setEtinias(e.target.value)
                        }}>
                            <option selected disabled>Selecione sua etinia</option>
                            <option>Branca</option>
                            <option>Preta</option>
                            <option>Asiática</option>
                            <option>Indígena</option>
                            <option>Outro</option>
                        </select>
                    </div>
                </div>
                <div className="inputContainer">
                    <div className="subContainer">
                        <p>Quantos salários mínimos é sua renda familiar?</p>
                        <select className='ey-input-medium' onChange={(e) => {
                            if (e.target.selectedIndex === 1) {
                                setRenda('Classe A')
                            } else if (e.target.selectedIndex === 2) {
                                setRenda('Classe B')
                            } else if (e.target.selectedIndex === 3) {
                                setRenda('Classe C')
                            } else {
                                setRenda('Classe D')
                            }
                        }}>
                            <option selected disabled>Selecione sua renda</option>
                            <option>de 10 a 20 salários mínimos</option>
                            <option>de 4 a 10 salários mínimos</option>
                            <option>de 2 a 4 salários mínimos</option>
                            <option>recebe até 2 salários mínimos</option>
                        </select>
                    </div>
                </div>
                <div className="login">
                    <button className='ey-button' onClick={async () => {
                        let candidato = {
                            cpf,
                            nome,
                            cep,
                            endereco,
                            bairro,
                            uf,
                            numero,
                            nascimento,
                            rg,
                            genero,
                            lgbt,
                            pcd,
                            povos,
                            etinia,
                            renda,
                            active: false,
                        }

                        const res = await axios.post('/candidatos/add/candidato', {
                            headers: {
                                'Accept': 'application/json',
                            },
                            candidato
                        });

                        if (res && res.data) {
                            // history('/underReview', {
                            //     state: {
                            //       nome
                            //     }
                            //   });
                        }
                    }}>Enviar Inscrição</button>
                </div>
                <div className="instituteInfos">
                    <p>Conheça mais sobre o EY Institute</p>
                    <br />
                    <p className="small-font">Mais de</p>
                    <p className="big-font">5600</p>
                    <p className="small-font">alunos capacitados</p>
                    <br />
                    <br />
                    <p className="small-font">Total de</p>
                    <p className="big-font">1412</p>
                    <p className="small-font">voluntários cadastrados</p>
                    <br />
                    <br />
                    <p className="small-font">Somando</p>
                    <p className="big-font">10500</p>
                    <p className="small-font">horas de voluntariado</p>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img alt='premio01' width="225px" src='https://assets.ey.com/content/dam/ey-sites/ey-com/pt_br/topics/ey-institute/ey-institute-selo-quarta-edicao.png' />
                        </div>
                        <div>
                            <img alt='premio02' width="225px" src='https://assets.ey.com/content/dam/ey-sites/ey-com/pt_br/topics/ey-institute/ey-institute-selo-quinta-edicao.png' />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default CadastroCandidato