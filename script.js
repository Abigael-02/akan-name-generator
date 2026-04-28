const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

document.getElementById("akan-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const dateInput = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;

    if (!dateInput || !gender) {
        alert("Please fill in all fields!");
        return;
    }

    const date = new Date(dateInput);
    const DD = date.getDate();
    const MM = date.getMonth() + 1
    const year = date.getFullYear().toString();
    const CC =
        parseInt(year.substring(0, 2));
    const YY =
        parseInt(year.substring(2, 4));
    let dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY)/ 4) + ((26 * (MM + 1))/ 10) + DD) % 7;
    let resultDay =
        Math.floor(Math.abs(dayOfWeek));
    let akanName = "";
    if (gender === "male") {
        akanName =
            maleNames[resultDay];
    } else {
        akanName =
            femaleNames[resultDay];
    }

    document.getElementById("display-name").innerText = akanName;
    document.getElementById("result-section").style.display = "block";
    });
