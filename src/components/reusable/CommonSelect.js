import Select from "react-select";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CommonGrid from "./CommonGrid";
import { Typography } from "@mui/material";
import { useState } from "react";
import PopupComponent from "../PopupComponent";

const CommonSelect = ({
  placeholder,
  options,
  md,
  label,
  onInputChange,
  isMulti,
}) => {
  const selectInput = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#F8F8F8",
      minWidth: "40vw",
      borderColor: "#0000000f",
    }),
    option: (styles, { data, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#26AAE1" : "white",
        color: isFocused ? "white" : "#232424",
      };
    },
  };

  const selectBox = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    width: "85%",
  };

  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setValue(e.value);
    if (onInputChange) {
      onInputChange(e.value);
    }
  };

  return (
    <CommonGrid md={md}>
      <Typography>{label}</Typography>
      <div style={selectBox}>
        <Select
          onChange={handleChange}
          placeholder={placeholder}
          options={options}
          styles={selectInput}
          isMulti={isMulti}
        />
        <AddBoxIcon
          onClick={() => setShow(!show)}
          sx={{ fontSize: 42 }}
          color="primary"
          fontSize="42px"
        />
        {show && label === "Select product name" && (
          <PopupComponent form="product" />
        )}
        {show && label === "Select car plate number" && (
          <PopupComponent form="car" />
        )}
        {show && label === "Select Handlers" && (
          <PopupComponent form="handler" />
        )}
      </div>
    </CommonGrid>
  );
};

export default CommonSelect;
