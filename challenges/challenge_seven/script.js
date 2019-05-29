/*
 Coding challenge

 1. Build a function constructor called Question to describe a question. A question should include:
 a) Question itself
 b) the answers from which the player can choose the correct one (choose an adequate data structure here, array,
  object, etc.)
 c)  correct answer (I would use a number for this)

 2. Create a couple of question using the constructor

 3. store them all inside and array

 4. select one random question and log it on the console, together with the possible answers (each question should
  have a number) (Hint: write a method for the question objects for this task).

 5. use the 'prompt' function to ask the user for the correct answer. the user should input the number of the
  correct answer such as you displayed it on task 4.

 6.Check if the answer is correct and print to the console whether the answer is correct or not (hint: write another
  method for this).

  7. suppose this code would be a plugin for other programmers to use in their code. so make sure that all your code
   is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do
    exactly that).

         ------------EXPERT LEVEL---------------
  8. After you display the result, display the next random question, so that the game never ends (hint: write a
   function for this and call it right after displaying the result)

  9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user
   writes 'exit' instead of the answer.  In this case, DON'T call the function from task 8.

  10. Track the user score to make the game more fun so each time an answer is correct, add 1 point to the score
   (hint: I'm going to use the power of closures for this but you don't have to, just do this with the tools you
    feel more comfortable at this point.)
  11. display the score to the console. Use yet another method for this.
 */

// My answer
// (function () {
//
//
// var Question = function (question, choicesArr, answerIndex){
//     this.question = question;
//     this.choicesArr = choicesArr;
//     this.answerIndex = answerIndex;
//
// };
//
// var mathQuestion = new Question('What is 1+1?',[0,2,5], 1);
//
// var historyQuestion = new Question('how many states are there in the united States?', [51,52,50], 2);
//
// var artQuestion = new Question('Which is not a primary color?', ['green','red','blue'], 0);
//
// var score = 0;
//
// // I should of just put this part in a prototype
// var gameObject = {
//     questions: [mathQuestion,historyQuestion,artQuestion],
//
//     randomQuestion: function () {
//             var rand = this.questions[Math.floor(Math.random() * this.questions.length)];
//             var choices = rand.choicesArr;
//             var answer = rand.answerIndex;
//            function display (){
//                console.log(rand.question);
//                for(var i = 0; i < choices.length; i++) {
//                    console.log(i +': ' + choices[i]);
//                }
//            }
//         display();
//         prompts();
//            function prompts() {
//                var user = Number(prompt('Please select the correct answer (just type the number 0-2 or \'exit\' to' +
//                    ' end' +
//                    ' the game)!'));
//                if(user === answer){
//                    console.log('Correct Answer!');
//                    score++;
//                    console.log('your score is ' + score + '!');
//                    gameObject.randomQuestion();
//                }else if (isNaN(user)){
//                    console.log('Thank you for playing! Your score was ' + score + '!');
//                } else {
//                    console.log('try again!');
//                    display();
//                    prompts();
//                }
//            }
//
//     }
//
// };
//
// gameObject.randomQuestion();
// })();

 // **His answer easy
// (function () {
//
//
// var Question = function (question, choicesArr, answerIndex){
//     this.question = question;
//     this.choicesArr = choicesArr;
//     this.answerIndex = answerIndex;
//
// };
// Question.prototype.displayQuestion = function () {
//   console.log(this.question);
//   for (var i = 0; i < this.choicesArr.length; i++){
//       console.log(i + ': ' + this.choicesArr[i]);
//   }
// };
//
// Question.prototype.checkAnswer = function (ans) {
//     if(ans === this.answerIndex){
//         console.log('Correct Answer!');
//         this.displayQuestion();
//     } else {
//         console.log('Sorry Wrong Answer!');
//     }
// };
// var mathQuestion = new Question('What is 1+1?',[0,2,5], 1);
//
// var historyQuestion = new Question('how many states are there in the united States?', [51,52,50], 2);
//
// var artQuestion = new Question('Which is not a primary color?', ['green','red','blue'], 0);
//
// var questions = [mathQuestion,historyQuestion,artQuestion];
//
// var n = Math.floor(Math.random() * questions.length);
//
// questions[n].displayQuestion();
//
// var answer = parseInt(prompt('Please Select the correct answer.'));
//
// questions[n].checkAnswer(answer);
//
// })();


// his answer expert

(function () {


    var Question = function (question, choicesArr, answerIndex){
        this.question = question;
        this.choicesArr = choicesArr;
        this.answerIndex = answerIndex;

    };
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.choicesArr.length; i++){
            console.log(i + ': ' + this.choicesArr[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if(ans === this.answerIndex){
            console.log('Correct Answer!');
           sc = callback(true);
        } else {
            console.log('Sorry Wrong Answer!');
            sc = callback(false);
        }
        this.displayScore(sc);
    };
    
    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------');
    };
    
    var mathQuestion = new Question('What is 1+1?',[0,2,5], 1);

    var historyQuestion = new Question('how many states are there in the united States?', [51,52,50], 2);

    var artQuestion = new Question('Which is not a primary color?', ['green','red','blue'], 0);

    var questions = [mathQuestion,historyQuestion,artQuestion];

    function score () {
        var sc = 0;
        return function (correct) {
            if(correct){
                sc++;
            }
            return sc;
        }
    };

    var keepScore = score();
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please Select the correct answer.');



        if(answer !== "exit") {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }


    }
nextQuestion();

})();