
import styled, { css } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
text-align: left;
color: black;
font-weight: bold;
${({content}) => content === "center" && css`
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: row;
`};
${({ content }) => content === "row" && css`
    justify-content: center;
    width: 100%;
    gap: 10px;
    flex-direction: row;
`}
`;

export const FormContainer = styled.div`
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 2px solid #e8e4e3;
    border-radius: 10px;
    width: 500px;
    height: 660px;
    background-color: #e8e4e3;
`;

export const Button = styled.button`
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 7px;
    background-color: ${({ tipo }) => tipo === "submit" ? "#BAD7E9" : "#F48484"};
    ${({ tipo }) => tipo === "submit" && css`
        color: #2B3467;
        &:hover{
        color: #eee;
        background-color: #2B3467;
        }
    `}
    &:active{
        transform: scale(.9);
    }
`;

export const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Logo',
}))`
    width: 150px;
    height: 150px;
    border-radius: 2%;
    ${({ from }) => from === "card" && css`
        border-radius: 5%;
        width: 300px;
        height: 300px;
    `}
`;