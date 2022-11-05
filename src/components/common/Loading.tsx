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
            놀러가자 첫화면
        </LoadingWrap>
    )
};

export default Loading;