import React from "react";
import Caminho from "../components/Caminho/Caminho.component";
import { Texto } from "../components/Texto";
import { Titulo } from "../components/Titulo";

function SobreNos() {
  return (
        <div>
           <Caminho atual="Sobre Nós" />
            <Titulo>Sobre Nós</Titulo>
            <Texto>Nossa proposta é poder mapear todas as áreas com vazamento afim 
            de facilitar a comunicação para sanar o problema o mais rápido possível e 
            criar um histórico para fazer previsões em um futuro.</Texto>
            <Texto>Você poderá visualizar 
            o nivél das represas da sua cidade, ter previsões de chuva 
            para alagamentos e deslisamento de terra, recebendo assim um aviso para prevensão 
            de danos.</Texto>
        </div>

  )
}
export default React.memo(SobreNos);