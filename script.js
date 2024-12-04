let Fahren = document.getElementById("fInput");
let Celsius = document.getElementById("cInput");
let Btn = document.getElementById("Btn");
let anchor = document.getElementById("anchor");

document.getElementById("Btn").addEventListener("click", Convert);

function Convert() {
  Calc = Fahren.value;

  let Convertion = +(Calc - 32) * 0.5555555555555555555555555555555555555555;

  Convertion = Convertion.toFixed(0);

  document.getElementById("Output").innerHTML = Convertion;

  document.getElementById("Out2");

  document.getElementById("Out2").innerHTML = "C";

  Btn.style.background = "#26d978";

  anchor.href = "https://www.google.com/";

  Fahren.value = "";
}
