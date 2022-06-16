import styled from 'styled-components';

export const DisclaimerWrapper = styled('div')`
    margin: 1em 0;
    `
export const DisclaimerComponent = styled('div')`
    background-color: ${({type}) => type === 'warning' ? '#F7D200' : '#1f9900'};
    padding: 0 1em;
    display: flex;
    border-radius: 5px;
`
export const DisclaimerIcon = styled('img')`
    padding-right: 1em;
`
export const DisclaimerTexto = styled('p')`
    color: ${({type}) => type === 'warning' ? 'black' : 'white'};
`
