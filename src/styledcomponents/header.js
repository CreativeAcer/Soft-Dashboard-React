import styled  from 'styled-components';

export const Header = styled.header`
    grid-area: ${props => props.Gridarea || "header"};
    background-color: lawngreen;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;