import React, { useEffect, useState } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { useLocation } from 'react-router';

function CandidatarVaga() {

    const location = useLocation();

    const [vaga, setvaga] = useState({})

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    useEffect(() => {
        console.log(location)
    }, [])
    

    return (
        <div>
            <Header rota="candidato" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

        </div>
    )
}

export default CandidatarVaga