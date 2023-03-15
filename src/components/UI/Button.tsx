import React from "react";
import styled from "styled-components";

interface Props {
    title: string;
}

function Button({ title }: Props) {
    return <Button1>{title}</Button1>;
}

const Button1 = styled.button`
    width: 102px;
    height: 36px;
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.pointColor};
    border-radius: 20px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: ${(props) => props.theme.colors.pointColor};
    margin-left: 580px;

    &:hover {
        background-color: ${(props) => props.theme.colors.pointColor};
        color: ${(props) => props.theme.colors.white};
    }
`;

export default Button;
