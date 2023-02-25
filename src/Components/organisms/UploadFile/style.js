import styled from "styled-components";

export const UploadFileWrapper = styled.form`
 
display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
  .uploadFile {
    background: #efefef;
    width: 454px;
    height: 69px;
    display: flex;
    align-items: center;
    border: 1px solid #848484;
    border-radius: 49px;
    position: relative;
    overflow: hidden;
    label {
      display: flex;
      align-items: center;
       background-color: #efefef;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding-left: 30px;
      z-index: 99;
    }
  }
  .files {
    font-weight: 700;
    margin-top: 12px;
  }
`;