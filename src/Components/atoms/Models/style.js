import styled from "styled-components";

export const Filter = styled.div`
  position: absolute;
  background: #0d0d0d;
  opacity: 0.5;
  height: 100vh;
  z-index: 1;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 7px 35px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 696px;
  height: 326px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 27px 40px;
    font-size: 22px;
    font-weight: 700;
    color: #000000;
  }
  > div:last-of-type {
    display: flex;
    padding: 29px 47px;
    column-gap: 30px;
    > div {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
      font-weight: 400;
      font-size: 15px;
      line-height: 150%;
      color: #52525c;
      input {
        width: 279px;
        height: 48.61px;
        background: #ffffff;
        border: 2px solid #d9d9d9;
        border-radius: 8px;
        padding: 12px;
      }
    }
  }
  a {
    align-self: center;
  }
`;
