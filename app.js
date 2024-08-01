//global variables.
let rootElement;
let anchorTag;

const showElement = (data) => {
  console.log(data); // Log the data to the console

  // Create an img element
  anchorTag = document.createElement("a");
  anchorTag.href = "/myname.html";
  const imgElement = document.createElement("img");
  imgElement.src = data.url || ""; // Set the image source to the URL from the API
  imgElement.alt = data.title; // Set alt text to the title of the image
  imgElement.height = 400;
  imgElement.width = 400;
  anchorTag.appendChild(imgElement);

  // Get the root element and append the img element to it
  rootElement = document.getElementById("root");
  console.log(rootElement);
  rootElement.appendChild(anchorTag);

  anchorTag.addEventListener("click", () =>
    localStorage.setItem("itemData", data.url)
  );
};

function showPhotos() {
  const dates = document.querySelector("#dateValue").value;
  console.log(dates);

  const dataObj = fetch(
    `https://api.nasa.gov/planetary/apod?date=${dates}&api_key=uVtkEy8GNnGE4A1ViaUhEI5TnKCH99lTdU4ozIky`
  );

  dataObj
    .then((response) => response.json()) // Parse the JSON from the response
    .then((data) => {
      showElement(data); // Call showElement with the parsed data
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

const submitButton = document.getElementsByClassName("submitButton");
console.log(submitButton[0]);

submitButton[0].addEventListener("click", showPhotos);

//next page data.
