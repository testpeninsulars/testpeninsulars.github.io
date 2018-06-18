var peninsularsArray = [
  {name: "Лабрадор",
  country: "Канада",
  latitude: 55,
  longitude: -70,
  url: "images/labrador.png"
  },
  {name: "Пиренейский",
  country: "Испания",
  latitude: 40,
  longitude: -5,
  url: "images/pirenejskij.jpg"
  },
  {name: "Балканский",
  country: "Греция",
  latitude: 10,
  longitude: 12,
  url: "images/balkanskij.jpg"
  },
  {name: "Бретань",
  country: "Франция",
  latitude: 3,
  longitude: 49,
  url: "images/bretanj.jpg"
  },
  {name: "Чукотский",
  country: "Россия",
  latitude: 65,
  longitude: -175,
  url: "images/chukotka.jpg"
  },
  {name: "Ютландия",
  country: "Дания",
  latitude: 55,
  longitude: 10,
  url: "images/jutlandija.jpg"
  },
  {name: "Кольский",
  country: "Россия",
  latitude: 69,
  longitude: 39,
  url: "images/koljskij.jpg"
  },
  {name: "Пелопоннесс",
  country: "Россия",
  latitude: 38,
  longitude: 22,
  url: "images/peloponness.jpg"
  },
  {name: "Калифорния",
  country: "Мексика",
  latitude: 27,
  longitude: -115,
  url: "images/california.png"
  },
  {name: "Флорида",
  country: "США",
  latitude: 26,
  longitude: -82,
  url: "images/florida.png"
  },
  {name: "Юкатан",
  country: "Мексика",
  latitude: 20,
  longitude: -90,
  url: "images/yukatan.png"
  },
  {name: "Аляска",
  country: "США",
  latitude: 55,
  longitude: -160,
  url: "images/alaska.png"
  },
  {name: "Индостан",
  country: "Индия",
  latitude: 19,
  longitude: 80,
  url: "images/indostan.png"
  },
  {name: "Камчатка",
  country: "Россия",
  latitude: 55,
  longitude: 160,
  url: "images/kamchatka.png"
  },
  {name: "Малая Азия",
  country: "Турция",
  latitude: 39,
  longitude: 32,
  url: "images/malaja_asia.png"
  },
  {name: "Таймыр",
  country: "Россия",
  latitude: 73,
  longitude: 100,
  url: "images/taymyr.png"
  },
  {name: "Аппенинский",
  country: "Италия",
  latitude: 42,
  longitude: 15,
  url: "images/appeninskij.png"
  },
  {name: "Малакка",
  country: "Малайзия",
  latitude: 7,
  longitude: 100,
  url: "images/malakka.png"
  },
  {name: "Сомали",
  country: "Сомали",
  latitude: 5,
  longitude: 47,
  url: "images/somali.png"
  }
];


var typeOfQuestion = [
  // {
  //   id: 1,
  //   type: 1,
  //   question: "Какой из этих полуостровов расположен восточнее?",
  //   parameter: 'longitude',
  //   val: 1
  // },
  // {
  //   id: 2,
  //   type: 1,
  //   question: "Какой из этих полуостровов расположен севернее?",
  //   parameter: 'latitude',
  //   val: 1
  // },
  {
    id: 3,
    type: 2,
    question: "Какая страна находится на этом полуострове?",
    parameter: 'country',
    val: 'country'
  },
  // {
  //   id: 4,
  //   type: 1,
  //   question: "Какой из этих полуостровов расположен южнее?",
  //   parameter: 'latitude',
  //   val: -1
  // },
  // {
  //   id: 5,
  //   type: 1,
  //   question: "Какой из этих полуостровов расположен западнее?",
  //   parameter: 'longitude',
  //   val: -1
  // },
  {
    id: 6,
    type: 3,
    question: "Как называется этот полуостров?",
    parameter: 'name',
    val: 'name'
  },
  {
    id: 12,
    type: 4,
    question: "Совмести картинку и объект",
    parameter: 'name',
    val: 'name'
  }
]
var numberOfQuestions = 5;
var questionsCounter = 0;
var rightAnswersCounter = 0;
var varArray = [];
var currentAnswer = '';
var currentQuestion = {};
var textQuestion = {};
var rightTextAnswer = '';
var dropDownListRightAnswers = [];
var dropDownListArrayAnswer = [];


function askQuestion() {
  var question = document.getElementById("question");
  currentQuestion = typeOfQuestion[Math.floor(Math.random() * typeOfQuestion.length)];
  question.innerHTML = currentQuestion.question;
  if (currentQuestion.type == 1) {
    askQuestionType1();
  }
  else if (currentQuestion.type == 2) {
    askQuestionType2();
  }
  else if (currentQuestion.type == 3) {
    askQuestionType3();
  }
  else if (currentQuestion.type == 4) {
    askQuestionType4();
  }
}



function askQuestionType1(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("radio")[0].innerHTML;
  fulfillArrayWithRandom();

  document.getElementById("firstRadio").innerHTML = peninsularsArray[varArray[0]].name;
  document.getElementById("secondRadio").innerHTML = peninsularsArray[varArray[1]].name;
  document.getElementById("thirdRadio").innerHTML = peninsularsArray[varArray[2]].name;
  document.getElementById("fourthRadio").innerHTML = peninsularsArray[varArray[3]].name;
}

