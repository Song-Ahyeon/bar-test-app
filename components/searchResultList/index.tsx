import styled, { keyframes, StyledComponentBase } from "styled-components";

const Wrapper = styled.div`
    cursor: pointer;
    position: relative;
    padding: 10px;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    background: lightgrey;
    box-shadow: 0px 25.697px 72.8081px rgba(59, 77, 129, 0.08);
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: flex;
`;

const SearchResultList = (props: any) => {
    return (
        <div style={{padding: '10px 0'}}>
        <Wrapper>
            <div style={{height: '65px', width: '50px', background: 'white',
                display: 'flex',
                alignItems: 'center', alignContent: 'center', marginRight: '10px'}}>
                <p style={{color: 'black'}}>img</p>
            </div>
            <div>
                <p style={{color: 'black'}}>title: </p>
                <p style={{color: 'black'}}>author: </p>
                <p style={{color: 'black'}}>info: </p>
            </div>
        </Wrapper>     
        </div>
    )
}

export default SearchResultList;