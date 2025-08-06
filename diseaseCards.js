const diseases = [
  {
    name: "Heart Attack",
    image: "HeartAttack.jpeg", // Replace with actual image URLs
    specialist: "Cardiologist",
    description: "A Cardiologist specializes in diagnosing and treating heart conditions like heart attacks.",
  },
  {
    name: "Diabetes",
    image: "diabetes.jpeg",
    specialist: "Endocrinologist",
    description: "An Endocrinologist focuses on managing diabetes and other hormonal disorders.",
  },
  {
    name: "Asthma",
    image: "asthma.jpeg",
    specialist: "Pulmonologist",
    description: "A Pulmonologist treats respiratory diseases, including asthma.",
  },
  {
    name: "Cancer",
    image: "https://via.placeholder.com/200x150?text=Cancer",
    specialist: "Oncologist",
    description: "An Oncologist is responsible for treating various types of cancer.",
  },
  // Add more diseases here
];

const cardContainer = document.getElementById("card-container");

diseases.forEach((disease) => {
  const card = document.createElement("div");
  card.className = "card";
  card.addEventListener("click", () => {
    window.location.href = 'search.html?disease=${encodeURIComponent(disease.name)}';
  });

  card.innerHTML = `
    <img src="${disease.image}" alt="${disease.name}">
    <div class="card-info">
      <h3>${disease.name}</h3>
      <p>${disease.description}</p>
    </div>
  `;

  cardContainer.appendChild(card);
});