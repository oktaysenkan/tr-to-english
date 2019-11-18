function getAllWords() {
  return new Promise((resolve, reject) => {
    fetch('/most-used-1000-word/data/words.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((error) => {
        reject(error);
      });
  });
}

console.log("sad");



var deneme;
getAllWords()
  .then((data) => {
    let random = Math.floor(Math.random() * (999 - 0) + 0);
    console.log(random);

    console.log(data[random]);
  }).catch((error) => {
    console.log(error);
  });

var targetElement = document.querySelectorAll(".answer");
targetElement.forEach((element) => {
  element.addEventListener('click', ((e) => {
    element.classList.remove("click-animation");

    setInterval(() => {
      element.classList.add("click-animation");
    }, 10)
  }))
});