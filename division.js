const contacts = [
  {
    position: "STAGING AREA 2",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 3",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 4",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "SRR TEAMS",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "MEDICAL EMERGENCY TEAMS",
    name: "NOEL N. MERCADO",
    designation: "NURSE II, DOH MIMAROPA",
    contact: "-",
    email: "hems.opcen@mimaropa.doh.gov.ph"
  },
  {
    position: "FIRE SUPPRESSION AND SAFETY TEAMS",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "CBRN TEAMS (As necessarry)",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "EQUIPMENT TEAM 1",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "EQUIPMENT TEAM 2",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    position: "EQUIPMENT TEAM 3",
    name: "-",
    designation: "-",
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