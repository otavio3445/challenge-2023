import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import DataTable from '../componentes/DataTable/DataTable';
import { useLocation } from 'react-router';
import axios from 'axios';

function PreencherVagas() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const location = useLocation();

    const [nome, setnome] = useState("");
    const [vagas, setvagas] = useState([]);
    const [vagasFull, setvagasFull] = useState([]);

    useEffect(() => {
        const getVagas = async () => {
            const res = await axios.get('/vagas/listVagas');
            if (res && res.data) {
                let aux = []
                res.data.forEach(vaga => {
                    aux.push({
                        titulo: vaga.titulo,
                        publicacao: vaga.publicacao,
                        local: vaga.local,
                        level: vaga.level
                    });
                })
                setvagas(aux);
                setvagasFull(res.data)
            } else {
                console.log(res)
            }
        }
        getVagas();
        setnome(location.state.nome || "")
    }, [])

    return (
        <div>
            <Header rota="/recrutadores/main" />
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
                <DataTable
                    headers={['Titulo', 'Data de Publicação', 'Local da vaga', 'Level da vaga']}
                    colorFilter={''}
                    data={vagas}
                    dataFull={vagasFull}
                    route="/recrutador/vaga/detalhes"
                    nome={nome}
                />
            </div>
        </div>
    )
}

export default PreencherVagas