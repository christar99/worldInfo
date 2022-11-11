import { useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Asd = styled.div`
    font-size: 4rem;
    margin-left: 500px;
`;

function Nations() {
    const match = useMatch("nation/:id");
    return (
        <>
            <Asd>네이스~: {match?.params.id} </Asd>
        </>
    );
}

export default Nations;