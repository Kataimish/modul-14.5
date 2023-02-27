const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

btn.addEventListener("click", () => {
  let reqUrl = "https://picsum.photos";
  let input = document.querySelectorAll(".inpt");
  let arr = new Array();

  for (let i = 0; i < input.length; i++) {
    arr[i] = input[i].value;
  }
  // console.log("массив arr: " + arr);

  let arrClean = arr.filter(function (item) {
    if (item >= 100 && item <= 300) {
      return item;
    } else {
      resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    }
  });
  // console.log("массив arrClean: " + arrClean);

  if (arrClean.length === 2) {
    for (let item of arrClean) {
      reqUrl = reqUrl + "/" + item;
    }
    console.log(reqUrl);
    fetch(reqUrl)
      .then((response) => {
        // Объект ответа на запрос
        console.log("response", response);
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        const result = response.json();
        console.log("result", result);
        return result;
      })
      .then((data) => {
        // Объект результата в формате JSON
        console.log(data);
        //   const image = `<img
        //   src="${data.url}"
        //   class="card-image"
        // />
        //   `;
        // resultNode.innerHTML = image;
      })
      .catch(() => {
        console.log("error");
      });
  }
});
