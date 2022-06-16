import React from "react";
import Caminho from "../components/Caminho/Caminho.component";
import VoceEsta from "../components/Caminho/VoceEsta.component";
import { Titulo } from "../components/Titulo";
import Reservatorio from "../components/Reservatorios/Reservatorio.component";
import Disclaimer from "../components/Disclaimer/Disclaimer.component";
import Info from "../assets/info.svg";

function ReservatorioNiveis() {
  return (
    <div>
      <Caminho atual="Niveis de Reservatórios" />
      <Titulo>Niveis de Reservatório</Titulo>
      <VoceEsta cidade="São Paulo" />
      <Reservatorio nome="Alto Tietê" />
      <Reservatorio nome="Cantareira" />
      <Reservatorio nome="Guarapiranga" />
      <Disclaimer
        type="sucess"
        img={Info}
        text="As previsões desta semana são positivas! Confira aqui."
      />
    </div>
  );
}

export default React.memo(ReservatorioNiveis);