function fulfillArrayWithRandom(){
  for(var i=0;i<4;i++){
    var randomVar = Math.floor(peninsularsArray.length * Math.random());
    while(varArray.some(function(number) {
      return number == randomVar;
    })){
      randomVar = Math.floor(peninsularsArray.length * Math.random());
    }
    varArray.push(randomVar);
  }
}

function askQuestionType2(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("textArea")[0].innerHTML;
  textQuestion = peninsularsArray[Math.floor(peninsularsArray.length * Math.random())];
  rightTextAnswer = textQuestion.country;

  document.getElementById("textQuestionObject").innerHTML = textQuestion.name;
}

function askQuestionType3(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("pictureArea")[0].innerHTML;

  textQuestion = peninsularsArray[Math.floor(peninsularsArray.length * Math.random())];
  rightTextAnswer = textQuestion.name;
  document.getElementById("peninsularImage").src = textQuestion.url;
}



function askQuestionType4(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("dropDownList")[0].innerHTML;
  fulfillArrayWithRandom();
 
  fullfillDropdownURLs();
  varArray.sort();

  fulfillOptions();
  for(var i=0; i<4; i++){
    document.getElementsByClassName("listPictureVariant")[i].innerHTML = document.getElementsByClassName("selectField")[0].innerHTML;
  }
}

function fullfillDropdownURLs(){
  for(var j=0; j<4; j++){
    document.getElementsByClassName("listImage")[j].src = peninsularsArray[varArray[j]].url;
    dropDownListRightAnswers[j] = peninsularsArray[varArray[j]].name;
  }
}

function fulfillOptions(){
  for(var k=0; k<4; k++){
    document.getElementsByClassName("option")[k].innerHTML = peninsularsArray[varArray[k]].name;
    document.getElementsByClassName("option")[k].value = peninsularsArray[varArray[k]].name;
  }
}

function sendPaginationAnswer(){
  for(var i=0; i<4; i++){
    if(document.getElementsByClassName("radioButton")[i].checked==true){
      currentAnswer = peninsularsArray[varArray[i]].name;
      break
    }
  }
  detectRightAnswer();
}

function sendTextAnswer(){
  currentAnswer = document.getElementById("textField").value;
  detectRightAnswer();
}

function sendImageAnswer(){
  currentAnswer = document.getElementById("textPicture").value;
  detectRightAnswer();
}

function sendDropdownListAnswer(){
  for(var i=0;i<4;i++){
    var s = document.getElementsByClassName("selectBlock")[i];
    dropDownListArrayAnswer[i] = s.options[s.selectedIndex].value;
  }
  detectRightAnswer();
}

function detectRightAnswer() {
  if (currentQuestion.type == 1) {
    checkType1();
  }
  else if(currentQuestion.type == 2) {
    checkType2();
  }
  else if (currentQuestion.type == 3) {
    checkType3();
  }
  else if (currentQuestion.type == 4) {
    checkType4();
  }
}

function checkType1(){
  var parameter = currentQuestion.parameter;
  var value = currentQuestion.val;
  var currentNeededName = '';
  var currentValue = -180;
  for(var i = 0; i<4; i++){
    if(peninsularsArray[varArray[i]][parameter] * value > currentValue){
      currentValue = peninsularsArray[varArray[i]][parameter] * value;
      currentNeededName = peninsularsArray[varArray[i]].name;
    }
  }

  currentNeededName == currentAnswer ? alertRight() : alert("мимо. правильный ответ - "+ currentNeededName);
  clearField();
  checkIfFinish();
}

function checkType2(){
  rightTextAnswer == currentAnswer ? alertRight() : alert("мимо. правильный ответ - "+ rightTextAnswer);
  clearField();
  checkIfFinish();
}

function checkType3(){
  textQuestion.name == currentAnswer ? alertRight() : alert("мимо. правильный ответ - "+ rightTextAnswer);
  clearField();
  checkIfFinish();
}

function checkType4(){
  dropDownListArrayAnswer.join("") == dropDownListRightAnswers.join("") ? alertRight() : alert("мимо. правильный ответ - "+dropDownListRightAnswers);
  clearField();
  checkIfFinish();
}

function alertRight(){
  alert("верно!");
  rightAnswersCounter++;
}

function checkIfFinish(){
  if(questionsCounter == numberOfQuestions) {
    alert("Тест окончен. Количество правильных ответов - "+ rightAnswersCounter);
    questionsCounter=0;
    rightAnswersCounter = 0;
  } else {
    askQuestion();
  }
}

function clearField(){
  document.getElementById("question").innerHTML = "";
  document.getElementById("variants").innerHTML = "";
  varArray = [];
  currentAnswer = '';
  rightTextAnswer = '';
  currentQuestion = {};
  questionsCounter++;
  textQuestion = {};
  dropDownListArrayAnswer = [];
  dropDownListRightAnswers = [];
}
