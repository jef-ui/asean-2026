const contacts = [
  {
    position: "DEPUTY COMMANDER",
    name: "JOMMEL M. MERANO",
    designation: "CHIEF DPS, OCD MIMAROPA",
    contact: "0917-501-4996",
    email: "mimaropa@ocd.gov.ph"
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
  {
    position: "JOINT PLANNING GROUP",
    name: "RAMONITO MARTIN",
    designation: "DOH HEMS",
    contact: "-",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "LT NINO ANGELO DELA CRUZ",
    designation: "CGD PAL",
    contact: "0975-110-7858",
    email: "cgdpal.pcg@gmail.com"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "LTJG FRIENDLY R MERCADO PCG",
    designation: "STATION COMMANDER/ CGSNEP",
    contact: "0953-443-5946",
    email: "cgs_coron@yahoo.com.ph"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "ARGEN AZUL",
    designation: "DICT MIMAROPA",
    contact: "0923-090-4371",
    email: "argen.azul@dict.gov.ph"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "ERIC ABOROT",
    designation: "DSWD MIMAROPA",
    contact: "0977-856-0040",
    email: "epaborot@dswd.gov.ph"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "LGOO VI ERIKA MAE GUMABOL",
    designation: "DILG MIMAROPA",
    contact: "0917-700-9274",
    email: "dilgmimaropa@gmail.com"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "CHERYL MARTINEZ",
    designation: "DILG PALAWAN",
    contact: "0910-213-7499",
    email: "dilg.paloperations@gmail.com"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "ENGR. JOSE P. CONDE",
    designation: "DPWH- 1ST DEO",
    contact: "0939-401-2736",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "ENGR. PAUL ABRAHAM ESCANDOR",
    designation: "DPWH-3RD DEO",
    contact: "0917-873-3226",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "JERIK SIASON",
    designation: "DILG PPC",
    contact: "-",
    email: "-"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "MARIA ALYSSA G. ABONALES",
    designation: "PDRRMO PALAWAN",
    contact: "0927-115-3403",
    email: "pdrrmopalawanriskcom@gmail.com"
  },
  {
    position: "JOINT PLANNING GROUP",
    name: "LLOYD DE LA CRUZ",
    designation: "CDRRMO PPC",
    contact: "-",
    email: "-"
  },
  {
    position: "STGEPR SECRETARIAT",
    name: "JOE MARK A. CABADOR (Primary)",
    designation: "CHIEF, OPERATIONS SECTION, OCD MIMAROPA",
    contact: "0916-885-5933",
    email: "jcabador@gmail.com"
  },
  {
    position: "STGEPR SECRETARIAT",
    name: "GLORY BALEGAN (Alternate)",
    designation: "OPERATIONS SECTION, OCD MIMAROPA",
    contact: "-",
    email: "mimaropa@ocd.gov.ph"
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