import React from 'react';
import Ques from './QuesBank.js';
function App() {
  return (
    <>
      <div id="quiz-div">
        <h1>My Quiz Application</h1>
        <h2>Question 1. {Ques.question}</h2>
        <h3><input type="radio" name="options" />{Ques.option1}</h3>
        <h3><input type="radio" name="options" />{Ques.option2}</h3>
        <h3><input type="radio" name="options" />{Ques.option3}</h3>
        <h3><input type="radio" name="options" />{Ques.option4}</h3>
      </div>
    </>
  );
}
export default App;