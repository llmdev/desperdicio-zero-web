import React from "react";
import { BotaoSubmit } from "../components/Botoes/BotaoSubmit/BotaoSubmit.style";
import Caminho from "../components/Caminho/Caminho.component";
import { Dropdown } from "../components/DropdownEstados/DropdownEstados.style";
import Noticias from "../components/noticias/noticias.component";
import { Row } from "../components/Row";
import imagem1 from "../assets/image-um.png"
import imagem2 from "../assets/image-dois.png"
import imagem3 from "../assets/image-tres.png"
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
            <Titulo2>Porque economizar água?</Titulo2>
            <Row>
              <Noticias name="Machete Bombatisca" text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem1} alt="foto de agua"/>
              <Noticias name="Machete Alarmante" text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem2} alt="foto de agua"/>
              <Noticias name="Machete Envolvente" text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={imagem3} alt="foto de agua"/>
            </Row>
        </div>

  )
}
export default React.memo(ReservatorioVerificar);