import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Stack, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const SuccessComponent = () => {
  const newItem = useSelector((state) => state.newItem);

  const style = {
    display: "flex",
    flexDirection: "row",
    width: ["100%", "100%"],
    height: "56px",
    background: "rgba(38, 170, 225, 0.04)",
    border: "1px solid #26AAE1",
    borderRadius: "5px",
    borderLeft: "12px solid #26AAE1",
    justifyContent: "center",
    gap: "26%",
    alignItems: "center",
    visibility: newItem.productName.name ? "visible" : "hidden",
  };

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Stack sx={style}>
            <Typography>{newItem.productName.name + " Items"}</Typography>
            <Typography>{newItem.itemNbr}</Typography>
            <Typography>{newItem.weightPerItem + " KG/Items"} "</Typography>
            <DoneIcon color="primary" fontSize="large"></DoneIcon>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuccessComponent;
