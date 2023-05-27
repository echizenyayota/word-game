import axios from "axios";

const App = async () => {

  const options = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: {
      level: '3',
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

  return (
    <div className="App">

    </div>
  );
};

export default App;
