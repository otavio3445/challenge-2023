import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecrutadorLogin from './Routes/RecrutadorLogin';
import CadastroCandidato from './Routes/CadastroCandidato';
import MainCandidato from './Routes/MainCandidato';
import EditarCandidato from './Routes/EditarCandidato';
import CandidatarVaga from './Routes/CandidatarVaga';
import UnderReview from './Routes/UnderReview';
import MainRecrutador from './Routes/MainRecrutador';
import AprovarCandidaturas from './Routes/AprovarCandidaturas';
import DetalhesAprovar from './Routes/DetalhesAprovar';
import PreencherVagas from './Routes/PreencherVagas';
import DetalhesVaga from './Routes/DetalhesVaga';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/recrutador",
    element: <RecrutadorLogin />
  },
  {
    path: "/cadastrarCandidato",
    element: <CadastroCandidato />
  },
  {
    path: "/candidato/main",
    element: <MainCandidato />
  },
  {
    path: "/candidato",
    element: <CadastroCandidato />
  },
  {
    path: "/candidato/editar",
    element: <EditarCandidato />
  },
  {
    path: "/candidato/vaga",
    element: <CandidatarVaga />
  },
  {
    path: "/underReview",
    element: <UnderReview />
  },
  {
    path: "/recrutador/main",
    element: <MainRecrutador />
  },
  {
    path: "/recrutador/vagas",
    element: <PreencherVagas />
  },
  {
    path: "/recrutador/vagas/detalhes",
    element: <DetalhesVaga />
  },
  {
    path: "/recrutador/aprovar",
    element: <AprovarCandidaturas />
  },
  {
    path: "/recrutador/aprovar/detalhes",
    element: <DetalhesAprovar />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
