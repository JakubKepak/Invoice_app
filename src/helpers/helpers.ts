export function fromatDate(date: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formatedDate = new Date(date);
  return `${formatedDate.getDate().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })} ${months[formatedDate.getMonth()]} ${formatedDate.getFullYear()}`;
}

export function addCommaSeparator(number: number | string) {
  if (typeof number === "string") {
    number = parseInt(number);
  }

  return number
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function generateInvoiceId() {
  return `TEST-${Math.floor(Math.random() * 10000)}`;
}

export const calculateDueDate = (date: string, daysToAdd: number) => {
  let actualDate = new Date(date);
  actualDate.setDate(actualDate.getDate() + Number(daysToAdd));

  return actualDate.toLocaleDateString("en-CA");
};
