
function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (height * height);
    let status;
        if (bmi < 18.5) {
          status = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
          status = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
          status = "Overweight";
        } else {
          status = "Obese";
        }
    document.getElementById("output").innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + status + ")";
}