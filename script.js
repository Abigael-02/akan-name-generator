const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document
  .getElementById("akan-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dateInput = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    // validation logic
    if (!dateInput || !gender) {
      alert("Please fill in all fields!");
      return;
    }

    const date = new Date(dateInput);
    const fullYear = date.getFullYear();

    //Validation check
    if (fullYear < 1900 || fullYear > 2026) {
      alert("Please enter a valid year between 1900 and 2026!");
      return;
    }

    //Extraction and Calculation
    const DD = date.getDate();
    const MM = date.getMonth() + 1;
    const yearString = fullYear.toString();

    const CC = parseInt(yearString.substring(0, 2));
    const YY = parseInt(yearString.substring(2, 4));

    // Formula
    let dayOfWeek =
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

    // Ensure result is a positive index 0-6
    let resultDay = Math.floor(Math.abs(dayOfWeek));

    // Assign name
    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[resultDay];
    } else {
      akanName = femaleNames[resultDay];
    }

    const resultSection = document.getElementById("result-section");
    const displayName = document.getElementById("display-name");

    //Reset display before showing new result
    resultSection.style.display = "none";

    // Display result
    displayName.innerText = akanName;
    resultSection.style.display = "block";
  });
