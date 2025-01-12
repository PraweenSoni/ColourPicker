const colorbtn = document.querySelector('#picker-btn');
const colourList = document.querySelector('.all-colours');
const clearBtn = document.querySelector('.clear-btn'); // Select the clear button
const pickedColours = JSON.parse(localStorage.getItem("picked-colours") || "[]");

// Function to display colors in the list
const showColours = () => {
  colourList.innerHTML = pickedColours.map(colours => `
    <li class="colour">
      <span class="rect" style="background: ${colours}; border: 1px solid ${colours == "#ffffff" ? "#ccc" : colours};"></span>
      <span class="value">${colours}</span>
    </li>
  `).join("");

  // Hide the "Clear All" button if no colors are picked
  clearBtn.style.display = pickedColours.length > 0 ? 'inline-block' : 'none';
};
showColours();

// Function to activate the EyeDropper and pick a color
const activateEyeDropper = async () => {
  if (!window.EyeDropper) {
    alert("Your browser does not support the EyeDropper API.");
    return;
  }

  try {
    const eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    navigator.clipboard.writeText(sRGBHex);

    if (!pickedColours.includes(sRGBHex)) {
      pickedColours.push(sRGBHex);
      localStorage.setItem("picked-colours", JSON.stringify(pickedColours));
      showColours();
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to clear all picked colors
const clearAllColours = () => {
  pickedColours.length = 0; // Clear the array
  localStorage.removeItem("picked-colours"); // Remove from local storage
  showColours(); // Update the display
};

// Event listeners
colorbtn.addEventListener("click", activateEyeDropper);
clearBtn.addEventListener("click", clearAllColours); // Add click listener to the clear button
