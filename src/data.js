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
  { IDNumber: "1", fullName: "Joey TRIVIANI", phoneNumber: "+250786467445" },
  { IDNumber: "2", fullName: "Chandler BING", phoneNumber: "+250786467445" },
];

const options = {
  cars: carsData.map((item) => ({ label: item.plateNumber, value: item.id })),
  handlers: handlersData.map((item) => ({
    label: item.fullName,
    value: item.IDNumber,
  })),
  products: productsData.map((item) => ({ label: item.name, value: item.id })),
};

export default options;
