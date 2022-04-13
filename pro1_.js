// // // להגדיר את הקלפים
const cards=["A",'A',"B",'B',"C",'C',"D",'D',"F",'F',"G",'G'];
console.log(cards);

// // לערבב קלפים


  for(let i=0 ;i < cards.length; i++)
  {
    let randomNum1;  
    let randomNum2;

    // שולף מספר רנדומלי
 randomNum1= Math.round(Math.random()*10);
console.log(randomNum1);

   2// שולף מספר רנדומלי
 randomNum2= Math.round ( Math.random()*10);
console.log(randomNum2);

// מערך זמני
let temp =cards[randomNum1];


cards[randomNum1]= cards[randomNum2]
cards[randomNum2]=temp;


  }

  
let GameTable= document

function cardselem( ){


let boardcards= document.getElementById("game_table")


for(let i=0 ; i< cards.length; i++)
{
 let elem= document.createElement ('div')

 elem.innerText= cards[i];

elem.className= "card";

 boardcards.appendChild(elem)
 

 
}
}
  

       cardselem()




    


