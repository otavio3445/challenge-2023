import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import DataTable from '../componentes/DataTable/DataTable';
import { useLocation } from 'react-router';
import axios from 'axios';


function AprovarCandidaturas() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    const location = useLocation();

    const [nome, setnome] = useState("");
    const [candidatos, setcandidatos] = useState([]);
    const [candidatosFull, setcandidatosFull] = useState([]);

    useEffect(() => {
        const getCandidatos = async () => {
            const res = await axios.get('/candidatos/listCandidatos');
            if (res && res.data) {
                let aux = [];
                let date = new Date().getFullYear()
                res.data.forEach(candidato => {
                    let nascAno = Number(candidato.nascimento.substr(6, candidato.nascimento.length));
                    let nasc = date - nascAno;

                    aux.push({
                        nome: candidato.nome,
                        idade: nasc,
                        etinia: candidato.etinia,
                        pcd: candidato.pcd,
                        povos: candidato.povos,
                        lgbt: candidato.lgbt,
                        renda: candidato.renda
                    },);
                })
                setcandidatos(aux);
                setcandidatosFull(res.data)
            } else {
                console.log(res)
            }
        }
        getCandidatos();
        setnome(location.state.nome || "")
    }, [])

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
                <DataTable
                    headers={['Nome', 'Idade', 'Etinia', 'PCD', 'Povos Originários', 'LGBT', 'Renda Familiar']}
                    colorFilter={'candidatos'}
                    data={candidatos}
                    dataFull={candidatosFull}
                    route="/recrutador/aprovar/detalhes"
                />
            </div>
        </div>
    )
}

export default AprovarCandidaturas