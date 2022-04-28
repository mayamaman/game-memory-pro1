// מערך קלפים
let cards = ["A", 'A', "B", 'B', "C", 'C', "D", 'D', "F", 'F', "G", 'G'];
shufelCards();

let board = document.getElementById("board-card");

// מערך ליצירת קלפים בלולאה
function addcards() {
  for (i in cards) {
    let elem = document.createElement('div')
    elem.innerText = cards[i];
    elem.addEventListener("click", click)
    elem.className = "cards";
    elem.setAttribute = ("id", "card" + i)
    elem.classList.add("hidden");
    board.appendChild(elem)

  }
}

let click = (event) => {
  event.target.classList.remove("hidden");
  event.target.classList.add("flip");
  let flipped = document.querySelectorAll(".flip")
  console.log(flipped);
  if (flipped.length === 2) {
    if (flipped[0].textContent === flipped[1].textContent) {
      flipped.forEach(card => card.classList.remove("flip"))

      console.log("m");
    } else {
      flipped.forEach(card => card.classList.remove("flip"))
      setTimeout(() => {
        flipped.forEach(c => c.classList.add("hidden"))
      }, 2000)
    }
  }


}

addcards()

// לערבב קלפים
function shufelCards() {
  for (let i = 0; i < cards.length; i++) {
    let randomNum1;
    let randomNum2;

    // שולף מספר רנדומלי
    randomNum1 = Math.round(Math.random() * 10);


    2// שולף מספר רנדומלי
    randomNum2 = Math.round(Math.random() * 10);


    // מערך זמני
    let temp = cards[randomNum1];


    cards[randomNum1] = cards[randomNum2]
    cards[randomNum2] = temp;


  }
}


