import React from "react";
import CardButton  from "../components/cardButton/cardButton.component";
import { Row } from "../components/cardButton/cardButton.style";

function Home() {
  return (
  <div>
    <h2>Serviços</h2>
      <Row>
        <CardButton>Reportar vazamento</CardButton>
        <CardButton>Alerta de Inundações</CardButton>
        <CardButton>Níveis de Reservatórios</CardButton>
      </Row>
  </div>
  )
}

export default React.memo(Home);