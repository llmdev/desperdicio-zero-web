import styled from 'styled-components';

export const ReservatorioWrapper = styled('div')`
    width: 1200px;
    background-color: #004875;
    border-radius: 5px;
    &:nth-child(2n){
        background-color: #0097F5;
    }
`
export const ReservatorioNome = styled('h4')`
    color: white;
    padding: 2em 0 0 1.5em;
    font-size: 24px;
    margin: 0;
}

`
export const ReservatorioLista = styled('ul')`
    color: white;
    height: 100%;
    list-style: none;
`
export const ReservatorioLinha = styled('li')`     
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
`
export const ReservatorioChave = styled('p')`
    font-size: 18px;
    padding-top: 0.5em;
    display: flex;
    align-items: center;

`
export const ReservatorioValor = styled('span')`
    font-weight: 700;
    font-size: 20px;
    padding-right: 1em;
`
