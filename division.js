const contacts = [
  {
    position: "AR GROUP SUPERVISORS",
    name: "RAMON D. MAPANAO",
    designation: "PDRRMO PALAWAN",
    contact: "0917-938-4972",
    email: "-"
  },
  {
    position: "EMERGENCY RESPONSE GROUP SUPERVISOR",
    name: "BARRISTER CARL L. CONDE",
    designation: "BFP PALAWAN",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 1",
    name: "JOSEPH ARMSTRONG SANDOVAL",
    designation: "MDRRMO CORON",
    contact: "0945-489-4865",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "STAGING AREA 2",
    name: "LLOYD M. PEPITO",
    designation: "MDRRMO CULION",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 3",
    name: "JOHN ALVIN PRIMA",
    designation: "MDRRMO CULION",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 4",
    name: "ARCIEVAL JIMENEZ",
    designation: "MDRRMO BUSUANGA",
    contact: "-",
    email: "-"
  },
  {
    position: "STAGING AREA 5",
    name: "DANIEL FERNAN JR.",
    designation: "MDRRMO BUSUANGA",
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
    name: "FINSP RICO L PAGMANOJA",
    designation: "PROVINCIAL CHIEF / OPERATIONS BRANCH / BFP PALAWAN",
    contact: "0917-599-6697",
    email: "opfmpalawan2024@gmail.com"
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