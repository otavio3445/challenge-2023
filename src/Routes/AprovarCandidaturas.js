import React from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import DataTable from '../componentes/DataTable/DataTable';

function AprovarCandidaturas() {
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
                    headers={['Nome', 'Idade', 'Etinia', 'PCD', 'Povos Originários', 'LGBT', 'Renda Familiar']}
                    colorFilter={'candidatos'}
                    data={[
                        {
                            nome: 'Adriano Souza',
                            idade: 20,
                            etinia: 'Branca',
                            pcd: false,
                            povos: true,
                            lgbt: true,
                            renda: 'Classe B'
                        },
                        {
                            nome: 'Adriano Souza',
                            idade: 20,
                            etinia: 'Branca',
                            pcd: false,
                            povos: true,
                            lgbt: true,
                            renda: 'Classe B'
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default AprovarCandidaturas