export const getCarOptions = (data) => {
  return data.map((item) => ({ label: item.plateNumber, value: item }));
};

export const getHandlerOptions = (data) => {
  return data.map((item) => ({ label: item.fullName, value: item }));
};

export const getProductOptions = (data) => {
  return data.map((item) => ({ label: item.name, value: item }));
};
