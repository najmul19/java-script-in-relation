document
  .getElementById("bnt-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmmount = document.getElementById("cash-out-ammount").value;
    console.log(cashOutAmmount);
    const cashOutPin = document.getElementById("cash-out-pin").value;
    console.log(cashOutPin);
    if (cashOutPin == "1234") {
      console.log("cash out");
      const ballance = document.getElementById("ballance").innerText;
      console.log(ballance);
      const newBallance = ballance - cashOutAmmount;
      console.log(newBallance);
      document.getElementById("ballance").innerText = newBallance;
    } else {
      console.log("failded to cash out! please try again");
    }
  });
