const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const formattedDate = `${day} ${monthNames[month - 1]} ${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = `${year} ${
        monthNames[month - 1]
      } ${day}`;
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${
        monthNames[month - 1]
      } ${day}, ${year} - ${hours} Hours and ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
      break;
  }
});
