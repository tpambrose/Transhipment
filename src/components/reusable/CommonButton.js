import { Button, Typography } from "@mui/material";

const CommonButton = ({
  children,
  variant,
  sx,
  color,
  startIcon,
  endIcon,
  click,
}) => {
  const style = {
    ...sx,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 15px",
    gap: "10px",
  };
  const textStyle = {
    color: color ? color : "#F8F8F8",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
    textAlign: "center",
    flex: "none",
    order: 0,
    flexGrow: 0,
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={style}
      onClick={click}
    >
      <Typography sx={textStyle}>{children}</Typography>
    </Button>
  );
};

export default CommonButton;
