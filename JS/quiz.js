function clickGet() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var question8 = document.quiz.question8.value;
  var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;
  var question11 = document.quiz.question11.value;
  var question12 = document.quiz.question12.value;
  var question13 = document.quiz.question13.value;
  var question14 = document.quiz.question14.value;
  var question15 = document.quiz.question15.value;
  var question16 = document.quiz.question16.value;
  var question17 = document.quiz.question17.value;
  var question18 = document.quiz.question18.value;
  var question19 = document.quiz.question19.value;
  var question20 = document.quiz.question20.value;
  var question21 = document.quiz.question21.value;
  var question22 = document.quiz.question22.value;
  var question23 = document.quiz.question23.value;
  var question24 = document.quiz.question24.value;
  var question25 = document.quiz.question25.value;
  var question26 = document.quiz.question26.value;
  var question27 = document.quiz.question27.value;
  var question28 = document.quiz.question28.value;
  var question29 = document.quiz.question29.value;
  var question30 = document.quiz.question30.value;
  var correct = 0;

  if (question1 == "5/p") {
    console.log(correct);
    correct++;
    console.log(correct);
  }
  if (question2 == "2 hours and 24 minutes") {
    correct++;
    console.log(correct);
  }
  if (question3 == "$333.89") {
    correct++;
  }
  if (question4 == " $15,737.50 ") {
    correct++;
  }
  if (question5 == "-2.4") {
    correct++;
  }

  if (question6 == "8") {
    correct++;
  }

  if (question7 == "$1,200") {
    correct++;
  }

  if (question8 == "$496.30") {
    correct++;
  }

  if (question9 == "17 cents") {
    correct++;
  }

  if (question10 == "3.0") {
    correct++;
  }

  if (question11 == "$173.75") {
    correct++;
  }

  if (question12 == "13") {
    correct++;
  }

  if (question13 == "y") {
    correct++;
  }

  if (question14 == "150/x") {
    correct++;
  }

  if (question15 == "$90") {
    correct++;
  }

  if (question16 == "33") {
    correct++;
  }

  if (question17 == "$13.40") {
    correct++;
  }

  if (question18 == "$4350") {
    correct++;
  }

  if (question19 == "$132.85") {
    correct++;
  }

  if (question20 == "648") {
    correct++;
  }

  if (question21 == "tellers-ran") {
    correct++;
  }

  if (question22 == "no one’s surprise") {
    correct++;
  }

  if (question23 == "had read") {
    correct++;
  }

  if (question24 == "were lying") {
    correct++;
  }

  if (question25 == "essay “Self-Reliance” ") {
    correct++;
  }

  if (question26 == "and “an eyesore” by its harshest") {
    correct++;
  }

  if (question27 == " “to accomplish”).") {
    correct++;
  }

  if (question28 == "reading “The Fall of the House of Usher,”") {
    correct++;
  }

  if (question29 == "ran perfectly") {
    correct++;
  }

  if (question30 == "there two E’s in beetle?” asked Margo.") {
    correct++;
  }

  var messages = [
    "Above 80% , Succeeded!",
    "Above 66% , GOOD PASS",
    "50% and Above, PASS",
    "FAILED!!,THANKS FOR COMING "
  ];

  var range;
  if (correct <= 14) {
    range = 3;
  }
  if (correct >= 15 && correct <= 19) {
    range = 2;
  }

  if (correct >= 20 && correct <= 25) {
    range = 1;
  }

  if (correct >= 25 && correct <= 30) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("messages").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML =
    "you got " + correct + " correct.";
}
