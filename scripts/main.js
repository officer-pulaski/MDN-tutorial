const myHeading = document.querySelector('#page-title');
const paragraphs = document.querySelectorAll('p');
const foregroundSelect = document.querySelector('.foreground');
const backgroundSelect = document.querySelector('.background');
const myImage = document.querySelector('img');
const changeUserBtn = document.querySelector('.change-user');


// Back to Top button
document.querySelector('.to-top').addEventListener('click', () => {
  window.scrollTo(0, 75);
});

// Add CSS colors to selectors
document.addEventListener('DOMContentLoaded', () => {
  for(let i = 0; i < CSS_COLOR_NAMES.length; i++){
    let selectOption = `<option value="${CSS_COLOR_NAMES[i]}">${CSS_COLOR_NAMES[i]}</option>`;
    foregroundSelect.innerHTML += selectOption;
    backgroundSelect.innerHTML += selectOption;
  };
});

// submit for color changes
const mySubmit = document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const bg = backgroundSelect.value;
  const fg = foregroundSelect.value;
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  if(bg !== "" && fg !== ""){
    html.style.backgroundColor = bg;
    body.style.backgroundColor = fg;
  };
});

// Change image with getAttribute() & setAttribute('attr', 'new-value')
myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  mySrc === './images/firefox-logo.png' ? 
    myImage.setAttribute('src', './images/firefox-logo2.png')
    :
    myImage.setAttribute('src', './images/firefox-logo.png');
}

// Change User Button
document.addEventListener('DOMContentLoaded', () => {
  if(myHeading.textContent !== 'This is my test site for MDN Docs tutorial'){
    myHeading.style.fontSize = '60px';
  } else {
    myHeading.style.fontSize = '35px';
  }
})

function setUserName(){
  let myName = prompt('Please enter your name.');
  if(myName !== null && myName !== ''){
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    myHeading.style.fontSize = '60px';
  } else {
    alert('Please provide a valid username!');
    setUserName();
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

changeUserBtn.onclick = () => setUserName();



































const CSS_COLOR_NAMES = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];