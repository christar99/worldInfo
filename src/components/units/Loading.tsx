import styled from "styled-components";

const LoadingWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;

function Loading() {
    return (
        <LoadingWrap>
            Research.IO
        </LoadingWrap>
    )
};

export default Loading;