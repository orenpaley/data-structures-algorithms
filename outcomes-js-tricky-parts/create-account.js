function createAccount(pin, amount = 0) {
  const account = {
    amount: amount,
    pin: pin,
    checkBalance: function (enteredPin) {
      if (+pin === +enteredPin) {
        return `$${amount}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (enteredPin, depositAmt) {
      if (+pin === +enteredPin) {
        amount += +depositAmt;
        amount = amount;
        return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (enteredPin, withdrawAmt) {
      if (+pin === +enteredPin) {
        if (amount - withdrawAmt > 0) {
          amount -= +withdrawAmt;
          return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (enteredPin, newPin) {
      if (+enteredPin === +pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
  return account;
}

module.exports = { createAccount };
