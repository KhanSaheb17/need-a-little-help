let input1 = document.getElementById("fileInput1");
let imageName1 = document.getElementById("imageName1");
let btn1 = document.querySelector("#btn1");


let input2 = document.getElementById("fileInput2");
let imageName2 = document.getElementById("imageName2");
let btn2 = document.querySelector("#btn2");


let input3 = document.getElementById("fileInput3");
let imageName3 = document.getElementById("imageName3");
let btn3 = document.querySelector("#btn3");



input1.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];
  btn1.classList.add("active");

  imageName1.innerText = "File 1 : " + inputImage.name;
});


input2.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];
  btn2.classList.add("active");

  imageName2.innerText = "File 2 : " + inputImage.name;
});


input3.addEventListener("change", () => {
  let inputImage = document.querySelector("input[type=file]").files[0];
  btn3.classList.add("active");

  imageName3.innerText = "File 3 : " + inputImage.name;
});
