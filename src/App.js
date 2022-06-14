import './App.css';
import { useEffect, useState} from "react"

const App = () => {
const [ageOfEmpires, setAgeOfEmpires] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
      ); 
      if(!response.ok){
        throw new Error(response.statusText)
      };
      const data = await response.json()
      setAgeOfEmpires(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Could not fetch the data");
    };
   
  };
  fetchData();
}, []);



return (
<div className="App">
<h1>Fetch API's</h1>
{error && <p>{error}</p>}
{ageOfEmpires.map((empires) => (
  <div key={empires.id}>
  <h3>{empires.name}</h3>
  </div>
))}
</div>
);
};
export default App;