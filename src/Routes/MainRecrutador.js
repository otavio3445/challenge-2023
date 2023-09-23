import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { useLocation, useHistory } from 'react-router';
import axios from 'axios';

function MainRecrutador() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const location = useLocation();
    const history = useHistory();

    const [nome, setnome] = useState("");
    const [dados, setdados] = useState({});

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/recrutadores/listHomeData');
            if (res && res.data) {
                setdados(res.data)
            }
        }
        getData();
        setnome(location.state.nome || "")
    }, []);

    const handlePreencherVagas = async () => {
        history.push('/recrutador/vaga', { nome: nome })
    }
    const handleAprovarCandidaturas = async () => {
        history.push('/recrutador/aprovar', { nome: nome })
    }


    return (
        <div>
            <Header rota="/recrutador/main" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

            <div className='adjustParticles'>
                <div>
                    <h1 className='title'>Bem Vindo(a) Recrutador(a) {nome}</h1>
                </div>
                <div className="divideContainer">
                    <div className="sub65">
                        <div className="btnRecrutadorHolder">
                            <div className="btnRecrutadorUp">
                                <div className="btnRecrutador" onClick={handlePreencherVagas}>Preencher vagas</div>
                            </div>
                            <div className="btnRecrutadorDown" onClick={handleAprovarCandidaturas}>
                                <div className="btnRecrutador">Aprovar Inscrições</div>
                            </div>
                        </div>
                    </div>
                    <div className="sub35">
                        <div className="instituteInfos reset-position">
                            <p className="big-font">{dados.candidatos}</p>
                            <p className="small-font">Novas Inscrições</p>
                            <br />
                            <br />
                            <p className="big-font">{dados.vagas}</p>
                            <p className="small-font">Novas Vagas Abertas</p>
                            <br />
                            <br />
                            <p className="big-font">{dados.candidaturas}</p>
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