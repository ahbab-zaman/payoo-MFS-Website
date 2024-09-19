document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById("cashout-amount").value;

    const cashOutPin = document.getElementById("cashout-pin").value;

    if (cashOutPin === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const newCashout = parseFloat(cashOutAmount);
      const mainBalance = parseFloat(balance);

      if(newCashout > mainBalance){
        alert("You Don't have enough money for cash out");
        return mainBalance.innerText;
    }

      const currBalance = mainBalance - newCashout;

      document.getElementById("account-balance").innerText = currBalance;
      document.getElementById("cashout-amount").value = "";
      document.getElementById("cashout-pin").value = "";


      const p = document.createElement("p");
      p.innerText = `Withdrawn Money : ${newCashout} taka ; Current Balance : ${currBalance}`;
      document.getElementById('transaction-container').appendChild(p);
       p.style.backgroundColor = 'black'
       p.style.color = 'white'

      
    }
    else{
        alert("invalid Input");
    }
  });
