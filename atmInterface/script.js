class BankAccount {
  constructor() {
    this.balance = 1000; // Starting balance
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. New Balance: ₹${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return `Insufficient Balance. Current Balance: ₹${this.balance}`;
    }
    this.balance -= amount;
    return `Withdrew ₹${amount}. Remaining Balance: ₹${this.balance}`;
  }

  getBalance() {
    return `Current Balance: ₹${this.balance}`;
  }
}

const account = new BankAccount();
const messageDiv = document.getElementById("message");

function getAmount() {
  return parseFloat(document.getElementById("amount").value);
}

function deposit() {
  const amount = getAmount();
  if (isNaN(amount) || amount <= 0) {
    messageDiv.textContent = "Please enter a valid deposit amount.";
    messageDiv.style.color = "#ff5252";
    return;
  }
  messageDiv.textContent = account.deposit(amount);
  messageDiv.style.color = "#00ffcc";
}

function withdraw() {
  const amount = getAmount();
  if (isNaN(amount) || amount <= 0) {
    messageDiv.textContent = "Please enter a valid withdrawal amount.";
    messageDiv.style.color = "#ff5252";
    return;
  }
  const response = account.withdraw(amount);
  messageDiv.textContent = response;
  messageDiv.style.color = response.startsWith("Insufficient") ? "#ff5252" : "#00ffcc";
}

function checkBalance() {
  messageDiv.textContent = account.getBalance();
  messageDiv.style.color = "#00ffcc";
}