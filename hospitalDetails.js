// Fetch the hospital ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const hospitalId = urlParams.get('id');

// Example hospital data (this would typically come from a database or API)
const hospitals = [
  {
    id: 1,
    name: "Apollo Hospital",
    specialist: "Cardiologist",
    phone: "123-456-7890",
    email: "contact@apollo.com",
    address: "123 Apollo St, Bangalore",
    pincode: "560100",
    website: "https://www.apollohospitals.com",
    image: "https://via.placeholder.com/280x180?text=Apollo+Hospital"
  },
  {
    id: 2,
    name: "Fortis Hospital",
    specialist: "Neurologist",
    phone: "234-567-8901",
    email: "contact@fortis.com",
    address: "456 Fortis Rd, Bangalore",
    pincode: "560200",
    website: "https://www.fortishospitals.com",
    image: "https://via.placeholder.com/280x180?text=Fortis+Hospital"
  }
];

// Find the hospital by ID
const hospital = hospitals.find(hospital => hospital.id == hospitalId);

if (hospital) {
  const container = document.getElementById('hospital-detail-container');
  
  // Display hospital details
  container.innerHTML = `
    <div class="hospital-card-detail">
      <img src="${hospital.image}" alt="${hospital.name}">
      <h3>${hospital.name}</h3>
      <p><strong>Specialist:</strong> ${hospital.specialist}</p>
      <p><strong>Phone:</strong> ${hospital.phone}</p>
      <p><strong>Email:</strong> ${hospital.email}</p>
      <p><strong>Address:</strong> ${hospital.address}, ${hospital.pincode}</p>
      <p><strong>Website:</strong> <a href="${hospital.website}" target="_blank">${hospital.website}</a></p>
      <a href="https://www.google.com/maps/search/?q=${encodeURIComponent(hospital.address)}" class="btn" target="_blank">View on Google Maps</a>
    </div>
  `;
} else {
  document.getElementById('hospital-detail-container').innerHTML = '<p>Hospital not found.</p>';
}