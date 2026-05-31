function generateOrderNumber() {
  return "#SF" + Math.floor(1000000 + Math.random() * 9000000);
}

function getDeliveryDate() {
  const start = new Date();
  const end = new Date();
  start.setDate(start.getDate() + 4);
  end.setDate(end.getDate() + 7);

  const options = { month: "short", day: "numeric", year: "numeric" };

  return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`;
}

export { generateOrderNumber, getDeliveryDate };
