import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [chosenLevel, setChosenLevel] = useState("2");
  const [words, setWords] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const getRandomWords = async() => {
    const options = {
      method: 'GET',
      url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
      params: {
        level: chosenLevel,
        area: 'sat'
      },
      headers: {
        'X-RapidAPI-Key': 'fa98a7312emshb86681091093840p1d9006jsn39a816de511c',
        'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWords(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log(words && words.quizlist);

  useEffect(() => {
    if (chosenLevel) getRandomWords();
  }, [chosenLevel]);

  const checkAnswer = (option, optionIndex, correctAnswer) => {
    console.log(optionIndex, correctAnswer);
    if (optionIndex == correctAnswer) {
      setCorrectAnswers([...correctAnswers, option]);
    }
  };

  console.log(correctAnswers);

  return (
    <div className="App">

      {!chosenLevel && <div className="level-selector">
        <h1>Word Association App</h1>
        <p>Select Your Level to start</p>
        <select 
            name="levels" 
            id="levels"
            value={chosenLevel} 
            onChange={(e) => setChosenLevel(e.target.value)}>
          <option value={null}>Select a Level</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>}

      {chosenLevel && words && <div className="question-area">
        <h1>Welcome to level: {chosenLevel}</h1>
        {words.quizlist.map((question, questionIndex) => (
          <div className="question-box">
            {question.quiz.map((tip, _index)  => (
              <p key={_index}>{tip}</p>
            ))}
            <div className="question-buttons">
              {question.option.map((option, optionIndex) => (
                <div className="question-button">
                  <button 
                    onClick={() => checkAnswer(option, optionIndex + 1, question.correct)}
                  >{option}</button>
                </div>
              ))}
            </div>
            <p>{question.correct}</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default App;
