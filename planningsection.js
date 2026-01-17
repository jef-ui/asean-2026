const contacts = [
  {
    position: "STATUS CHECK-IN RECORDERS/ RESOURCE UNIT STAFF",
    name: "MICO ECHAGUE",
    designation: "CDRRMO PUERTO PRINCESA",
    contact: "0961-938-5184 ",
    email: "ppcdrrmo.rpsmico@gmail.com"
  },

    {
    position: "STATUS CHECK-IN RECORDERS/ RESOURCE UNIT STAFF",
    name: "JENARD CLEMENTE",
    designation: "CDRRMO PUERTO PRINCESA",
    contact: "0995-960-2915",
    email: "jenardclems@gmail.com"
  },
  {
    position: "SITUATION UNIT LEADER",
    name: "MARWIN T. PADILLA",
    designation: "MDRRMO CORON",
    contact: "0945-438-8251",
    email: "coronmdrrmc@gmail.com"
  },
  {
    position: "EVENT DOCUMENTATION/ FOB",
    name: "JAN DANIELE ANDRE DALABAJAN",
    designation: "PDRRMO PALAWAN",
    contact: "0968-641-3798",
    email: "Yodidoy@gmail.com"
  },
  {
    position: "EVENT DOCUMENTATION/ FOB",
    name: "IAN ISRAEL H. SANTOS",
    designation: "PDRRMO PALAWAN",
    contact: "0992-549-0560",
    email: "Yodidoy@gmail.com"
  },
  {
    position: "SEACRAFT FOB",
    name: "ALAN BAYTA",
    designation: "PALAWAN SEA CRAFT",
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