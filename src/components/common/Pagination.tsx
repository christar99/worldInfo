import { useState, ChangeEvent, useMemo } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PagenationArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
`;

const MovePageButton = styled.div`
    display: flex;
    font-size: 3rem;

    :hover {
        cursor: pointer;
    }

    svg {
        :hover {
            color: #3b5998;
        }
    }
`;

const PageSelect = styled.select`
    width: 50px;
    height: 30px;

    option {
        padding: 10px;
    }

    :hover {
        cursor: pointer;
    }
`;

const LimitSelect = styled.select`
    width: 120px;
    height: 30px;

    :hover {
        cursor: pointer;
    }
`;

type PaginationProps = {
    totalElement: number;
};

function Pagination({ totalElement }: PaginationProps) {
    const navigate = useNavigate();
    const [limit, setLimit] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPage = useMemo(() => {
        return new Array(Math.ceil(totalElement / limit)).fill(0).map((notUse, index) => {
            return index + 1;
        });
    }, [totalElement, limit]);

    const handleSetLimit = ((e: ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setCurrentPage(1);
        navigate(`/?page=1&limit=${e.target.value}`);
    })

    const handleSetPage = ((buttonClick?: string, e?: ChangeEvent<HTMLSelectElement>) => {
        if(e !== undefined) {
            setCurrentPage(Number(e.target.value));
            navigate(`/?page=${e.target.value}&limit=${limit}`);
        }
        else {
            let page = 0;
            if(buttonClick === 'next') {
                page = currentPage === totalPage.length ? totalPage.length  : currentPage + 1;
            }
            else {
                page = currentPage === 1 ? 1 : currentPage - 1;
            }
            setCurrentPage(page);
            navigate(`/?page=${page}&limit=${limit}`);
        }
    })

    return (
        <PagenationArea>
            <MovePageButton>
                <FaAngleLeft onClick={() => handleSetPage('prev')} title="이전페이지"/>
                <FaAngleRight onClick={() => handleSetPage('next')} title="다음페이지"/>
            </MovePageButton>
            <span>페이지</span>
            <PageSelect onChange={(e) => handleSetPage('', e)} value={currentPage}>
                {totalPage.map((page) => {
                    return <option value={page} key={page}>{page}</option>
                })}
            </PageSelect>
            <LimitSelect onChange={handleSetLimit} value={limit}>
                <option value={10}>10개씩 보기</option>
                <option value={20}>20개씩 보기</option>
                <option value={30}>30개씩 보기</option>
            </LimitSelect>
        </PagenationArea>
    )
}

export default Pagination;