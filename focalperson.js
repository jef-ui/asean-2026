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