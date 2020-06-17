document
  .querySelector("#button-house")
  .addEventListener("click", getHouse, changebackground);

function changebackground() {
  document.querySelector(".btn-btn1").style.backgroundColor = "red";
}

function getHouse(e) {
  // create XHR object

  const xhr = new XMLHttpRequest();
  //open
  const apikey =
    "key=$2a$10$K0COB7glAMIpqJ8wu9gx9e.WDqjqI3wSwa3JqTXjUeIOsfRQTMYla";
  xhr.open("GET", `https://www.potterapi.com/v1/houses/?${apikey}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (character) {
        output += `House Name:<li>${character.name}, Mascot:${character.mascot}, Head of house:${character.headOfHouse}, House Ghost: ${character.houseGhost}</li>`;
      });
      document.querySelector(".house-output").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}




document.querySelector("#sorting-hat").addEventListener("click", sortingHat);

function sortingHat(e) {
  // create XHR object

  const xhr = new XMLHttpRequest();
  //open
  const apikey =
    "key=$2a$10$K0COB7glAMIpqJ8wu9gx9e.WDqjqI3wSwa3JqTXjUeIOsfRQTMYla";
  xhr.open("GET", `https://www.potterapi.com/v1/sortingHat?${apikey}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      document.querySelector(".house-output").innerHTML = response;
    }
  };
  xhr.send();
  e.preventDefault();
}

// get charactor

document.querySelector("#character").addEventListener("click", getCharater);

function getCharater(e) {
  // create XHR object

  const xhr = new XMLHttpRequest();
  //open
  const apikey =
    "key=$2a$10$K0COB7glAMIpqJ8wu9gx9e.WDqjqI3wSwa3JqTXjUeIOsfRQTMYla";
  xhr.open("GET", `https://www.potterapi.com/v1/characters?${apikey}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      console.log(response);
      let output = "";
      response.forEach(function (character) {
        output += `ID: ${character._id} Name:<li>${character.name}, Role:${character.role}, House:${character.house}, School: ${character.school}</li>`;
      });
      const characters = (document.querySelector(
        ".house-output"
      ).innerHTML = output);
    }
  };

  xhr.send();
  e.preventDefault();
}

// get spell

document.querySelector("#spells").addEventListener("click", getSpells);

function getSpells(e) {
  // create XHR object

  const xhr = new XMLHttpRequest();
  //open
  const apikey =
    "key=$2a$10$K0COB7glAMIpqJ8wu9gx9e.WDqjqI3wSwa3JqTXjUeIOsfRQTMYla";
  xhr.open("GET", `https://www.potterapi.com/v1/spells?${apikey}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      response.forEach(function (spell) {
        output += `Spell Name:<li>${spell.spell}, Type:${spell.type}, Effect:${spell.effect}</li>`;
      });
      document.querySelector(".house-output").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
