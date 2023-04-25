import React from "react";
import { Typography, Grid } from "@mui/material";
import CommonGrid from "./reusable/CommonGrid";
import CommonButton from "./reusable/CommonButton";
import AddIcon from "@mui/icons-material/Add";

function SubtitleComponent() {
  return (
    <div>
      <Grid container direction="row" alignItems="self-end" mb="-15px">
        <CommonGrid md={7}>
          <Typography color="primary">Product Details</Typography>
        </CommonGrid>
        <CommonGrid md={5}>
          <CommonButton
            variant="outlined"
            startIcon={<AddIcon />}
            color="#26AAE1"
            sx={{ float: "right" }}
          >
            Add New Product
          </CommonButton>
        </CommonGrid>
      </Grid>
    </div>
  );
}

export default SubtitleComponent;
