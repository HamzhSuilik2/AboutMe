'use strict'
var name =prompt("What is your name ?");

alert("welcome "+ name);
var score =0;

// question_1 ***********************************************
var question_1 =prompt("Am I mechanical engineer ? (Yes/No)or(Y/N)");

question_1=question_1.toLocaleLowerCase();

if (question_1=='n' || question_1=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_2 ***********************************************
var question_2 =prompt("Am I 73 years old ? (Yes/No)or(Y/N)");

question_2=question_2.toLocaleLowerCase();

if (question_2=='n' || question_2=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_3 ***********************************************
var question_3 =prompt("I live in Amman (Yes/No)or(Y/N)");

question_3=question_3.toLocaleLowerCase();

if (question_3=='y' || question_3=='yes'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_4 ***********************************************
var question_4 =prompt("I love programming (Yes/No)or(Y/N)");

question_4=question_4.toLocaleLowerCase();

if (question_4=='y' || question_4=='yes'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************

// question_5 ***********************************************
var question_5 =prompt("I studied at the University of Jordan (Yes/No)or(Y/N)");

question_5=question_5.toLocaleLowerCase();

if (question_5=='n' || question_5=='no'){
    alert("The answer is correct");
    score++;
}else{
    alert("The answer is wrong");
}
// ***********************************************************




// ****************************************** > lab3 <***********************************************
let attempts =6;
var guess;
//***************************************************************************************************


function check_age(age){
    var massage ='Wrong';

    if(age<=18){
        massage='Wrong! ,your guess is too low';
    }

    if(age>18 && age<24){
        massage='Wrong! ,your guess is low';
    }

    if(age>24 && age<=34){
        massage='Wrong! ,your guess is high';
    }

    if(age==24){
        massage='Grate ,Your answer is correct';
    }

    if(age>34){
        massage='Wrong! ,your guess is too high';
    }

    return massage;
}

attempts =4;

guess='0';

while(attempts>0){

    guess =prompt("Guess how old I am ?(You have "+attempts+" attempts)");

    if(check_age(guess)=='Grate ,Your answer is correct'){
        alert("Grate,Your answer is correct");
        score++;
        break;
    }else{
        attempts-=1;
        alert(check_age(guess)+", remaining attempts: "+attempts)
    }
    
}

//***************************************************************************************************

let movies =['Moonlight','The Social Network','Holy Motors','Boyhood','Get Out','Toni Erdmann','The Master','Roma','Mad Max: Fury Road','Carol'];

function check_answer(a){
    var check =false;
    for(let i=0;i<movies.length;i++){
        if(a==movies[i]){
            check=true;
            break;
        }
    }
    return check;
}


attempts =6;

while(attempts>0){

    guess =prompt("Guess one of my top 10 movies for me ?(You have "+attempts+" attempts)");

    if(check_answer(guess)){
        alert("Grate,Your answer is correct");
        score++;
        break;
    }else{
        attempts-=1;
        alert("Wrong answer , remaining attempts: "+attempts)
    }
    
}

// -------------------------------


alert("Yore score is :"+score +" Out of 7");

document.getElementById("welcome").innerText="welcome "+ name;
document.getElementById("score").innerText="Yore score is :"+score +" Out of 7";



