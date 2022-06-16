import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { Aligner } from "../Aligner";
import * as S from './header.style';

function Header() {
  return (
    <S.Wrapper>
    <Aligner>
      <S.AlignerHeader>
      <img src={Logo} />
      <nav>
        <Link to="/">Página inicial</Link>

        <Link to="/sobre-nos">Sobre nós</Link>

        <Link to="/reportar-vazameto">Reportar vazamento</Link>

        <Link to="/niveis-de-reservatorio">Niveis de Reservatório</Link>

        <Link to="/alerta-de-inundacao">Alerta de inundação</Link>
      </nav>
      </S.AlignerHeader>
    </Aligner>
    </S.Wrapper>
  );
}

export default React.memo(Header);
