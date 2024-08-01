const data = localStorage.getItem("itemData");

console.log(data);

const imageElement = document.createElement("img");
imageElement.src = data;
imageElement.height = 400;
imageElement.width = 400;

const rootElement = document.getElementById("root");

rootElement.appendChild(imageElement);
