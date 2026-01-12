const contacts = [
  {
    position: "DEPUTY COMMANDER",
    name: "JOMMEL M. MERANO",
    designation: "OCD MIMAROPA",
    contact: "",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "MARIA AIZA S. SIASON",
    designation: "OCD MIMAROPA",
    contact: "-",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "MAJ BRIAN RULETE, PA",
    designation: "AFP/WESCOM",
    contact: "-",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "-",
    designation: "PNP",
    contact: "-",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "FSUPT JUDE D SUMEG-ANG",
    designation: "PROVINCIAL FIRE MARSHAL/BFP PALAWAN",
    contact: "0920-925-3466",
    email: "judedsumegang@gmail.com"
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