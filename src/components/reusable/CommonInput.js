import { Input, Typography } from "@mui/material";
import React, { useState } from "react";
import CommonGrid from "./CommonGrid";

const CommonInput = ({ onInputChange, placeholder, fullWidth, label, md }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  const style = {
    width: fullWidth ? "100%" : "75%",
    height: "40px",
    background: "#F8F8F8",
    borderRadius: "5px",
    color: "#2D3E4D",
    p: 2,
  };

  return (
    <CommonGrid md={md}>
      <Typography>{label}</Typography>
      <Input
        value={value}
        onChange={handleChange}
        sx={style}
        placeholder={placeholder}
        disableUnderline
      />
    </CommonGrid>
  );
};

export default CommonInput;
