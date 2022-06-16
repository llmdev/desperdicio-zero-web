import React from "react";
import { CaminhoAtual, PaginaAtual, PaginaInicial } from "./Caminho.style";

function Caminho ({atual}){
    return(
            <CaminhoAtual>
                <PaginaInicial>
                    Página Inicial {'>'}
                </PaginaInicial>
                <PaginaAtual>
                    {atual}
                </PaginaAtual>
            </CaminhoAtual>
    );
}

export default React.memo(Caminho);