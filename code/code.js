if(!localStorage.getItem('userTestName')){
  setLocalStorageUserName();
}

var peninsularsArray = [
  {name: ["Лабрадор", "лабрадор", "лабрадор ", "Лабрадор ", " лабрадор", " Лабрадор"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 55,
  longitude: -70,
  url: "images/peninsulars/labrador.png"
  },
  {name: ["Пиренейский", " Пиренейский", "Пиренейский ", "пиренейский", " пиренейский", "пиренейский "],
  country: ["Испания", "Испания ", " Испания", "испания", "испания ", " испания", "Португалия", " Португалия", "Португалия ", "португалия", "португалия ", " португалия", "Андорра", " Андорра", "Андорра ", "андорра", " андорра", "андорра "],
  latitude: 40,
  longitude: -5,
  url: "images/peninsulars/pirenejskij.jpg"
  },
  {name: ["Балканский", " Балканский", "Балканский ", "балканский", " балканский", "балканский ", "Балканы", " Балканы", "Балканы ", "балканы", " балканы", "балканы "],
  country: ["Греция", " Греция", "Греция ", "греция", " греция", "греция ", "Албания", "албания", " Албания", "Албания ", " албания", "албания ", "Болгария", " Болгария", "Болгария ", "болгария", " болгария", "болгария ", "Босния и Герцеговина", "Босния и герцеговина", "босния и герцеговина", "Италия", "италия", "Македония", "македония", "Румыния", "румыния", "Сербия", "сербия", "Словения", "словения", "Турция", "турция", "Хорватия", "хорватия", "Черногория", "черногория" ],
  latitude: 10,
  longitude: 12,
  url: "images/peninsulars/balkanskij.jpg"
  },
  {name: ["Бретань", " Бретань", "Бретань ", "бретань", " бретань", "бретань "],
  country: ["Франция", "Франция ", " Франция", "франция", " франция", "франция "],
  latitude: 3,
  longitude: 49,
  url: "images/peninsulars/bretanj.jpg"
  },
  {name: ["Чукотский", " Чукотский", "Чукотский ", "чукотский", " чукотский", "чукотский ", "Чукотка", " Чукотка", "Чукотка ", "чукотка", " чукотка", "чукотка "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 65,
  longitude: -175,
  url: "images/peninsulars/chukotka.jpg"
  },
  {name: ["Ютландия", " Ютландия", "Ютландия ", "ютландия", " ютландия", "ютландия ", "ютландский", " ютландский", "ютландский ", "Ютландский", " Ютландский", "Ютландский "],
  country: ["Дания", " Дания", "Дания ", "дания", " дания", "дания "],
  latitude: 55,
  longitude: 10,
  url: "images/peninsulars/jutlandija.jpg"
  },
  {name: ["Кольский", "Кольский ", " Кольский", "кольский", " кольский", "кольский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 69,
  longitude: 39,
  url: "images/peninsulars/koljskij.jpg"
  },
  {name: ["Пелопоннес", " Пелопоннес", "Пелопоннес ", "пелопоннес", " пелопоннес", "пелопоннес ", "Пелопоннесский", " Пелопоннесский", "Пелопоннесский ", "пелопоннесский", " пелопоннесский", "пелопоннесский "],
  country: ["Греция", " Греция", "Греция ", "греция", " греция", "греция "],
  latitude: 38,
  longitude: 22,
  url: "images/peninsulars/peloponnes.jpg"
  },
  {name: ["Калифорния", " Калифорния", "Калифорния ", "калифорния", " калифорния", "калифорния ", "Калифорнийский", " Калифорнийский", "Калифорнийский ", "калифорнийский", " калифорнийский", "калифорнийский "],
  country: ["Мексика", " Мексика", "Мексика ", "мексика", " мексика", "мексика "],
  latitude: 27,
  longitude: -115,
  url: "images/peninsulars/california.png"
  },
  {name: ["Флорида", " Флорида", "Флорида ", "флорида", "флорида ", " флорида"],
  country: ["США", " США", "США ", "сша", " сша", "сша ", "Сша", " Сша", "Сша "],
  latitude: 26,
  longitude: -82,
  url: "images/peninsulars/florida.png"
  },
  {name: ["Юкатан", "Юкатан ", " Юкатан", "юкатан", " юкатан", "юкатан ", "Юкатанский", "Юкатанский ", " Юкатанский", "юкатанский", " юкатанский", "юкатанский "],
  country: ["Мексика", " Мексика", "Мексика ", "мексика", " мексика", "мексика "],
  latitude: 20,
  longitude: -90,
  url: "images/peninsulars/yukatan.png"
  },
  {name: ["Аляска", "Аляска ", " Аляска", "аляска", " аляска", "аляска ", "Аляскинский", "Аляскинский ", " Аляскинский", "аляскинский", " аляскинский", "аляскинский "],
  country: ["США", " США", "США ", "сша", " сша", "сша ", "Сша", " Сша", "Сша "],
  latitude: 55,
  longitude: -160,
  url: "images/peninsulars/alaska.png"
  },
  {name: ["Индостан", "Индостан ", " Индостан", "индостан", " индостан", "индостан ", "Индостанский", "Индостанский ", " Индостанский", "индостанский", " индостанский", "индостанский "],
  country: ["Индия", " Индия", "Индия ", "индия", " индия", "индия "],
  latitude: 19,
  longitude: 80,
  url: "images/peninsulars/indostan.png"
  },
  {name: ["Камчатка", " Камчатка", "Камчатка ", "камчатка", " камчатка", "камчатка ", "Камчатский", " Камчатский", "Камчатский ", "камчатский", " камчатский", "камчатский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 55,
  longitude: 160,
  url: "images/peninsulars/kamchatka.png"
  },
  {name: ["Малая Азия", "Малая Азия ", "Малая азия", "Малая азия ", "малая азия", "малая азия ", "Малоазиатский", "Малоазиатский ", "малоазиатский", "малоазиатский ", " малоазиатский", " Малоазиатский"],
  country: ["Турция", " Турция", "Турция ", "турция", " турция", "турция ", "Турецкая республика", "Турецкая Республика", "Турецкая республика ", "Турецкая Республика ", "турецкая республика", "турецкая республика "],
  latitude: 39,
  longitude: 32,
  url: "images/peninsulars/malaja_asia.png"
  },
  {name: ["Таймыр", " Таймыр", "Таймыр ", "таймыр", " таймыр", "таймыр ", "Таймырский", " Таймырский", "Таймырский ", "таймырский", " таймырский", "таймырский "],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 73,
  longitude: 100,
  url: "images/peninsulars/taymyr.png"
  },
  {name: ["Аппенинский", "Аппенинский ", " Аппенинский", "аппенинский", " аппенинский", "аппенинский ", "Аппенины", "Аппенины ", " Аппенины", "аппенины", " аппенины", "аппенины "],
  country: ["Италия", "Италия ", " Италия", "италия", " италия", "италия "],
  latitude: 42,
  longitude: 15,
  url: "images/peninsulars/appeninskij.png"
  },
  {name: ["Малакка", "Малакка ", " Малакка", "малакка", " малакка", "малакка ", "Малаккский", "Малаккский ", " Малаккский", "малаккский", " малаккский", "малаккский "],
  country: ["Малайзия", "малайзия", " Малайзия", "Малайзия ", " малайзия", "малайзия ", "Мьянма", " Мьянма", "Мьянма ", "мьянма", " мьянма", "мьянма ", "Таиланд", "Таиланд ", " Таиланд", "таиланд", " таиланд", "таиланд "],
  latitude: 7,
  longitude: 100,
  url: "images/peninsulars/malakka.png"
  },
  {name: ["Арнем-Ленд", "Арнем-ленд", "арнем-ленд", "Арнем Ленд", "Арнем ленд", "арнем ленд"],
  country: ["Австралия", "австралия"],
  latitude: 19,
  longitude: 80,
  url: "images/peninsulars/arnem_lend.jpg"
  },
  {name: ["Кейп-Йорк", "Кейп-йорк", "кейп-йорк", "Кейп Йорк", "Кейп йорк", "кейп йорк"],
  country: ["Австралия", "австралия"],
  latitude: 5,
  longitude: 47,
  url: "images/peninsulars/cape_york.png"
  },
  {name: ["Сомали", "сомали", " сомали", "сомали ", " Сомали", "Сомали ", "Сомалийский", "сомалийский", " сомалийский", "сомалийский ", " Сомалийский", "Сомалийский "],
  country: ["Сомали", "сомали", " сомали", "сомали ", " Сомали", "Сомали ", "Эфиопия", " Эфиопия", "Эфиопия ", "эфиопия", " эфиопия", "эфиопия "],
  latitude: 5,
  longitude: 47,
  url: "images/peninsulars/somali.png"
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
  },
  {name: ["Хайнань","хайнань"],
  country: ["Китай", "китай", "КНР", "Кнр", "кнр"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/hainanj.jpg"
  },
  {name: ["Хоккайдо","хоккайдо", "Хоккаидо","хоккаидо"],
  country: ["Япония", "япония"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/hokkaido.jpg"
  },
  {name: ["Хонсю","хонсю"],
  country: ["Япония", "япония"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/honsu.jpg"
  },
  {name: ["Кюсю","кюсю"],
  country: ["Япония", "япония"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/kusu.jpg"
  },
  {name: ["Сикоку","сикоку"],
  country: ["Япония", "япония"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sikoku.jpg"
  },
  {name: ["Ява","ява"],
  country: ["Индонезия", "индонезия"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/java.jpg"
  },
  {name: ["Калимантан","калимантан"],
  country: ["Индонезия", "индонезия"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/kalimantan.jpg"
  },
  {name: ["Новая Гвинея","новая гвинея","Новая гвинея"],
  country: ["Индонезия", "индонезия", "Папуа - Новая Гвинея", "Папуа - новая гвинея", "папуа - новая гвинея", "Папуа - Новая гвинея", "Папуа Новая Гвинея", "Папуа новая гвинея", "папуа новая гвинея", "Папуа Новая гвинея"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/nova_guinea.jpg"
  },
  {name: ["Сулавеси","сулавеси"],
  country: ["Индонезия", "индонезия"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sulawesi.jpg"
  },
  {name: ["Суматра","суматра"],
  country: ["Индонезия", "индонезия"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sumatra.jpg"
  },
  {name: ["Лусон","лусон"],
  country: ["Филиппины", "филиппины"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/luson.jpg"
  },
  {name: ["Сахалин","сахалин"],
  country: ["Россия", " Россия", "Россия ", "россия", " россия", "россия ", "РФ", "Рф", "рф", "Российская федерация", "Российская Федерация", "российская федерация"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/sahalin.jpg"
  },
  {name: ["Тайвань","тайвань"],
  country: ["Китай", "китай", "КНР", "Кнр", "кнр"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/taiwan.jpg"
  },
  {name: ["Баффинова Земля","Баффинова земля", "баффинова земля"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/baffinova_zemla.jpg"
  },
  {name: ["Элсмир","элсмир"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/elsmir.jpg"
  },
  {name: ["Ньюфаундленд","ньюфаундленд", "Ньюфаундлэнд","ньюфаундлэнд"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/newfoundland.jpg"
  },
  {name: ["Виктория","виктория"],
  country: ["Канада", "канада", " Канада", " канада", "Канада ", "канада "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/victoria_canadian_island.jpg"
  },
  {name: ["Куба","куба"],
  country: ["Куба","куба"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/cuba.jpg"
  },
  {name: ["Гаити","гаити"],
  country: ["Гаити","гаити", "Доминиканская республика","доминиканская республика", "Доминиканская Республика"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/haiti.jpg"
  },
  {name: ["Ямайка","ямайка"],
  country: ["Ямайка","ямайка"],
  latitude: 0,
  longitude: 0,
  url: "images/islands/jamaica.jpg"
  },
  {name: ["Пуэрто-Рико","Пуэрто-рико", "пуэрто-рико","Пуэрто рико", "Пуэрто Рико","пуэрто рико"],
  country: ["США", " США", "США ", "сша", " сша", "сша ", "Сша", " Сша", "Сша "],
  latitude: 0,
  longitude: 0,
  url: "images/islands/jamaica.jpg"
  },
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
var numberOfQuestions = 10;
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
  clearField();
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
  document.getElementsByClassName("answer")[0].value = "Ответить";
  document.getElementsByClassName("answer")[0].onclick=function(){ sendDropdownListAnswer(); } ;
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

}

function checkType2(){
  questionsCounter++;
  rightArrayAnswer.some(function(rightAnswer){
    return rightAnswer == currentAnswer
  }) ? alertRight() : showPictureAreaAnswer();
  checkIfFinish();
}

function showPictureAreaAnswer(){
  document.getElementById("textAreaText").innerHTML = "Нет, не "+ currentAnswer+". Правильный ответ - "+rightArrayAnswer[0];
  changeButtonType();
}

function checkType3(){
  questionsCounter++;
  rightArrayAnswer.some(function(rightAnswer){
    return rightAnswer == currentAnswer
  }) ? alertRight() : showTextAreaAnswer();
  // alert("мимо. правильный ответ - "+ rightArrayAnswer[0]);
  checkIfFinish();

}

function showTextAreaAnswer(){
  document.getElementById("pictureAreaText").innerHTML = "Нет, не "+ currentAnswer+". Правильный ответ - "+rightArrayAnswer[0];
  changeButtonType();
}

function checkType4(){
  // document.getElementsByClassName("answer")[0].onclick=function(){ changeButtonType(); } ;
  questionsCounter++;
  changeButtonType();
  dropDownListArrayAnswer.join("") == dropDownListRightAnswers.join("") ? alertRight() : showDropDownRightAnswers();
  checkIfFinish();
  // alert("мимо. правильный ответ - "+dropDownListRightAnswers);

}

function showDropDownRightAnswers(){
  for(var i=0; i<4;i++){
    if(dropDownListArrayAnswer[i] != dropDownListRightAnswers[i]){
      document.getElementsByClassName("selectBlock")[i].style.color = "red";
    }
    document.getElementsByClassName("dropDownAnswerText")[i].innerHTML = dropDownListRightAnswers[i];
  }
}

function changeButtonType(){
  document.getElementsByClassName("answer")[0].onclick=function(){ askQuestion(); } ;
  document.getElementsByClassName("answer")[0].value = "Следующий вопрос";
}

function alertRight(){
  alert("верно!");
  rightAnswersCounter++;
  
  if(questionsCounter == numberOfQuestions){
    checkIfFinish();
  } else {
    clearField();
    askQuestion();
  }
  // questionsCounter == numberOfQuestions ? checkIfFinish() : askQuestion();
}

function checkIfFinish(){
  // alert(questionsCounter);
  if(questionsCounter == numberOfQuestions) {
    document.getElementsByClassName("answer")[0].onclick=function(){ showFinalWindow(); } ;
    document.getElementsByClassName("answer")[0].value = "Показать результат";
    // alert("Уважаемый " + localStorage.getItem('userTestName') + "! Тест окончен. Количество правильных ответов - "+ rightAnswersCounter);
  }
}

function showFinalWindow(){
  clearField();
  document.getElementById("rightAnswers").innerHTML = " " + rightAnswersCounter;
  document.getElementById("numberOfQuestions").innerHTML = " " + numberOfQuestions;
  document.getElementById("userName").innerHTML = " " + localStorage.getItem('userTestName') +"!  ";
  checkRank();
  document.getElementById("question").innerHTML = document.getElementsByClassName("finalWindow")[0].innerHTML;
  questionsCounter=0;
  rightAnswersCounter = 0;
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
  textQuestion = {};
  dropDownListArrayAnswer = [];
  dropDownListRightAnswers = [];
}

