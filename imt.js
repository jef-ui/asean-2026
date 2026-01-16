const contacts = [
  {
    // IC
    position: "ALTERNATE INCIDENT COMMANDER",
    name: "ENGR. ",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // PIO
    position: "PUBLIC INFORMATION OFFICER",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // SOFR
    position: "SAFETY OFFICER",
    name: "JIMMY V. YBAS",
    designation: "PDRRMO PALAWAN",
    contact: "0917-110-9195",
    email: "jybas74@gmail.com"
  },
  {
    // LOFR
    position: "LIASON OFFICER",
    name: "MERLYN D. TAER",
    designation: "PDRRMO PALAWAN",
    contact: "0907-066-9043",
    email: "taermerlyn@gmail.com"
  },
  {
    // PSC  
    position: "PLANNING SECTION CHIEF",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // OSC
    position: "OPERATIONS SECTION CHIEF",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // LSC
    position: "LOGISTICS SECTION CHIEF",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // FASC
    position: "FINANCE AND ADMIN SECTION CHIEF",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH VENUE
    position: "BRANCH 1 (Venue)",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH BILLET
    position: "BRANCH 2 (Billet)",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH ROUTE
    position: "BRANCH 3 (Route)",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH MARITIME
    position: "BRANCH 4 (Maritime)",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH MARITIME
    position: "WATER AMBULANCE EVACUATION",
    name: "-",
    designation: "-",
    contact: "-",
    email: "-"
  },
  {
    // BRANCH MARITIME
    position: "WATER SEARCH AND RESCUE",
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