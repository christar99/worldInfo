import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e7e7e7;
`;

const NotFoundContainer = styled.div``;

const Title = styled.p`
    font-size: 2rem;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;
const ButtonGroup = styled.div`
    display: flex;
`;

const Button = styled.button`
    padding: 5px 10px;
    font-size: 1.5rem;
    margin-right: 20px;
`;

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <NotFoundWrap>
            <NotFoundContainer>
                <Title>
                    요청하신 페이지를 찾지 못했어요.
                </Title>
                <Description>
                    지금 입력하신 주소의 페이지는 <br />
                    사라졌거나 다른페이지로 변경되었어요. <br />
                    주소를 다시 확인해 주세요.
                </Description>
                <ButtonGroup>
                    <Button onClick={() => navigate(-1)}>
                        이전 페이지
                    </Button>
                    <Button onClick={() => navigate('/')}>홈으로 이동</Button>
                </ButtonGroup>
            </NotFoundContainer>
        </NotFoundWrap>
    )
}

export default  PageNotFound;