import styled from 'styled-components';

export const RelatorioWrapper = styled('div')`
    line-height: 55px;
    display: flex;
    margin-top: 2em;
    background-color: grey;
    align-items: center;
`

export const Relatorio = styled('details')`
    width: 1200px;
    padding: 0 2em;
`
export const RelatorioTitulo = styled('summary')`

`
export const RelatorioLista = styled('ul')`
    margin: 0;
    padding: 0;
`
export const RelatorioLinha = styled('li')`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
    line-height: 25px;
`
export const RelatorioChave = styled('p')`
    align-items: center;
`
export const RelatorioValor = styled('span')`
   font-weight: 700;
   align-items: center;
`
