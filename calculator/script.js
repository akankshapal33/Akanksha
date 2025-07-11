function calculate() {
  const marks = Array.from(document.querySelectorAll(".mark")).map(input => Number(input.value));
  const resultDiv = document.getElementById("result");

  if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
    resultDiv.textContent = "Please enter valid marks between 0 and 100 for all subjects.";
    resultDiv.style.color = "#ff5252";
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  let grade = "";

  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  resultDiv.style.color = "#00ffcc";
  resultDiv.innerHTML = `
    Total Marks: ${total}<br>
    Average Percentage: ${average.toFixed(2)}%<br>
    Grade: ${grade}
  `;
}

function reset() {
  document.querySelectorAll(".mark").forEach(input => input.value = "");
  document.getElementById("result").textContent = "";
}