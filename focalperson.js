const contacts = [
  {
    position: "DEPUTY COMMANDER",
    name: "JOMMEL M. MERANO",
    designation: "OCD MIMAROPA",
    contact: "-",
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

];

const tableBody = document.getElementById("tableBody");

contacts.forEach(person => {
  const row = `
    <tr>
      <td>${person.position}</td>
      <td>${person.name}</td>
      <td>${person.designation}</td>
      <td>${person.contact}</td>
      <td>${person.email}</td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", row);
});
