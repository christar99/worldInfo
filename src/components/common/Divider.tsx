import styled from "styled-components"

const Divder = styled.div<{ mt?: number, mb?: number, position?: string }>`
    width: 100%;
    height: 0px;
    border-top: 1px solid;
    margin: 10px 0;
    margin-top: ${props => props.mt + 'px'};
    margin-bottom: ${props => props.mb + 'px'};
    position: ${props => props.position};
`;

type marginProps = {
    mt? : number;
    mb? : number;
    position? : string;
};

function Divider({mt, mb, position}: marginProps) {
    return (
        <Divder mt={mt} mb={mb} position={position}/>
    )
}

export default Divider;