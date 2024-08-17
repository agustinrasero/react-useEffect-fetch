import logo from './logo.svg';
import { useEffect,useState } from 'react';
import './App.css';

function App() {

  const [datos,setDatos] = useState()
  
  const cambiar = () =>{
    
    const api = 'https://api.chucknorris.io/jokes/random'
    fetch(api)
    .then(datos => datos.json())
    .then(datos => setDatos(<div key={datos.id}><img src={datos.icon_url}></img><h4>{datos.value}</h4></div>))
    .catch(()=> 'No se encontro')
 
  }

  useEffect(()=>{
    cambiar()
  },[])
  
  return (
    <>
      {datos}
      <button onClick={cambiar}>Cambiar frase</button>
    </>
  );
}

export default App;
