import styled from 'styled-components';

export const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 15% 1fr;
    grid-template-rows: 10% 1fr;
    grid-template-areas: 
    "sidebar header"
    "sidebar main";
`;
