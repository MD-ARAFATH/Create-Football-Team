// Player Selection (using checkboxes)

const playerCheckboxes = document.querySelectorAll(".player-checkbox"); // Select all checkboxes

let selectedPlayers = []; // Array to store selected player IDs

playerCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const playerId = this.id; // Get ID of the clicked checkbox

    if (this.checked) {
      selectedPlayers.push(playerId); // Add selected player to array
    } else {
      const playerIndex = selectedPlayers.indexOf(playerId); // Find index of deselected player
      if (playerIndex > -1) {
        selectedPlayers.splice(playerIndex, 1); // Remove deselected player from array
      }
    }

    console.log("Selected Players:", selectedPlayers); // For debugging (optional)
  });
});

// Budget Calculation

const budgetInput = document.getElementById("budgetInput");
const calculateButton = document.getElementById("calculateButton");
const calculationResults = document.getElementById("calculationResults");

calculateButton.addEventListener("click", function () {
  const totalBudget = parseFloat(budgetInput.value);

  if (isNaN(totalBudget)) {
    calculationResults.textContent = "Please enter a valid budget number.";
    return; // Prevent further calculations if budget is not a number
  }

  // Replace this placeholder with your actual player data retrieval and cost calculation logic
  const playerPrices = {
    player1: 10.5, // Replace with actual price for player1
    player2: 8.2, // Replace with actual price for player2
    // ... add prices for other players
  };

  let totalCost = 0;
  selectedPlayers.forEach((playerId) => {
    totalCost += playerPrices[playerId] || 0; // Handle missing prices gracefully
  });

  if (totalCost <= totalBudget) {
    calculationResults.textContent = `Your team cost is: ${totalCost.toFixed(
      2
    )}. You're within budget!`;
  } else {
    calculationResults.textContent = `Your team cost is: ${totalCost.toFixed(
      2
    )}. You're exceeding your budget by ${(totalCost - totalBudget).toFixed(
      2
    )}.`;
  }
});
