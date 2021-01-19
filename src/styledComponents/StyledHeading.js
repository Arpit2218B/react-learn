import styled from 'styled-components';

export const StyledHeading = styled.h1`
    
`

export const StyledButton = styled.button`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.color};
    border-radius: 9px;
    margin: 16px;
    outline: 0px;
    padding: 8px 16px;
`

export const StyledDiv = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
`