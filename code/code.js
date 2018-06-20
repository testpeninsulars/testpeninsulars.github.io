if(!localStorage.getItem('userTestName')){
  setLocalStorageUserName();
}

var peninsularsArray = [
  {name: ["Лабрадор", "лабрадор", "лабрадор ", "Лабрадор ", " лабрадор", " Лабрадор"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 55,
  longitude: -70,
  url: "images/labrador.png"
  },
  {name: ["Пиренейский", " Пиренейский", "Пиренейский ", "пиренейский", " пиренейский", "пиренейский "],
  country: ["Испания", "Испания ", " Испания", "испания", "испания ", " испания", "Португалия", " Португалия", "Португалия ", "португалия", "португалия ", " португалия", "Андорра", " Андорра", "Андорра ", "андорра", " андорра", "андорра "],
  latitude: 40,
  longitude: -5,
  url: "images/pirenejskij.jpg"
  },
  {name: ["Балканский", " Балканский", "Балканский ", "балканский", " балканский", "балканский ", "Балканы", " Балканы", "Балканы ", "балканы", " балканы", "балканы "],
  country: ["Греция", " Греция", "Греция ", "греция", " греция", "греция ", "Албания", "албания", " Албания", "Албания ", " албания", "албания ", "Болгария", " Болгария", "Болгария ", "болгария", " болгария", "болгария ", "Босния и Герцеговина", "Босния и герцеговина", "босния и герцеговина", "Италия", "италия", "Македония", "македония", "Румыния", "румыния", "Сербия", "сербия", "Словения", "словения", "Турция", "турция", "Хорватия", "хорватия", "Черногория", "черногория" ],
  latitude: 10,
  longitude: 12,
  url: "images/balkanskij.jpg"
  },
  {name: ["Бретань", " Бретань", "Бретань ", "бретань", " бретань", "бретань "],
  country: ["Франция", "Франция ", " Франция", "франция", " франция", "франция "],
  latitude: 3,
  longitude: 49,
  url: "images/bretanj.jpg"
  },
  {name: ["Чукотский", " Чукотский", "Чукотский ", "чукотский", " чукотский", "чукотский ", "Чукотка", " Чукотка", "Чукотка ", "чукотка", " чукотка", "чукотка "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 65,
  longitude: -175,
  url: "images/chukotka.jpg"
  },
  {name: ["Ютландия", " Ютландия", "Ютландия ", "ютландия", " ютландия", "ютландия ", "ютландский", " ютландский", "ютландский ", "Ютландский", " Ютландский", "Ютландский "],
  country: ["Дания", " Дания", "Дания ", "дания", " дания", "дания "],
  latitude: 55,
  longitude: 10,
  url: "images/jutlandija.jpg"
  },
  {name: ["Кольский", "Кольский ", " Кольский", "кольский", " кольский", "кольский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 69,
  longitude: 39,
  url: "images/koljskij.jpg"
  },
  {name: ["Пелопоннес", " Пелопоннес", "Пелопоннес ", "пелопоннес", " пелопоннес", "пелопоннес ", "Пелопоннесский", " Пелопоннесский", "Пелопоннесский ", "пелопоннесский", " пелопоннесский", "пелопоннесский "],
  country: ["Греция", " Греция", "Греция ", "греция", " греция", "греция "],
  latitude: 38,
  longitude: 22,
  url: "images/peloponnes.jpg"
  },
  {name: ["Калифорния", " Калифорния", "Калифорния ", "калифорния", " калифорния", "калифорния ", "Калифорнийский", " Калифорнийский", "Калифорнийский ", "калифорнийский", " калифорнийский", "калифорнийский "],
  country: ["Мексика", " Мексика", "Мексика ", "мексика", " мексика", "мексика "],
  latitude: 27,
  longitude: -115,
  url: "images/california.png"
  },
  {name: ["Флорида", " Флорида", "Флорида ", "флорида", "флорида ", " флорида"],
  country: ["США", " США", "США ", "сша", " сша", "сша ", "Сша", " Сша", "Сша "],
  latitude: 26,
  longitude: -82,
  url: "images/florida.png"
  },
  {name: ["Юкатан", "Юкатан ", " Юкатан", "юкатан", " юкатан", "юкатан ", "Юкатанский", "Юкатанский ", " Юкатанский", "юкатанский", " юкатанский", "юкатанский "],
  country: ["Мексика", " Мексика", "Мексика ", "мексика", " мексика", "мексика "],
  latitude: 20,
  longitude: -90,
  url: "images/yukatan.png"
  },
  {name: ["Аляска", "Аляска ", " Аляска", "аляска", " аляска", "аляска ", "Аляскинский", "Аляскинский ", " Аляскинский", "аляскинский", " аляскинский", "аляскинский "],
  country: ["США", " США", "США ", "сша", " сша", "сша ", "Сша", " Сша", "Сша "],
  latitude: 55,
  longitude: -160,
  url: "images/alaska.png"
  },
  {name: ["Индостан", "Индостан ", " Индостан", "индостан", " индостан", "индостан ", "Индостанский", "Индостанский ", " Индостанский", "индостанский", " индостанский", "индостанский "],
  country: ["Индия", " Индия", "Индия ", "индия", " индия", "индия "],
  latitude: 19,
  longitude: 80,
  url: "images/indostan.png"
  },
  {name: ["Камчатка", " Камчатка", "Камчатка ", "камчатка", " камчатка", "камчатка ", "Камчатский", " Камчатский", "Камчатский ", "камчатский", " камчатский", "камчатский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 55,
  longitude: 160,
  url: "images/kamchatka.png"
  },
  {name: ["Малая Азия", "Малая Азия ", "Малая азия", "Малая азия ", "малая азия", "малая азия ", "Малоазиатский", "Малоазиатский ", "малоазиатский", "малоазиатский ", " малоазиатский", " Малоазиатский"],
  country: ["Турция", " Турция", "Турция ", "турция", " турция", "турция ", "Турецкая республика", "Турецкая Республика", "Турецкая республика ", "Турецкая Республика ", "турецкая республика", "турецкая республика "],
  latitude: 39,
  longitude: 32,
  url: "images/malaja_asia.png"
  },
  {name: ["Таймыр", " Таймыр", "Таймыр ", "таймыр", " таймыр", "таймыр ", "Таймырский", " Таймырский", "Таймырский ", "таймырский", " таймырский", "таймырский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 73,
  longitude: 100,
  url: "images/taymyr.png"
  },
  {name: ["Аппенинский", "Аппенинский ", " Аппенинский", "аппенинский", " аппенинский", "аппенинский ", "Аппенины", "Аппенины ", " Аппенины", "аппенины", " аппенины", "аппенины "],
  country: ["Италия", "Италия ", " Италия", "италия", " италия", "италия "],
  latitude: 42,
  longitude: 15,
  url: "images/appeninskij.png"
  },
  {name: ["Малакка", "Малакка ", " Малакка", "малакка", " малакка", "малакка ", "Малаккский", "Малаккский ", " Малаккский", "малаккский", " малаккский", "малаккский "],
  country: ["Малайзия", "малайзия", " Малайзия", "Малайзия ", " малайзия", "малайзия ", "Мьянма", " Мьянма", "Мьянма ", "мьянма", " мьянма", "мьянма ", "Таиланд", "Таиланд ", " Таиланд", "таиланд", " таиланд", "таиланд "],
  latitude: 7,
  longitude: 100,
  url: "images/malakka.png"
  },
  {name: ["Сомали", "сомали", " сомали", "сомали ", " Сомали", "Сомали ", "Сомалийский", "сомалийский", " сомалийский", "сомалийский ", " Сомалийский", "Сомалийский "],
  country: ["Сомали", "сомали", " сомали", "сомали ", " Сомали", "Сомали ", "Эфиопия", " Эфиопия", "Эфиопия ", "эфиопия", " эфиопия", "эфиопия "],
  latitude: 5,
  longitude: 47,
  url: "images/somali.png"
  }
];

var islandsArray = [
  {name: ["Сицилия", " Сицилия", "Сицилия ", "сицилия ", " сицилия", "сицилия"],
  country: ["Италия", "Италия ", " Италия", "италия", " италия", "италия "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sicilia.jpg"
  },
  {name: ["Сардиния", " Сардиния", "Сардиния ", "сардиния ", " сардиния", "сардиния"],
  country: ["Италия", "Италия ", " Италия", "италия", " италия", "италия "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sardinia.jpg"
  },
  {name: ["Корсика", " Корсика", "Корсика ", "корсика ", " корсика", "корсика"],
  country: ["Франция", "Франция ", " Франция", "франция", " франция", "франция "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/corsica.jpg"
  },
  {name: ["Кипр", " Кипр", "Кипр ", "кипр ", " кипр", "кипр"],
  country: ["Кипр", " Кипр", "Кипр ", "кипр ", " кипр", "кипр"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/cypr.jpg"
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
    question: "Какая страна находится на этом объекте?",
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
    question: "Как называется этот объект?",
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
var rightArrayAnswer = [];
var dataArray = [];


function setLocalStorageUserName(){
  var name = prompt("Пожалуйста, представьтесь", "Господин Президент");
  localStorage.setItem("userTestName", name);
}

function askQuestion() {
  var question = document.getElementById("question");
  currentQuestion = typeOfQuestion[Math.floor(Math.random() * typeOfQuestion.length)];
  question.innerHTML = currentQuestion.question;
  if(Math.random()>0.5){
    dataArray = peninsularsArray;
  } else {
    dataArray = islandsArray;
  }

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
  document.getElementById("firstRadio").innerHTML = dataArray[varArray[0]].name;
  document.getElementById("secondRadio").innerHTML = dataArray[varArray[1]].name;
  document.getElementById("thirdRadio").innerHTML = dataArray[varArray[2]].name;
  document.getElementById("fourthRadio").innerHTML = dataArray[varArray[3]].name;
}

function fulfillArrayWithRandom(){
  for(var i=0;i<4;i++){
    var randomVar = Math.floor(dataArray.length * Math.random());
    while(varArray.some(function(number) {
      return number == randomVar;
    })){
      randomVar = Math.floor(dataArray.length * Math.random());
    }
    varArray.push(randomVar);
  }
}

function askQuestionType2(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("textArea")[0].innerHTML;
  textQuestion = dataArray[Math.floor(dataArray.length * Math.random())];
  rightArrayAnswer = textQuestion.country;
  document.getElementById("textQuestionObject").innerHTML = textQuestion.name[0];
}

function askQuestionType3(){
  var variants = document.getElementById("variants");
  variants.innerHTML = document.getElementsByClassName("pictureArea")[0].innerHTML;

  textQuestion = dataArray[Math.floor(dataArray.length * Math.random())];

  rightArrayAnswer = textQuestion.name;
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
    document.getElementsByClassName("listImage")[j].src = dataArray[varArray[j]].url;
    dropDownListRightAnswers[j] = dataArray[varArray[j]].name[0];
  }
}

function fulfillOptions(){
  for(var k=0; k<4; k++){
    document.getElementsByClassName("option")[k].innerHTML = dataArray[varArray[k]].name[0];
    document.getElementsByClassName("option")[k].value = dataArray[varArray[k]].name[0];
  }
}

function sendPaginationAnswer(){
  for(var i=0; i<4; i++){
    if(document.getElementsByClassName("radioButton")[i].checked==true){
      currentAnswer = dataArray[varArray[i]].name;
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
    if(dataArray[varArray[i]][parameter] * value > currentValue){
      currentValue = dataArray[varArray[i]][parameter] * value;
      currentNeededName = dataArray[varArray[i]].name;
    }
  }

  currentNeededName == currentAnswer ? alertRight() : alert("мимо. правильный ответ - "+ currentNeededName);
  clearField();
  checkIfFinish();
}

function checkType2(){
  rightArrayAnswer.some(function(rightAnswer){
    return rightAnswer == currentAnswer
  }) ? alertRight() : alert("мимо. правильный ответ - "+ rightArrayAnswer[0]);
  clearField();
  checkIfFinish();
}

function checkType3(){
  rightArrayAnswer.some(function(rightAnswer){
    return rightAnswer == currentAnswer
  }) ? alertRight() : alert("мимо. правильный ответ - "+ rightArrayAnswer[0]);
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
    showFinalWindow();
    // alert("Уважаемый " + localStorage.getItem('userTestName') + "! Тест окончен. Количество правильных ответов - "+ rightAnswersCounter);
    questionsCounter=0;
    rightAnswersCounter = 0;

  } else {
    askQuestion();
  }
}

function showFinalWindow(){
  document.getElementById("rightAnswers").innerHTML = " " + rightAnswersCounter;
  document.getElementById("numberOfQuestions").innerHTML = " " + numberOfQuestions;
  document.getElementById("userName").innerHTML = " " + localStorage.getItem('userTestName') +"!  ";
  checkRank();
  document.getElementById("question").innerHTML = document.getElementsByClassName("finalWindow")[0].innerHTML;
}

function checkRank(){
  if (rightAnswersCounter/numberOfQuestions < 0.3){
    document.getElementsByClassName("finalRankImage")[0].src = "images/final/bomzh.jpg";
  } else if (rightAnswersCounter/numberOfQuestions < 0.6){
    document.getElementsByClassName("finalRankImage")[0].src = "images/final/bledny.jpg";
  } else if (rightAnswersCounter/numberOfQuestions < 1){
    document.getElementsByClassName("finalRankImage")[0].src = "images/final/pacan.jpg";
  } else {
    document.getElementsByClassName("finalRankImage")[0].src = "images/final/gspd.jpg";
  }
}

function clearField(){
  document.getElementById("question").innerHTML = "";
  document.getElementById("variants").innerHTML = "";
  dataArray = [];
  varArray = [];
  rightArrayAnswer =[];
  currentAnswer = '';
  rightTextAnswer = '';
  currentQuestion = {};
  questionsCounter++;
  textQuestion = {};
  dropDownListArrayAnswer = [];
  dropDownListRightAnswers = [];
}

