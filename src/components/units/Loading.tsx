import styled from "styled-components";

const LoadingWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;
`;

function Loading() {
    return (
        <LoadingWrap>
            <div>
                WorldInfo
            </div>
            <div>
                세계정보를 한눈에 보자
            </div>
        </LoadingWrap>
    )
};

export default Loading;