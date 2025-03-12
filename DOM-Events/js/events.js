// option1: directly set on the html element

// option2: add onClick function on html element
// <button id="make-blue">make blue</button>
// IMPORTANT we will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option3:
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue; // not call here as if call then it will be direct call automatically
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option3: another [sometime use]
const purpleBtn = document.getElementById("make-purple");
purpleBtn.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
// option: 4
const pinkBtn = document.getElementById("make-pink");
pinkBtn.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}
// option: 4 another
const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 4 final
 // document.getElementById('make-goldenRod').addEventListener('click', function () {})
 // IMPORTANT sometime
 document.getElementById('make-goldenRod').addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod'
}
)
