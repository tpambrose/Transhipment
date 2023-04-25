import CommonSelect from "./components/reusable/CommonSelect";
import CommonInput from "./components/reusable/CommonInput";
import CommonHeader from "./components/reusable/CommonHeader";
import CommonButton from "./components/reusable/CommonButton";
import UploadComponent from "./components/UploadComponent";
import SubtitleComponent from "./components/SubtitleComponent";
import SuccessComponent from "./components/SuccessComponent";
import { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import {
  getCarOptions,
  getHandlerOptions,
  getProductOptions,
} from "./utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./actions/itemActions";

const App = () => {
  const cars = useSelector((state) => state.cars);
  const handlers = useSelector((state) => state.handlers);
  const products = useSelector((state) => state.products);
  const newItem = useSelector((state) => state.newItem);

  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (inputValue, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
  };

  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        plateNumber: inputValues[0],
        handlers: inputValues[1],
        productName: inputValues[2],
        itemNbr: inputValues[3],
        weightPerItem: inputValues[4],
        pricePerItem: inputValues[5],
        supportingDocs: inputValues[6],
      })
    );
  };
  return (
    <div>
      <CommonHeader>New Transhipment Entry</CommonHeader>
      <Grid container direction="column" gap={2} px={1.5}>
        <Typography color="primary" variant="h4" mt={2}>
          Offloading Car
        </Typography>

        {/* subLayout1 (car) */}
        <Grid container direction="row">
          <CommonSelect
            md={6.5}
            label="Select car plate number"
            placeholder="Select car"
            options={getCarOptions(cars)}
            onInputChange={(inputValue) => handleInputChange(inputValue, 0)}
          />
          <CommonSelect
            md={5}
            right
            isMulti
            label="Select Handlers"
            placeholder="Select Multiple handlers"
            options={getHandlerOptions(handlers)}
            onInputChange={(inputValue) => handleInputChange(inputValue, 1)}
          />
        </Grid>

        <SubtitleComponent></SubtitleComponent>
        <Divider color="#26AAE1" mb={5} />
        <SuccessComponent></SuccessComponent>

        {/* subLayout4 (product name and nbr of items)*/}
        <Grid container direction="row">
          <CommonSelect
            md={7}
            label="Select product name"
            placeholder="Select product"
            options={getProductOptions(products)}
            onInputChange={(inputValue) => handleInputChange(inputValue, 2)}
          />
          <CommonInput
            md={5}
            label="Number of items"
            onInputChange={(inputValue) => handleInputChange(inputValue, 3)}
            fullWidth
            placeholder="Enter number of product item(s)"
          />
        </Grid>

        {/* subLayout5 (weight + price)*/}
        <Grid container direction="row">
          <CommonInput
            md={7}
            label="Weight/Item"
            onInputChange={(inputValue) => handleInputChange(inputValue, 4)}
            placeholder="Enter product weight/item"
          />
          <CommonInput
            md={5}
            label="Price/Item (Optional)"
            onInputChange={(inputValue) => handleInputChange(inputValue, 5)}
            fullWidth
            placeholder="Enter price/item"
          />
        </Grid>

        <UploadComponent
          onInputChange={(inputValue) => handleInputChange(inputValue, 6)}
        ></UploadComponent>

        {/* subLayout6 (cancel and save)*/}
        <Grid container>
          <Grid item xs={12}>
            <CommonButton
              variant="contained"
              sx={{ float: "right" }}
              click={handleAddItem}
            >
              Next
            </CommonButton>
            <CommonButton
              variant="contained"
              sx={{ float: "left", backgroundColor: "#333333" }}
            >
              Cancel
            </CommonButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
