import React from "react";

function QuestionItem({ question,myAnswer,handleRemove}) {

  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function delectQuestion(){
    handleRemove(id)
  }
    function handleMyAnswer(e) {
    myAnswer(id, parseInt(e.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onClick={handleMyAnswer}>{options}</select>
      </label>
      <button onClick={delectQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
