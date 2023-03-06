const reqUrl = "https://picsum.photos/v2/list?page=1&limit=10"; // ссылка запроса

let form = document.querySelector(".form"); // получение данных из <form>

form.addEventListener("submit", checkData); // слушатель-обработчик на кнопку

let arrValues = new Array(); // массив для данных из <form>

const resultNode = document.querySelector(".result"); // сообщение на странице под формой

// функция проверки введёных данных

function checkData(event) {
  event.preventDefault(); // остановка обновления страницы

  // получение значений из <input> в массив
  for (let i = 0; i < form.elements.length - 1; i++) {
    arrValues[i] = Number(form.elements[i].value); // приведение значений массива из 'string' в 'number'
  }

  // проверка значений массива на тип и диапазон
  let arrValuesFilter = arrValues.filter(function (item, i) {
    if (item >= 1 && item <= 10) {
      return item;
    } else {
      console.log(`${form.elements[i].id} вне диапазона от 1 до 10`);
      resultNode.innerHTML = `${form.elements[i].id} вне диапазона от 1 до 10`;
    }
  });
  console.log(arrValuesFilter);

  // проверка кол-ва значений
  if (arrValuesFilter.length === 0) {
    console.log("Номер страницы и лимит вне диапазона от 1 до 10");
    resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (arrValuesFilter.length === arrValues.length) {
    dataRequest();
  }
}

// функция запроса данных на сервер

function dataRequest() {
  let params = new URLSearchParams(reqUrl);
  params.set("page", arrValues[0]);
  params.set("limit", arrValues[1]);
  let paramsString = params.toString();
  console.log(paramsString);
  fetch(paramsString);
}

// params.set("page", arrValues[0]);
// params.set("limit", arrValues[1]);
// const paramsString = params.toString();
// console.log(paramsString);
// fetch(params);

// // ссылка запроса

// const reqUrl = "https://picsum.photos/v2/list?page=1&limit=10";
// let form = document.querySelector(".form"); // получение данных из <form>
// let arrValues = new Array();
// let i = 0;
// // console.log(arrValues);

// // функция проверки введёных данных

// function checkData(event) {
//   event.preventDefault(); // остановка обновления страницы

//   for (i = 0; i < form.elements.length - 1; i++) {
//     arrValues[i] = Number(form.elements[i].value);
//   }
//   console.log(arrValues);

//   if (typeof arrValues[0] !== "number" || typeof arrValues[1] !== "number") {
//     console.log("Номер страницы и лимит вне диапазона от 1 до 10");
//   } else if (arrValues[0] < 1 || arrValues[0] > 10) {
//     console.log("Номер страницы вне диапазона от 1 до 10");
//   } else if (arrValues[1] < 1 || arrValues[1] > 10) {
//     console.log("Лимит вне диапазона от 1 до 10");
//   } else if (isNaN(arrValues[0]) || isNaN(arrValues[1])) {
//     console.log("Номер страницы и лимит вне диапазона от 1 до 10");
//   } else {
//     dataRequest();
//   }
// }

// // сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input,
// // а GET-параметр limit — это введённое число второго input

// function dataRequest() {
//   const params = new URLSearchParams(reqUrl);
//   params.set("page", arrValues[0]);
//   params.set("limit", arrValues[1]);
//   console.log(params);

//   //   fetch(`/${paramsNew}`);
// }

// // слушатель-обработчик на кнопку

// form.addEventListener("submit", checkData);
