import styled from 'styled-components';

export const DisclaimerWrapper = styled('div')`
    margin: 1em 0;
    `
export const DisclaimerComponent = styled('div')`
    background-color: ${({type}) => type === 'warning' ? 'yellow' : 'green'};
    padding: 0 1em;
    display: flex;
`
export const DisclaimerIcon = styled('img')`
    padding-right: 1em;
`
export const DisclaimerTexto = styled('p')`
    color: ${({type}) => type === 'warning' ? 'black' : 'white'};
`
