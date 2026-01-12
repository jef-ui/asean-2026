const contacts = [
  {
    position: "SEARCH, RESCUE AND RETRIEVAL",
    name: "MAJ BRIAN RULETE, PA",
    designation: "DIRECTOR OR CHIEF/ AFP WESCOM",
    contact: "-",
    email: "-"
  },
  {
    position: "MEDICAL EMERGENCY MANAGEMENT",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "CHEMICAL, BIOLOGICAL, RADIOLOGICAL AND NUCLEAR",
    name: "SFO2 RUEL P TABANG",
    designation: "SRF-CBRN TEAM LEADER/ BFP PALAWAN",
    contact: "0966-195-7883",
    email: "rtabang20@gmail.com"
  },
  {
    position: "EMERGENCY TELECOMMUNICATION",
    name: "ARGEN AZUL (Primary)",
    designation: "DIRECTOR OR CHIEF/ DICT MIMAROPA",
    contact: "0923-0904-371",
    email: "argen.azul@dict.gov.ph"
  },
  {
    position: "EMERGENCY TELECOMMUNICATION",
    name: "ENGR. VIRGO PINANGAY (Alternate)",
    designation: "DRRM - GECS, REGIONAL FOCAL/ DICT MIMAROPA",
    contact: "0995-726-6526",
    email: "virgo.pinangay@dict.gov.ph "
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