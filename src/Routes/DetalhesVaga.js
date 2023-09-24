import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import { useLocation, useHistory } from 'react-router';
import axios from 'axios';
import JSZip from 'jszip'

function DetalhesVaga() {
    const location = useLocation();
    const history = useHistory();
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const [showModal, setshowModal] = useState(true);
    const [nome, setnome] = useState("");
    const [vaga, setvaga] = useState(true);
    const [cpf, setcpf] = useState("");

    const [faixaEtaria, setfaixaEtaria] = useState();
    const [lgbt, setlgbt] = useState();
    const [pcd, setpcd] = useState();
    const [povos, setpovos] = useState();
    const [renda, setrenda] = useState();

    useEffect(() => {
        setvaga(location.state.vaga)
        setnome(location.state.nome)
    }, []);

    const downloadZip = (file) => {
        const a = document.createElement('a');
        a.download = 'cvs.zip';
        const url = URL.createObjectURL(file);
        a.href = url;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    const handlerEncerrarVaga = async() => {
        try {
            const res = await axios.post('/recrutadores/encerrarVaga', {
                headers: {
                    'Accept': 'application/json',
                },
                data: { cpf, vaga }
            });
            console.log(res)
            setshowModal(!showModal);
            history.goBack();
        } catch (error) {
            console.error(error)
        }
    }

    const handleDownloadExternal = async () => {
        try {
            let filtros = {
                active: true,
                external: false,
                idVaga: vaga.idVaga
            }
            let zip = new JSZip();
            let blobs = [];
            let urls = [];

            const res = await axios.post('/recrutadores/downloadCVs', {
                headers: {
                    'Accept': 'application/json',
                },
                data: { filtros }
            });
            urls = res.data || [];
            for (const url of urls) {
                const resUrl = await fetch(url, {mode: 'no-cors'});
                const blob = await resUrl.blob;
                blobs.push(blob)
            }

            blobs.forEach((blob, index) => {
                zip.file(`cv${index}.pdf`, blob);
            })

            const zipFIle = await zip.generateAsync({ type: 'blob' });
            downloadZip(zipFIle);
        } catch (error) {
            console.error(error)
        }
    }

    const handleDownloadInternal = async () => {
        try {
            let filtros = {
                active: true,
                external: false,
                idVaga: vaga.idVaga,
                renda: renda || { $exists: true },
                lgbt: lgbt || { $exists: true },
                pcd: pcd || { $exists: true },
                povos: povos || { $exists: true },
                idade: faixaEtaria || { $exists: true }
            }
            let zip = new JSZip();
            let blobs = [];
            let urls = [];

            const res = await axios.post('/recrutadores/downloadCVs', {
                headers: {
                    'Accept': 'application/json',
                },
                data: { filtros }
            });
            urls = res.data || [];
            for (const url of urls) {
                const resUrl = await fetch(url, {mode: 'no-cors'});
                const blob = await resUrl.blob;
                blobs.push(blob)
            }

            blobs.forEach((blob, index) => {
                zip.file(`cv${index}.pdf`, blob);
            })

            const zipFIle = await zip.generateAsync({ type: 'blob' });
            downloadZip(zipFIle);
        } catch (error) {
            console.error(error.response.data)
        }
    }

    return (
        <div>
            <Header rota="/recrutador/main" state={{nome}}/>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

            <div className='adjustParticles'>
                <div className="divideContainer">
                    <div className="sub50">
                        <h3 className="title reset-padding" style={{ marginTop: '2rem' }}>Vaga: {vaga.titulo}</h3>
                        <div className="detalheCandidato">Detalhes da vaga:</div>
                        <div className="detalheCandidato">Level: {vaga.level}</div>
                        <div className="detalheCandidato">Publicação: {vaga.publicacao}</div>
                        <div className="detalheCandidato">Local: {vaga.local}</div>
                        <div className="detalheCandidato">Salário: {vaga.salario}</div>
                        <div className="detalheCandidato">Responsável: {vaga.responsavel}</div>
                        <div className="detalheCandidato">Setor: {vaga.setor}</div>
                        <div className="detalheCandidato">ID: {vaga.idVaga}</div>
                        <br />
                        <h3 className="title reset-padding reset-margin">Candidaturas externas: {vaga.candidaturasExternas}</h3>
                        <button className="ey-button" onClick={handleDownloadExternal}>Baixar CVs Externos</button>
                    </div>
                    <div className="sub50">
                        <h3 className="title reset-padding" style={{ marginTop: '2rem' }}>Candidaturas Internas: {vaga.candidaturasInternas}</h3>
                        <br />
                        <div className="inputContainer">
                            <div className="subContainer">
                                <p>Faixa Etária:</p>
                                <select className='ey-input-medium' onChange={(e) => {
                                    switch (e.target.selectedIndex) {
                                        case 1:
                                            setfaixaEtaria({ $gte: 18, $lte: 30 })
                                            break;
                                        case 2:
                                            setfaixaEtaria({ $gte: 31, $lte: 40 })
                                            break;
                                        case 3:
                                            setfaixaEtaria({ $gte: 41, $lte: 50 })
                                            break;
                                        case 4:
                                            setfaixaEtaria({ $gte: 51 })
                                            break;
                                    }
                                }}>
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
                                    <RadioGroup horizontal onChange={(e) => {
                                        if (e === 'nao') {
                                            setlgbt(false)
                                        } else {
                                            setlgbt(true)
                                        }
                                    }}>
                                        <ReversedRadioButton value="sim" pointColor="#2ECA72">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#2ECA72" >
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
                                    <RadioGroup horizontal onChange={(e) => {
                                        if (e === 'nao') {
                                            setpcd(false)
                                        } else {
                                            setpcd(true)
                                        }
                                    }}>
                                        <ReversedRadioButton value="sim" pointColor="#2ECA72">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#2ECA72" >
                                            Não
                                        </ReversedRadioButton>
                                    </RadioGroup>
                                </div>
                                <div className='correctRadioInput'></div>
                            </div>
                            <div className="subContainer">
                                <div style={{ width: '90%' }}>
                                    <p>Parte de povos originários?</p>
                                    <RadioGroup horizontal onChange={(e) => {
                                        if (e === 'nao') {
                                            setpovos(false)
                                        } else {
                                            setpovos(true)
                                        }
                                    }}>
                                        <ReversedRadioButton value="sim" pointColor="#2ECA72">
                                            Sim
                                        </ReversedRadioButton>
                                        <ReversedRadioButton value="nao" pointColor="#2ECA72" >
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
                                <select className='ey-input-medium' onChange={(e) => {
                                    setrenda(e.target.value)
                                }}>
                                    <option selected disabled>Selecione a renda familiar</option>
                                    <option>Classe A</option>
                                    <option>Classe B</option>
                                    <option>Classe C</option>
                                    <option>Classe D</option>
                                    <option>Classe E</option>
                                </select>
                            </div>
                        </div>
                        <button className="ey-button" onClick={handleDownloadInternal}>Baixar CVs Internos</button>
                    </div>
                </div>
                <div className="btnEncerrar" onClick={() => {
                    setshowModal(!showModal)
                }}>Encerrar Vaga</div>

                <div className="modal" hidden={showModal}>
                    <div className="modal-container">
                        <input type='text' className='ey-input' placeholder='Digite o CPF do Candidato:' onChange={(e)=> setcpf(e.target.value)}/>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <button className="ey-button" onClick={handlerEncerrarVaga}>Confirmar</button>
                            <div style={{ margin: '10px' }}></div>
                            <button className="ey-button" style={{ backgroundColor: '#C30000' }} onClick={() => setshowModal(!showModal)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalhesVaga