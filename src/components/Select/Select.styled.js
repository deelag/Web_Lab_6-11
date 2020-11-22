import styled from "styled-components"

export const SelectForm = styled.form`
    display: flex;
    width: 630px;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
`

export const SelectBox = styled.select`
    color: black;
    width: 200px;
    text-align: center;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    font-size: 20px;
    padding: 6px 10px;
    border-radius: 2px;
    transition: all 0.3s ease-out;
`
export const Option = styled.option`
    background-color: #254e58;
    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`