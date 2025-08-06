 const locations = {
  countries: {
    India: {
      states: {
        Karnataka: {
          districts: {
            "Bangalore Urban": ["Apollo Hospital", "Fortis Hospital", "Manipal Hospital"],
            Mysore: ["JSS Hospital", "Apollo BGS Hospital", "KR Hospital"],
          },
        },
        Maharashtra: {
          districts: {
            Mumbai: ["Lilavati Hospital", "Hinduja Hospital", "Kokilaben Dhirubhai Ambani Hospital"],
            Pune: ["Ruby Hall Clinic", "Jehangir Hospital", "Aditya Birla Memorial Hospital"],
          },
        },
      },
    },
    USA: {
      states: {
        California: {
          districts: {
            "Los Angeles": ["Cedars-Sinai Medical Center", "UCLA Medical Center"],
          },
        },
      },
    },
  },
};

// Extract Query Parameters
const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get("country");
const state = urlParams.get("state");
const district = urlParams.get("district");

// Display Hospitals
function displayHospitals() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
  
    const hospitalsList = locations[country]?.[state]?.[district] || [];
  
    const container = document.getElementById("hospital-container");
    container.innerHTML = ""; // Clear previous results
  
    if (hospitalsList.length === 0) {
      container.innerHTML = "<p>No hospitals found.</p>";
      return;
    }
  
    hospitalsList.forEach((hospital) => {
      const card = document.createElement("div");
      card.classList.add("hospital-card");
      card.innerHTML = <h3>${hospital}</h3>;
      container.appendChild(card);
    });
  }

// Initialize Hospital List
document.addEventListener("DOMContentLoaded", displayHospitals);