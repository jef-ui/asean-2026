const contacts = [
  {
    position: "COMMUNICATIONS UNIT STAFF",
    name: "VERONICA T. GALLARES",
    designation: "PDRRMO PALAWAN",
    contact: "0919-704-6210",
    email: "-"
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
    contact: "-",
    email: "-"
  },
  {
    position: "FACILITIES UNIT STAFF",
    name: "JEREMY L. MACANAS",
    designation: "MDRRMO CORON",
    contact: "-",
    email: "-"
  },
  {
    position: "FACILITIES UNIT STAFF",
    name: "RICHARD CASAMPOL",
    designation: "MDRRMO CORON",
    contact: "-",
    email: "-"
  },
  {
    position: "FOOD UNIT LEADER",
    name: "MELBA B. CALALIN",
    designation: "MDRRMO CORON",
    contact: "-",
    email: "-"
  },
  {
    position: "FOOD UNIT STAFF",
    name: "HELEN ESTIMA",
    designation: "MDRRMO CORON",
    contact: "-",
    email: "-"
  },
  {
    position: "MEDICAL UNIT LEADER",
    name: "GERARD DANTE H. MALIGAYA",
    designation: "MDRRMO CORON",
    contact: "-",
    email: "-"
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