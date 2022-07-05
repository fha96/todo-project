'use strict';

//prompt the name from user
function getName(){
var x=prompt("Please Enter your Name !");
return x;
}
const name1= getName();
//prompt the gender from user
let gender = prompt("Please Enter your gender (male/female)");
//prompt age and alert the user when he enters a not valid value
while(prompt("What is your age ?")<=0){
    alert("Please enter a valid value");
};
//ask the user if he wants to skip welcoming message
//show welcoming message to user including his name with title Mr or Ms regarding to his gender
//alert his name without title if the gender was not male or female
if(confirm("Would you like to skip welcoming message ?")){
    //do nothing
}else if(gender ==='male'){
    alert("Welcome Mr. "+ name1+ " ! ");
}else if( gender === 'female'){
    alert("Welcome Ms. "+ name1+ " ! ");
}else{
    alert("Welcome "+ name1);
}

let question1 =confirm("Did you finished your breakfast today ? (ok=Yes/cancel=No)");
let question2 =confirm("Do you like animals ? (ok=Yes/cancel=No)");
let question3 =confirm("Do you have brothers ? (ok=Yes/cancel=No)");

function checkAnswer(answer){
    switch(answer){
        case true:
            return "Yes";
            break;
        case false:
                return "No";
                break;
        default :
        return "invalid";
    }
}

const arrOfAnswers=[];
arrOfAnswers.push(checkAnswer(question1));
arrOfAnswers.push(checkAnswer(question2));
arrOfAnswers.push(checkAnswer(question3));

for(let i=0;i<arrOfAnswers.length;i++){
    console.log(i+" : "+arrOfAnswers[i]);
}

