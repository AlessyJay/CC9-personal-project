const GBP = (num) => {
  return new Intl.NumberFormat(`en-GB`, {
    style: "currency",
    currency: "GBP",
  }).format(num);
};
const USD = (num) => {
  return new Intl.NumberFormat(`en-US`, {
    style: "currency",
    currency: "USD",
  }).format(num);
};
const EUR = (num) => {
  return new Intl.NumberFormat(`de-DE`, {
    style: "currency",
    currency: "EUR",
  }).format(num);
};
const PLN = (num) => {
  return new Intl.NumberFormat(`pl-PL`, {
    style: "currency",
    currency: "PLN",
  }).format(num);
};
const THB = (num) => {
  return new Intl.NumberFormat(`th-TH`, {
    style: "currency",
    currency: "THB",
  }).format(num);
};

export default { GBP, USD, EUR, PLN, THB };
