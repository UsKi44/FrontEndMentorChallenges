//inputs
var mainInput = document.getElementById("billInput");
var peopleInput = document.getElementById("pplAmount");

//buttons
var fivePerc = document.getElementById("5perc");
var tenPerc = document.getElementById("10perc");
var fifteenPerc = document.getElementById("15perc");
var twentyFivePerc = document.getElementById("25perc");
var fiftyPerc = document.getElementById("50perc");
var reset = document.getElementById("reset");

fivePerc.addEventListener("click", function () {
  if (mainInput.value && peopleInput.value === "") {
    mainInput.style.border = "solid 1px red ";
    peopleInput.style.border = "solid 1px red";
  } else {
    let tipAmount = document.getElementById("tipAmount");
    let personCost = document.getElementById("personCost");
    tipAmount.innerHTML = `${
      Math.floor((((mainInput.value / peopleInput.value) * 5) / 100) * 100) /
      100
    }`;
    tipAmount = parseFloat(tipAmount.innerHTML);
    personCost.innerHTML = `${
      Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
    }`;
  }
});

tenPerc.addEventListener("click", function () {
  if (mainInput.value && peopleInput.value === "") {
    mainInput.style.border = "solid 1px red";
    peopleInput.style.border = "solid 1px red";
  } else {
    let tipAmount = document.getElementById("tipAmount");
    let personCost = document.getElementById("personCost");
    tipAmount.innerHTML = `${
      Math.floor((((mainInput.value / peopleInput.value) * 10) / 100) * 100) /
      100
    }`;
    tipAmount = parseFloat(tipAmount.innerHTML);
    personCost.innerHTML = `${
      Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
    }`;
  }
});

fifteenPerc.addEventListener("click", function () {
  if (mainInput.value && peopleInput.value === "") {
    mainInput.style.border = "solid 1px red";
    peopleInput.style.border = "solid 1px red";
  } else {
    let tipAmount = document.getElementById("tipAmount");
    let personCost = document.getElementById("personCost");
    tipAmount.innerHTML = `${
      Math.floor((((mainInput.value / peopleInput.value) * 15) / 100) * 100) /
      100
    }`;
    tipAmount = parseFloat(tipAmount.innerHTML);
    personCost.innerHTML = `${
      Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
    }`;
  }
});

twentyFivePerc.addEventListener("click", function () {
  if (mainInput.value && peopleInput.value === "") {
    mainInput.style.border = "solid 1px red";
    peopleInput.style.border = "solid 1px red";
  } else {
    let tipAmount = document.getElementById("tipAmount");
    let personCost = document.getElementById("personCost");
    tipAmount.innerHTML = `${
      Math.floor((((mainInput.value / peopleInput.value) * 25) / 100) * 100) /
      100
    }`;
    tipAmount = parseFloat(tipAmount.innerHTML);
    personCost.innerHTML = `${
      Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
    }`;
  }
});

fiftyPerc.addEventListener("click", function () {
  if (mainInput.value && peopleInput.value === "") {
    mainInput.style.border = "solid 1px red";
    peopleInput.style.border = "solid 1px red";
  } else {
    let tipAmount = document.getElementById("tipAmount");
    let personCost = document.getElementById("personCost");
    tipAmount.innerHTML = `${
      Math.floor((((mainInput.value / peopleInput.value) * 50) / 100) * 100) /
      100
    }`;
    tipAmount = parseFloat(tipAmount.innerHTML);
    personCost.innerHTML = `${
      Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
    }`;
  }
});

// custom.addEventListener("click", function () {
//   if (mainInput.value && peopleInput.value === "") {
//     mainInput.style.border = "solid 1px red";
//     peopleInput.style.border = "solid 1px red";
//   } else {
//     let tipAmount = document.getElementById("tipAmount");
//     let personCost = document.getElementById("personCost");
//     tipAmount.innerHTML = `${
//       Math.floor(
//         (((mainInput.value / peopleInput.value) * custom.value) / 100) * 100
//       ) / 100
//     }`;
//     tipAmount = parseFloat(tipAmount.innerHTML);
//     personCost.innerHTML = `${
//       Math.floor((mainInput.value / peopleInput.value + tipAmount) * 100) / 100
//     }`;
//   }
// });

reset.addEventListener("click", function () {
  mainInput.value = "";
  pplAmount.value = "";
  document.getElementById("personCost").innerText = "";
  document.getElementById("tipAmount").innerText = "";
  document.getElementById("custom").value = "";
});
