const carsData = [
  { id: "1", plateNumber: "RRA5667" },
  { id: "2", plateNumber: "RRB767" },
  { id: "3", plateNumber: "RRA8867" },
];

const productsData = [
  { id: "1", name: "Machine Parts", dimensions: "45" },
  { id: "2", name: "Laptop", dimensions: "45" },
];

const handlersData = [
  {
    IDNumber: "119997489327634",
    fullName: "Joey TRIVIANI",
    phoneNumber: "+250786467445",
  },
  {
    IDNumber: "220027489327634",
    fullName: "Chandler BING",
    phoneNumber: "+250786467445",
  },
];

const newItem = [
  {
    plateNumber: "",
    handlers: [],
    productName: "",
    itemNbr: "",
    pricePerItem: "",
    weightPerItem: "",
    supportingDocs: "",
  },
];

const dummyData = {
  productsData,
  handlersData,
  carsData,
  newItem,
};

export default dummyData;
