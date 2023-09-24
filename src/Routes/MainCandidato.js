import React, { useEffect, useState } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import Slider from '../componentes/verticalSlider/Slider';
import axios from 'axios';
import { useLocation } from 'react-router';

function MainCandidato() {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const location = useLocation();

    const [vagas, setvagas] = useState([]);
    const [cpf, setcpf] = useState("");

    useEffect(() => {
        setcpf(location.state.cpf);
        const getVagas = async () => {
            const res = await axios.get('/vagas/listVagas');
            if (res && res.data) {
                setvagas(res.data)
            } else {
                console.log(res)
            }
        }
        getVagas();
    }, [])

    return (
        <div className="MainCandidato">
            <Header rota="/candidato/main" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />
            <div className='adjustParticles'>
                <Slider vagas={vagas} external={false} cpf={cpf}/>

                <div className="instituteInfos">
                    <p>Conheça mais sobre o programa</p>
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
            </div>
        </div>
    );
}

export default MainCandidato;
