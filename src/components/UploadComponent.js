import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const UploadComponent = ({ onInputChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box
          sx={{
            padding: "50px",
            textAlign: "center",
            border: "0.84px dashed #9E9E9E",
            bgcolor: "#F8F8F8",
          }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              value={value}
              onChange={handleChange}
              hidden
              accept="*/*"
              type="file"
            />
            <img src="https://i.ibb.co/pJ1Fxs6/Vector.png" alt="upload" />
          </IconButton>
          <Typography>Select file to upload</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UploadComponent;
