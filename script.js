let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let string = "";
let solution = [];

let array = Array.from(buttons);
array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      const result = string;

      string = eval(string);

      if (!isNaN(string)) {
        input.value = string;
        solution.push(`${result}= ${string}`);
        localStorage.setItem("solution", JSON.stringify(solution));
         DisplayData();
      } else {
        input.value = "♾️";
      }
    } else if (e.target.innerHTML == "clear") {
      localStorage.clear();
      window.location.reload();
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

const DisplayData = () => {
  const data = JSON.parse(localStorage.getItem("solution")|| '[]');
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  // const uniqueitems = new set();
  data.forEach((items) => {
    const Li = document.createElement("li");
    Li.textContent = items;
    ul.appendChild(Li);
    // uniqueitems.add(items);
  });
};

window.onload = DisplayData();
