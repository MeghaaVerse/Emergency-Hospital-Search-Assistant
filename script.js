const specialists = [
    {
      name: "Cardiologist",
      image: "https://via.placeholder.com/300x200",
      description: "Specializes in diagnosing and treating heart and cardiovascular diseases.",
    },
    {
      name: "Dermatologist",
      image: "https://via.placeholder.com/300x200",
      description: "Focuses on skin, hair, and nail health, diagnosing and treating related issues.",
    },
    {
      name: "Pediatrician",
      image: "https://via.placeholder.com/300x200",
      description: "Provides medical care for infants, children, and adolescents.",
    },
    {
      name: "Neurologist",
      image: "https://via.placeholder.com/300x200",
      description: "Specialist in disorders of the brain, spinal cord, and nervous system.",
    },
  ];
  
  // Function to render specialist cards
  function renderSpecialistCards() {
    const app = document.getElementById('app');
  
    const specialistCards = specialists.map(specialist => `
      <div class="card">
        <img src="${specialist.image}" alt="${specialist.name}">
        <h3>${specialist.name}</h3>
        <p>${specialist.description}</p>
      </div>
    `).join('');
  
    app.innerHTML = `
      <h1>Specialists</h1>
      <div class="container">${specialistCards}</div>
      <button class="back-button" onclick="goBack()">Back</button>
    `;
  }
  
  // Placeholder for "Back" functionality
  function goBack() {
    alert('Back button clicked! Add navigation functionality here.');
  }
  
  // Render the cards on page load
  renderSpecialistCards();