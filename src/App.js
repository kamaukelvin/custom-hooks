import "./App.css";
import useFetch from "./hooks/useFetch";
import useLocalStorage from './hooks/useLocalStorage'

function App() {

 
     const [item, setItem] = useLocalStorage("TEST", 123456)
  

  const {
    data: todos,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (loading) return <h1>Loading....</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <ul>{todos?.map((todo,i)=>(
<li key={todo.id}>{todo.title}</li>
      ))}</ul>
      

      <button onClick={()=>{refetch() ; setItem("testing", '12345')}}>Refetch</button>
    </div>
  );
}

export default App;
