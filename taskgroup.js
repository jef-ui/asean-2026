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
  {
    position: "DISASTER RISK REDUCTION AND MANAGEMENT",
    name: "MARIA AIZA S. SIASON (Primary)",
    designation: "CHIEF RRMS, OCD MIMAROPA",
    contact: "0917-842-0318",
    email: "mimaropa@ocd.gov.ph"
  },
  {
    position: "DISASTER RISK REDUCTION AND MANAGEMENT",
    name: "MARY AN B. ACEVEDA (Alternate)",
    designation: "CHIEF PLANS, OCD MIMAROPA",
    contact: "0966-891-0024",
    email: "acevedamaryanbacarra@gmail.com"
  },
  {
    position: "CAMP MANAGEMENT",
    name: "SHEILA TAPIA",
    designation: "DIRECTOR III / ARDO / DRMD CHIEF / DSWD MIMAROPA",
    contact: "0919-008-3882",
    email: "sstapia@dswd.gov.ph"
  },
  {
    position: "LOGISTICS",
    name: "JERVIS LLOYD ATILANO",
    designation: "CDO II, OCD MIMAROPA",
    contact: "0917-300-7955",
    email: "jervsatilano@gmail.com"
  },
  {
    position: "PUBLIC WORKS AND ENGINEERING",
    name: "ENGR. OLIVER P. MAULEON",
    designation: "OIC SECTION CHIEF, MAINTENANCE DIV. DPWH",
    contact: "0929-694-9090",
    email: "maintenance.dpwh4b@gmail.com"
  },
  {
    position: "PUBLIC WORKS AND ENGINEERING",
    name: "ENGR. JOSE CONDE",
    designation: "ENGR II - PALAWAN 1ST DEO, DPWH",
    contact: "0917-302-6233",
    email: "conde.jose@dpwh.gov.ph"
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