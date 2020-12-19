import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  
  h1 {
    text-align: center;
    color: #254e58;
    font-size: 3.6em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 40px auto;
  }

  
  button:nth-child(even) {
    border-radius: 2px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #254e58;
    color: #fff;
    padding: 12px 26px;
    font-size: 20px;
  }

`;

export const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  label {
    font-size: 1.4em;
    color: #254e58;
    margin-left: 1px;
  }

  input {
    padding: 6px;
    font-size: 1.6em;
    border: solid 1px #254e58; 
  }

  .error {
    color: #ff2d2d;
    font-size: 1em;
    margin-left: 2px;
  }
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px auto;

  &>div:nth-child(odd) {
    margin-right: 40px;
  }

`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
