import CommonHeader from "./reusable/CommonHeader";
import CommonButton from "./reusable/CommonButton";
import CommonInput from "./reusable/CommonInput";
import { useState } from "react";
import { Grid } from "@mui/material";
import { addProduct } from "../actions/productActions";
import { useDispatch } from "react-redux";

const NewProductForm = ({ close }) => {
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (inputValue, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
  };

  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(
      addProduct({
        name: inputValues[0],
        dimensions: inputValues[1],
      })
    );
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
        Add New Good
      </CommonHeader>
      <Grid container direction="column" gap={2} px={5} pt={4}>
        <Grid container direction="row" gap={3}>
          <CommonInput
            md={7}
            label="Name"
            onInputChange={(inputValue) => handleInputChange(inputValue, 0)}
            fullWidth
            placeholder="Name your good"
          />
          <CommonInput
            md={7}
            label="Dimension (Optional)"
            onInputChange={(inputValue) => handleInputChange(inputValue, 1)}
            fullWidth
            placeholder="Specify size occupied"
          />
        </Grid>

        {/*save button*/}
        <Grid container>
          <Grid item xs={12}>
            <CommonButton
              variant="contained"
              sx={{ float: "left" }}
              click={handleAddProduct}
            >
              Save
            </CommonButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProductForm;
