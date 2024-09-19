document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyAmount = document.getElementById("add-money-amount").value;

    const addMoneyPin = document.getElementById("add-money-pin").value;

    if (addMoneyPin === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const newAddMoney = parseFloat(addMoneyAmount);
      const mainBalance = parseFloat(balance);

      const currBalance = newAddMoney + mainBalance;

      document.getElementById("account-balance").innerText = currBalance;
      document.getElementById("add-money-amount").value = "";
      document.getElementById("add-money-pin").value = "";

      const p = document.createElement("p");
      p.innerText = `Add money : ${newAddMoney} taka ; Current Balance : ${currBalance}`;
      document.getElementById('transaction-container').appendChild(p);

      p.style.backgroundColor = 'cyan';
      
    } else {
      alert("Invalid Input");
    }
  });
