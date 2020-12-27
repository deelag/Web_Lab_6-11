import styled from "styled-components";
import { Link } from "react-router-dom"

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  
  h1 {
    text-align: center;
    color: #254e58;
    font-size: 2.2em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid #254e58 2px;
    padding: 16px;
    width: 36%;
    margin: 40px auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  }

  
  button {
    border-radius: 2px;
    width: 100%;
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
  margin: 10px auto;

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
  margin: 20px auto;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
    font-size: 1.4em;
    margin: 10px;
    cursor: pointer;
    text-decoration:none;
    color: #254e58;
`;

