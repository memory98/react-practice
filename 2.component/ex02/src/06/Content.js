import React from 'react';
import styled from 'styled-components';

const StyleP = styled.p`
    color: ${(props) => props.color?props.color : '#111'};
    font-size:20px;
    font-weight:bold;
`;
/**
 * 
 * Component Composition(컴포넌트 합성)
 * 
 */
function Content({children,color}) {
    return (
        <StyleP color={color}>
            {children}
        </StyleP>
    );
}

export default Content;