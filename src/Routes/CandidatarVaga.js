import React, { useState, useEffect } from 'react';
import '../App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { particlesConf } from '../assets/particlesConfig';
import Header from '../componentes/header/Header';
import { useLocation } from 'react-router';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../models/firebase-config";

function CandidatarVaga() {

    const location = useLocation();

    const [cpf, setcpf] = useState("");
    const [vaga, setvaga] = useState({});
    const [enableCandidato, setenableCandidato] = useState(false);
    const [imageUpload, setImageUpload] = useState("");

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log('container ok');
    };

    useEffect(() => {
        let novaVaga = location.state.vaga;
        novaVaga.external = location.state.external;
        setvaga(novaVaga);
        setcpf(location.state.cpf);
        console.log(location.state)
    }, [])

    const uploadFile = async () => {
        if (!imageUpload) return;

        const imageRef = ref(storage, `images/${imageUpload.name}`);
        console.log(imageUpload)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                axios.post('/vagas/applyVaga', {
                    headers: {
                        'Accept': 'application/json',
                    },
                    data: {
                        vaga,
                        cpf,
                        url
                    }
                }).then(res => {
                    if (res && res.data) {
                        setenableCandidato(true)
                    }
                }).catch(err => console.error(err.response.data));
            });
        }).catch(err => console.error(err));
    };

    return (
        <div>
            <Header rota="/candidato/main" />
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConf}
            />

            <div className='adjustParticles'>
                <div className="divideContainer">
                    <div className="divideContainer-sub">
                        <h3 className="detalheVaga">Vaga: {vaga.titulo}</h3>
                        <br />
                        <br />
                        <h3 className="detalheVaga">Detalhes da Vaga:</h3>
                        <h3 className="detalheVaga">Level: {vaga.level}</h3>
                        <h3 className="detalheVaga">Publicação: {vaga.publicacao}</h3>
                        <h3 className="detalheVaga">Local: {vaga.local}</h3>
                        <h3 className="detalheVaga">Salário: {vaga.salario}</h3>
                        <h3 className="detalheVaga">Setor: {vaga.setor}</h3>
                        <h3 className="detalheVaga">ID: {vaga.idVaga}</h3>
                    </div>
                    <div className="divideContainer-sub">
                        <div className="divideContainer-sub-center">
                            <div>
                                <p>Seu currículo: </p>
                                <input type="file" accept="application/pdf" name="cv" id="cv" onChange={(event) => {
                                    setImageUpload(event.target.files[0]);
                                }} />
                                <div>
                                    <button className="sendApply" disabled={enableCandidato} onClick={uploadFile}>Se Candidatar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatarVaga