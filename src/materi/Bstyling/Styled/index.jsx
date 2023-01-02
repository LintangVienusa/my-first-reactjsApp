import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid #5f5f5f;
    background-color: rgb(255, 255, 255);
    color: #5f5f5f;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    
    border-color: #2196f3;
    color: dodgerblue;
    border-radius: 4px;
    
    &:hover{
        background: #2196f3;
        color: #f9f9f9;
    }
    
`;

export default class Styled extends React.Component {

    render() {
        return (
            <div>
                <Button>Start Learning</Button>
            </div>
        )
    }
}