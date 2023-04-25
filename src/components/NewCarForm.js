import CommonButton from "./reusable/CommonButton";
import CommonInput from "./reusable/CommonInput";
import CommonHeader from "./reusable/CommonHeader";
import { useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCar } from "../actions/carActions";

const NewCarForm = ({ close }) => {
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (inputValue, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
  };

  const dispatch = useDispatch();

  const handleAddCar = () => {
    dispatch(addCar({ plateNumber: inputValues }));
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "50%",
        padding: "0px 40px 20px 0px",
        margin: "auto",
      }}
    >
      <CommonHeader float close={close}>
        Add New Handler
      </CommonHeader>
      <Grid container direction="column" gap={2} px={5} pt={4}>
        <Grid container direction="row" gap={3}>
          <CommonInput
            md={7}
            label="Plate Number"
            onInputChange={(inputValue) => handleInputChange(inputValue, 0)}
            fullWidth
            placeholder="Enter Car's Plate Number"
          />
        </Grid>

        {/*save button*/}
        <Grid container>
          <Grid item xs={12}>
            <CommonButton
              variant="contained"
              sx={{ float: "left" }}
              click={handleAddCar}
            >
              Save
            </CommonButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewCarForm;
