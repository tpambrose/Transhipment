import {Grid} from "@mui/material";

const CommonGrid = ({ children, md }) => {

  return (
    <Grid item xm={12} md={md}>
        {children}
    </Grid>
  );
};

export default CommonGrid;
