import styled from 'styled-components';

const Text = styled.p`
    font-family: 'Roboto';
    font-weight: ${props => props.weight ? props.weight : 'normal'};
    font-size: ${props => props.size ? props.size : 'initial'};
    color: ${props => props.color ? props.color : '#697279'};
`

export default Text;
