import React, { useState } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import { ListWrapper } from "./style";
const options = [
  { value: "one", label: "Lorem ipsum text.." },
  { value: "two", label: "Lorem ipsum text.." },
  { value: "three", label: "Lorem ipsum text.." },
  { value: "four", label: "Lorem ipsum text.." },
  { value: "five", label: "Lorem ipsum text.." },
  { value: "six", label: "Lorem ipsum text.." },
];
const TransfareList = () => {
  const [selected, setSelected] = useState([]);
  
  return (
    <ListWrapper>
      <DualListBox
        options={options}
        selected={selected}
        onChange={(value) => setSelected(value)}
      />
    </ListWrapper>
  );
};

export default TransfareList;
