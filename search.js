const locations = {
    countries: {
      India: {
        states: {
          Karnataka: {
            districts: {
              "Bangalore Urban": [
                "Apollo Hospital",
                "Fortis Hospital",
                "Manipal Hospital",
                "Narayana Health",
                "Columbia Asia",
                "Bowring and Lady Curzon Hospital",
                "St. John's Medical College",
                "Vydehi Institute of Medical Sciences",
                "Ramaiah Memorial Hospital",
                "ESIC Hospital",
              ],
              Mysore: [
                "JSS Hospital",
                "Apollo BGS Hospital",
                "KR Hospital",
                "Columbia Asia Mysore",
                "Holdsworth Memorial Hospital",
              ],
            },
          },
          Maharashtra: {
            districts: {
              Mumbai: [
                "Lilavati Hospital",
                "Hinduja Hospital",
                "Kokilaben Dhirubhai Ambani Hospital",
                "Tata Memorial Hospital",
                "Nanavati Hospital",
                "Global Hospitals",
              ],
              Pune: [
                "Ruby Hall Clinic",
                "Sahyadri Hospitals",
                "Jehangir Hospital",
                "Aditya Birla Memorial Hospital",
                "Deenanath Mangeshkar Hospital",
              ],
            },
          },
        },
      },
      USA: {
        states: {
          California: {
            districts: {
              "Los Angeles": [
                "Cedars-Sinai Medical Center",
                "UCLA Medical Center",
                "LAC+USC Medical Center",
                "Kaiser Permanente",
              ],
            },
          },
        },
      },
    },
  };
  
  // Populate Country Dropdown
  function populateCountries() {
    const countrySelect = document.getElementById("country");
    Object.keys(locations.countries).forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }
  
  // Populate States Based on Country
  function populateStates() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    stateSelect.innerHTML = '<option value="" disabled selected>Select a state</option>';
    districtSelect.innerHTML = '<option value="" disabled selected>Select a district</option>';
  
    const country = document.getElementById("country").value;
    if (locations.countries[country]) {
      Object.keys(locations.countries[country].states).forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
      });
    }
  }
  
  // Populate Districts Based on State
  function populateDistricts() {
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="" disabled selected>Select a district</option>';
  
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    if (locations.countries[country]?.states[state]?.districts) {
      Object.keys(locations.countries[country].states[state].districts).forEach((district) => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    }
  }
  function showHospitalButtons() {
    const district = document.getElementById("district").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const hospitals =
      locations.countries[country]?.states[state]?.districts[district] || [];
    const buttonContainer = document.getElementById("hospital-buttons");
    buttonContainer.innerHTML = "";
  
    hospitals.forEach((hospital, index) => {
      const button = document.createElement("button");
      button.textContent = hospital;
      button.onclick = () => showHospitalCard(hospital);
      buttonContainer.appendChild(button);
    });
  }
  
  // Show Hospital Card
  const hospitals = [
    {
      name: "City Hospital",
      disease: "Cardiology",
      category: "Nearby",
      specialists: ["Cardiologist"],
      doctor: "Dr. John Doe",
      phone: "123-456-7890",
      email: "info@cityhospital.com",
      landmark: "Near Central Park",
      insurance: ["Apollo Health Insurance"],
      address: "123 City Road, Downtown",
      pincode: "12345",
      website: "https://cityhospital.com",
      googleMap: "https://goo.gl/maps/example1",
    },
    {
        name: "Apollo Hospital",
        disease: "${disease}",
      
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Ravi Sharma",
        phone: "1800-209-2222",
        email: "apollo.contact@apollohospitals.com",
        landmark: "Near MG Road Metro Station",
        insurance: ["Apollo Health Insurance", "Star Health", "ICICI Lombard"],
        address: "154/11, Bannerghatta Road, Bangalore, Karnataka",
        pincode: "560076",
        website: "https://www.apollohospitals.com",
        googleMap: "https://goo.gl/maps/exampleApollo",
      },
    {
      name: "District Health Care",
      disease: "Neurology",
      category: "District",
      specialists: ["Neurologist"],
      doctor: "Dr. Jane Smith",
      phone: "987-654-3210",
      email: "contact@districthealth.com",
      landmark: "Main Street",
      insurance: ["Star Health"],
      address: "456 District Avenue",
      pincode: "54321",
      website: "https://districthealth.com",
      googleMap: "https://goo.gl/maps/example2",
    },
    {
        name: "Fortis Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Karan Malhotra",
        phone: "1800-103-3333",
        email: "fortis.contact@fortishealthcare.com",
        landmark: "Near Bannerghatta Road",
        insurance: ["Apollo Health Insurance", "Star Health", "HDFC ERGO"],
        address: "No. 154/4, Bannerghatta Road, Bangalore, Karnataka",
        pincode: "560076",
        website: "https://www.fortishealthcare.com",
        googleMap: "https://goo.gl/maps/exampleFortis"
      },
      {
        name: "Manipal Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Arun Kumar",
        phone: "1800-102-0404",
        email: "info@manipalhospitals.com",
        landmark: "Near HAL Airport",
        insurance: ["Star Health", "ICICI Lombard", "Bajaj Allianz"],
        address: "98, HAL Airport Road, Bangalore, Karnataka",
        pincode: "560017",
        website: "https://www.manipalhospitals.com",
        googleMap: "https://goo.gl/maps/exampleManipal"
      },
      {
        name: "Narayana Health",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Orthopedic Surgeon",
          "Oncologist",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Sudhir Kumar",
        phone: "1800-222-500",
        email: "contact@narayanahealth.org",
        landmark: "Near Kudlu Gate, Hosur Road",
        insurance: ["Apollo Health Insurance", "Star Health", "HDFC ERGO"],
        address: "258/A, Narayana Health City, Bommasandra, Bangalore, Karnataka",
        pincode: "560099",
        website: "https://www.narayanahealth.org",
        googleMap: "https://goo.gl/maps/exampleNarayana"
      },
      {
        name: "Columbia Asia",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Vinay Nair",
        phone: "1800-208-1234",
        email: "contact@columbiaasia.com",
        landmark: "Near Yeshwanthpur",
        insurance: ["HDFC ERGO", "Bajaj Allianz", "ICICI Lombard"],
        address: "No. 60/2, Yeshwanthpur, Bangalore, Karnataka",
        pincode: "560022",
        website: "https://www.columbiaasia.com",
        googleMap: "https://goo.gl/maps/exampleColumbia"
      },
      {
        name: "Bowring and Lady Curzon Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Asha Reddy",
        phone: "080-22865000",
        email: "bowring.hospital@karnataka.gov.in",
        landmark: "Near Shivaji Nagar",
        insurance: ["Star Health", "ICICI Lombard"],
        address: "K.R. Road, Shivaji Nagar, Bangalore, Karnataka",
        pincode: "560001",
        website: "http://www.bowringladycurzon.com",
        googleMap: "https://goo.gl/maps/exampleBowring"
      },
      {
        name: "St. John's Medical College Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Pradeep Kumar",
        phone: "080-22066000",
        email: "stjohns.contact@stjohns.in",
        landmark: "Near Koramangala",
        insurance: ["HDFC ERGO", "Star Health", "Bajaj Allianz"],
        address: "Sarjapur Road, Koramangala, Bangalore, Karnataka",
        pincode: "560034",
        website: "https://www.stjohns.in",
        googleMap: "https://goo.gl/maps/exampleStJohns"
      },
      {
        name: "Vydehi Institute of Medical Sciences",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Sandeep Kumar",
        phone: "080-28442902",
        email: "info@vydehi.edu.in",
        landmark: "Near Whitefield",
        insurance: ["Star Health", "ICICI Lombard", "Bajaj Allianz"],
        address: "Nallurhalli, Whitefield, Bangalore, Karnataka",
        pincode: "560066",
        website: "https://www.vydehi.edu.in",
        googleMap: "https://goo.gl/maps/exampleVydehi"
      },
      {
        name: "Ramaiah Memorial Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Sunil Kumar",
        phone: "080-23608080",
        email: "contact@ramaiahmemorial.com",
        landmark: "Near MSR Nagar",
        insurance: ["Star Health", "HDFC ERGO", "ICICI Lombard"],
        address: "New BEL Road, MSR Nagar, Bangalore, Karnataka",
        pincode: "560054",
        website: "https://www.ramaiahmemorial.com",
        googleMap: "https://goo.gl/maps/exampleRamaiah"
      },
      {
        name: "ESIC Hospital",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. S. Ramesh",
        phone: "080-22321878",
        email: "esic.contact@esic.nic.in",
        landmark: "Near Rajajinagar",
        insurance: ["Star Health", "Bajaj Allianz"],
        address: "Rajajinagar, Bangalore, Karnataka",
        pincode: "560010",
        website: "https://www.esic.nic.in",
        googleMap: "https://goo.gl/maps/exampleESIC"
      },
      {
        name: "Cedars-Sinai Medical Center",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Robert Brown",
        phone: "+1 310-423-3277",
        email: "cedars.contact@cedars-sinai.edu",
        landmark: "Near Beverly Grove",
        insurance: ["Aetna", "Blue Cross", "Cigna"],
        address: "8700 Beverly Blvd, Los Angeles, CA 90048, USA",
        pincode: "90048",
        website: "https://www.cedars-sinai.org",
        googleMap: "https://goo.gl/maps/exampleCedarsSinai"
      },
      {
        name: "UCLA Medical Center",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. James Wilson",
        phone: "+1 310-825-9111",
        email: "ucla.contact@mednet.ucla.edu",
        landmark: "Near Westwood Village",
        insurance: ["Aetna", "United Healthcare", "Blue Shield"],
        address: "10833 Le Conte Ave, Los Angeles, CA 90095, USA",
        pincode: "90095",
        website: "https://www.uclahealth.org",
        googleMap: "https://goo.gl/maps/exampleUCLA"
      },
      {
        name: "LAC+USC Medical Center",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Lisa Thompson",
        phone: "+1 323-226-6121",
        email: "lacusc.contact@mednet.ucla.edu",
        landmark: "Near Boyle Heights",
        insurance: ["Medicare", "Medi-Cal", "Private Insurances"],
        address: "2051 Marengo St, Los Angeles, CA 90033, USA",
        pincode: "90033",
        website: "https://www.lacusc.org",
        googleMap: "https://goo.gl/maps/exampleLACUSC"
      },
      {
        name: "Kaiser Permanente",
        disease: "Multi-specialty",
        category: "Nearby",
        specialists: [
          "Cardiologist",
          "Neurologist",
          "Oncologist",
          "Orthopedic Surgeon",
          "Pediatrician",
          "Dermatologist"
        ],
        doctor: "Dr. Michael Lee",
        phone: "+1 800-464-4000",
        email: "kp.contact@kp.org",
        landmark: "Near Hollywood",
        insurance: ["Kaiser Permanente Health Plan"],
        address: "5525 Balboa Blvd, Encino, CA 91316, USA",
        pincode: "91316",
        website: "https://www.kaiserpermanente.org",
        googleMap: "https://goo.gl/maps/exampleKaiserPermanente"
      }
  ];
  
  function showHospitalCard(hospitalName) {
   

    const hospital = hospitals.find((h) => h.name === hospitalName);
    const cardContainer = document.getElementById("hospital-cards");
    cardContainer.innerHTML = ""; // Clear existing cards
  
    if (!hospital) {
      cardContainer.innerHTML = "<p>Hospital details not found.</p>";
      return;
    }
  
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${hospital.name}</h2>
      <p><strong>Specialists:</strong> ${hospital.specialists.join(", ")}</p>
      <p><strong>Doctor:</strong> ${hospital.doctor}</p>
      <p><strong>Phone:</strong> ${hospital.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${hospital.email}">${hospital.email}</a></p>
      <p><strong>Landmark:</strong> ${hospital.landmark}</p>
      <p><strong>Insurance Accepted:</strong> ${hospital.insurance.join(", ")}</p>
      <p><strong>Address:</strong> ${hospital.address}</p>
      <p><strong>Pincode:</strong> ${hospital.pincode}</p>
      <p><strong>Website:</strong> <a href="${hospital.website}" target="_blank">${hospital.website}</a></p>
      <button onclick="window.open('${hospital.googleMap}', '_blank')">View on Google Maps</button>
    `;

    cardContainer.appendChild(card);
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", populateCountries);
  
  // Display Hospitals Based on District
  function displayHospitals() {
    const hospitalsList = document.getElementById("hospitals");
    hospitalsList.innerHTML = "";
  
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
  
    const hospitals =
      locations.countries[country]?.states[state]?.districts[district] || [];
  
    if (hospitals.length === 0) {
      hospitalsList.innerHTML = "<li>No hospitals found.</li>";
      
    } else {
      hospitals.forEach((hospital) => {
        const listItem = document.createElement("li");
        listItem.textContent = hospital;
        hospitalsList.appendChild(listItem);
      });
    }
  }
  //Redirect to Hospitals Page
  function redirectToHospitals() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
  
    if (country && state && district) {
      const params = new URLSearchParams({
        country,
        state,
        district,
      }).toString();
  
      window.location.href = 'hospitals.html?${params}';
    } else {
      alert("Please select all fields before proceeding.");
    }
}
function showHospitalDetails(hospitalName) {
    // Redirect to the details page with the hospital name in the query parameter
    window.location.href = `hospital-details.html?hospital=${encodeURIComponent(hospitalName)}`;
  }
  function goBack()
  {
    window.history.back();
  }