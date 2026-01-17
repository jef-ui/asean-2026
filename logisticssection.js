const contacts = [
  {
    position: "COMMUNICATIONS UNIT STAFF",
    name: "VERONICA T. GALLARES",
    designation: "PDRRMO PALAWAN",
    contact: "0919-704-6210",
    email: "veronicagallares5827@gmail.com"
  },
  {
    position: "COMMUNICATIONS UNIT STAFF",
    name: "CARL EMMANUEL R. CABIGUEN",
    designation: "CDRRMO PUERTO PRINCESA ",
    contact: "-",
    email: "-"
  },
  {
    position: "COMMUNICATIONS UNIT STAFF",
    name: "EFREN C. VILLAMOR",
    designation: "CDRRMO PUERTO PRINCESA ",
    contact: "-",
    email: "-"
  },
  {
    position: "COMMUNICATIONS UNIT STAFF",
    name: "ROLLY VALDEZTAMON",
    designation: "CDRRMO PUERTO PRINCESA ",
    contact: "-",
    email: "-"
  },
  {
    position: "FACILITIES UNIT LEADER/STAFF",
    name: "ELPIDIO TUAZON JR.",
    designation: "MDRRMO CORON",
    contact: "0977-842-4322",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "FACILITIES UNIT STAFF",
    name: "JEREMY L. MACANAS",
    designation: "MDRRMO CORON",
    contact: "0966-804-0078",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "FACILITIES UNIT STAFF",
    name: "RICHARD CASAMPOL",
    designation: "MDRRMO CORON",
    contact: "  0920-600-4680",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "FOOD UNIT LEADER",
    name: "MELBA B. CALALIN",
    designation: "MDRRMO CORON",
    contact: "0977-850-1972",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "FOOD UNIT STAFF",
    name: "HELEN ESTIMA",
    designation: "MDRRMO CORON",
    contact: "0926-741-0350",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "MEDICAL UNIT LEADER",
    name: "GERARD DANTE H. MALIGAYA",
    designation: "MDRRMO CORON",
    contact: "0935-703-2148",
    email: "coronmdrrmc@gmail.com"
  },

];

const tableBody = document.getElementById("tableBody");

contacts.forEach(person => {

  // ✅ If contact is "-" or empty, show plain text
  const contactCell = person.contact && person.contact !== "-"
    ? `<a href="tel:${person.contact.replace(/[^0-9]/g, '')}" class="call-link">
         ${person.contact}
       </a>`
    : "-";

  const row = `
    <tr>
      <td>${person.position}</td>
      <td>${person.name}</td>
      <td>${person.designation}</td>
      <td>${contactCell}</td>
      <td>${person.email}</td>
    </tr>
  `;

  tableBody.insertAdjacentHTML("beforeend", row);
});