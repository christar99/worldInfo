import styled from "styled-components";
import { Oval } from "react-loader-spinner";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #000;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function ApiPending() {
    return (
        <Background>
            <Oval
                width={70}
                height={70}
                color={"#a5a5a5"}
                secondaryColor={"#555"}
            />
        </Background>
    )
}

export default ApiPending;