import React from 'react'
import styled from 'styled-components';

const WrapperStyled = styled.div`
    max-width: 1712px;
    width: auto;
    padding: 0 1rem;
`;

function Wrapper(props:any) {
    return (
        <WrapperStyled>
            {props.children}
        </WrapperStyled>
    )
}

export default Wrapper
