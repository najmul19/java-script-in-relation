// option1: directly set on the html element 

// option2: add onClick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option3:
const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue; // not call here as if call then it will be direct call automatically
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option3: another
const purpleBtn = document.getElementById('make-purple')
purpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}