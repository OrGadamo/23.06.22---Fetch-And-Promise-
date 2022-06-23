//promise tasks
//1,2
function getCheckDatePromise() {
  return new Promise((resolve, reject) => {
    const clientDate = new Date().getHours();
    clientDate < 11 ? resolve("Good Morning") : reject("Good Afternoon");
    // if (clientDate < 11) {
    //   resolve("Good Morning");
    // }
    // reject("Good Afternoon");
  });
}
function printDateMessage() {
  getCheckDatePromise()
    .then((data) => (document.body.innerHTML += `<h1>${data}</h1>`))
    .catch((err) => (document.body.innerHTML += `<h1>${err}</h1>`));
}
//3,4
function getIsDiveidedNumberPromise(num1, num2) {
  return new Promise((resolve, reject) => {
    num2 % num1 == 0 ? resolve("yes") : reject("no");
    // if (num2 % num1 == 0) {
    //   resolve("yes");
    // }
    // reject("no");
  });
}
function printIsThereRemain() {
  getIsDiveidedNumberPromise(12, 24)
    .then((data) => (document.body.innerHTML += `<h1>${data}</h1>`))
    .catch((err) => (document.body.innerHTML += `<h1>${err}</h1>`));
}
//5
function getIsNumberInArrayPromise(arr, num) {
  return new Promise((resolve, reject) => {
    arr.forEach((entry) => {
      if (entry == num) {
        resolve("yes number in Array");
      }
    });
    reject("No number is not in Array ");
  });
}
function printIsNumberInAraay() {
  getIsNumberInArrayPromise([1, 2, 3, 4, 5, 6, 7, 5, 6, 3, 7, 4, 5], 8)
    .then((data) => (document.body.innerHTML += `<h1>${data}</h1>`))
    .catch((err) => (document.body.innerHTML += `<h1>${err}</h1>`));
}
//7
async function getIsNumberInArray(arr, num) {
  try {
    await getIsNumberInArrayPromise(arr, num).then(
      (data) => (document.body.innerHTML += `<h1>${data}</h1>`)
    );
  } catch (error) {
    document.body.innerHTML += `<h1>${error}</h1>`;
  }
}
//fetch practice
//1-4
async function getResponse() {
  try {
    res_btn.disabled = true;
    loading.innerHTML = "<img style='width:10vw' src='Loading_gif.gif' />";
    await fetch("http://moviesmern.herokuapp.com/movies/all").then((data) =>
      console.log(data)
    );
  } catch (error) {
    console.log(error);
  } finally {
    res_btn.disabled = false;
    loading.innerHTML = "";
  }
}
//5,6
async function getSpecificResponce() {
  try {
    await fetch("http://cat-fact.herokuapp.com/facts").then((data) =>
      console.log(data)
    );
  } catch (error) {
    console.log(error);
  }
}
// getSpecificResponce();
