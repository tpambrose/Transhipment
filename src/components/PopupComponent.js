import React, { useState } from "react";
import { Modal, Grid } from "@mui/material";
import NewHandlerForm from "./NewHandlerForm";
import NewProductForm from "./NewProductForm";
import NewCarForm from "./NewCarForm";

const PopupComponent = ({ form }) => {
  const [open, setOpen] = useState(true);
  const close = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open}>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{ bgcolor: "#fbfbfb59", height: "100vh" }}
        >
          {form === "handler" && <NewHandlerForm close={close} />}
          {form === "product" && <NewProductForm close={close} />}
          {form === "car" && <NewCarForm close={close} />}
        </Grid>
      </Modal>
    </div>
  );
};

export default PopupComponent;
