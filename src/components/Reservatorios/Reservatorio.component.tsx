import React from "react";
import { ReservatorioChave, ReservatorioLinha, ReservatorioLista, ReservatorioNome, ReservatorioValor, ReservatorioWrapper } from "./Reservatorio.style";

function Reservatorio({nome}){
    return(
        <ReservatorioWrapper>
            <ReservatorioNome>{nome}</ReservatorioNome>
            <ReservatorioLista>
                <ReservatorioLinha>
                    <ReservatorioChave>Volume armazenado</ReservatorioChave>
                    <ReservatorioValor>22,8%</ReservatorioValor>
                </ReservatorioLinha>
                <ReservatorioLinha>
                    <ReservatorioChave>Pluviometria do dia</ReservatorioChave>
                    <ReservatorioValor>7,3 mm</ReservatorioValor>
                </ReservatorioLinha>
                <ReservatorioLinha>
                    <ReservatorioChave>Acumulada no mês</ReservatorioChave>
                    <ReservatorioValor>186,4 mm</ReservatorioValor>
                </ReservatorioLinha>
                <ReservatorioLinha>
                    <ReservatorioChave>Média histórica do mês</ReservatorioChave>
                    <ReservatorioValor>172,4 mm</ReservatorioValor>
                </ReservatorioLinha>

            </ReservatorioLista>
        </ReservatorioWrapper>
    );
}

export default React.memo(Reservatorio);
