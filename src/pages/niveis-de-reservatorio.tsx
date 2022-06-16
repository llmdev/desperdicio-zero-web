import React from "react";
import { BotaoSubmit } from "../components/Botoes/BotaoSubmit/BotaoSubmit.style";
import Caminho from "../components/Caminho/Caminho.component";
import { Dropdown } from "../components/DropdownEstados/DropdownEstados.style";
import { Texto } from "../components/Texto";
import { Titulo, Titulo2 } from "../components/Titulo";

function ReservatorioVerificar() {
  return (
        <div>
           <Caminho atual="Nível dos Reservatórios" />
            <Titulo>Nível dos Reservatórios</Titulo>
            <Texto>Veja o nívei atual do reservatório que abastece a sua cidade.</Texto>
            <Titulo2>Verificar nível:</Titulo2>   
            <Texto>Informe seu estado</Texto>
            <Dropdown placeholder="Selecione seu estado" />
            <BotaoSubmit frase="Buscar"/> 
        </div>

  )
}
export default React.memo(ReservatorioVerificar);