import React from "react";
import styled from "styled-components";
import Counter from '../Counter';

const imgProduct = 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;
const Desc = styled.p`
    font-size: small;
`;

export default class Product extends React.Component{

    handleValue = (value) => {
        this.props.rangValue(value);
    }

    render() {
        return (
            <div>
                <CardContainer>
                    <Image src={imgProduct} />
                    <Heading>Tittle Card </Heading>
                    <Price>$19.99</Price>
                    <Desc>Loremmm</Desc>
                    <Counter rangValue={this.handleValue}  />
                </CardContainer>
            </div>
        )
    }
}