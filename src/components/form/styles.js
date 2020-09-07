import styled from "styled-components";

export const Error = styled.span`
  color: #bf1650;
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export const FormContainer = styled.form`
  margin-top: 12px;
  width: 85%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputContainer = styled.div`
  width: 100%;
  min-height: 90px;

  & input {
    background: #ffffff;
    border: 1px solid #6271f0;
    box-sizing: border-box;
    border-radius: 10px;
    height: 42px;
    width: 100%;
    font-size: 18px;
    font-family: Helvetica, Arial, sans-serif;
    padding: 8px 12px 5px;
    outline: none;
  }

  & label {
    font-size: 18px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin: 0 0 5px 8px;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  width: 200px;
  height: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  color: white;
  background-color: #6271f0;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 20px 10px rgba(55, 64, 145, 0.2);
  align-self: center;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Loader = styled.div`
  border: 16px solid rgb(98, 113, 240, 0.5);
  border-top: 16px solid #374091;
  top: 35%;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: absolute;
  align-self: center;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
