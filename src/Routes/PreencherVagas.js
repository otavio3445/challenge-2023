import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import DataTable from '../componentes/DataTable/DataTable';

function PreencherVagas() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };
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
                <div>
                    <h1 className='title'>Bem Vindo(a) Recrutador(a)</h1>
                </div>
                <DataTable
                    headers={['Nome', 'Data de Publicação', 'Local da vaga', 'Level da vaga']}
                    colorFilter={''}
                    data={[
                        {
                            nome: 'Application Developer',
                            data: '01/05/2020',
                            local: 'São Paulo - SP',
                            level: 'Intern'
                        },
                        {
                            nome: 'Application Developer',
                            data: '01/05/2020',
                            local: 'São Paulo - SP',
                            level: 'Intern'
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default PreencherVagas