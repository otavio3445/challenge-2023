import React from 'react';
import { Route, Switch } from "react-router-dom";
import CandidatoLogin from './Routes/CandidatoLogin';
import CadastroCandidato from './Routes/CadastroCandidato';
import MainCandidato from './Routes/MainCandidato';
import CandidatarVaga from './Routes/CandidatarVaga';
import EditarCandidato from './Routes/EditarCandidato';
import RecrutadorLogin from './Routes/RecrutadorLogin';
import PreencherVagas from './Routes/PreencherVagas';
import DetalhesVaga from './Routes/DetalhesVaga';
import AprovarCandidaturas from './Routes/AprovarCandidaturas';
import DetalhesAprovar from './Routes/DetalhesAprovar';
import UnderReview from './Routes/UnderReview';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><CandidatoLogin /></Route>
        <Route exact path="/recrutador"><RecrutadorLogin /></Route>
        <Route exact path="/recrutador/aprovar"><AprovarCandidaturas /></Route>
        <Route exact path="/recrutador/aprovar/detalhes"><DetalhesAprovar /></Route>
        <Route exact path="/recrutador/vaga"><PreencherVagas /></Route>
        <Route exact path="/recrutador/vaga/detalhes"><DetalhesVaga /></Route>
        <Route exact path="/candidato"><CadastroCandidato /></Route>
        <Route exact path="/candidato/main"><MainCandidato /></Route>
        <Route exact path="/candidato/vaga"><CandidatarVaga /></Route>
        <Route exact path="/candidato/editar"><EditarCandidato /></Route>
        <Route exact path="/review"><UnderReview /></Route>
      </Switch>
    </div>
  )
}

export default App