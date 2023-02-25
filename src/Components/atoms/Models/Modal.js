import React from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { Filter, ModalWrapper } from "./style";

const Modal = () => {
  return (
    <>
      <Filter />
      <ModalWrapper>
        <div>
          <div>Customize report</div>
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L16.1475 16.1475M2 16.1475L16.1475 2"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Fdata">From:</label>
            <input type="date" name="Fdata" id="Fdata" />
          </div>
          <div>
            <label htmlFor="Tdata">To</label>
            <input type="date" name="Tdata" id="Tdata" />
          </div>
        </div>
        <Link to="/transfer-list">
          <Button name="Continue for next step">Continue for next step</Button>
        </Link>
      </ModalWrapper>
    </>
  );
};

export default Modal;
 