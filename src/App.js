import axios from "axios";
import { useState } from "react";

const App = () => {

  const [chosenLevel, setChosenLevel] = useState(null);

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
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log(chosenLevel);

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
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>}

      {chosenLevel && <div className="question-area">
        <h1>Welcome to level: {chosenLevel}</h1>
      </div>}
    </div>
  );
};

export default App;
