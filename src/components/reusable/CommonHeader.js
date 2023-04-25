import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CommonHeader = ({ children, float, close }) => {
  const style = {
    width: "100%",
    backgroundColor: "#26AAE1",
    color: "white",
    boxSizing: "contentBox",
    padding: "20px",
    display: "flex",
    gap: float ? "55%" : "50px",
  };

  return (
    <Box sx={style}>
      <CloseIcon
        fontSize="large"
        sx={{ float: "left" }}
        onClick={() => close()}
      />
      <Typography variant="h4" color="white">
        {children}
      </Typography>
    </Box>
  );
};

export default CommonHeader;
