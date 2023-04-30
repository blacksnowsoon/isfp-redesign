import { useCallback } from 'react';
import './CSS/App.css';
import { NavBar } from './Home/NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Home/Footer';
import { useLoaderData } from 'react-router-dom';
import { getData } from './API';

function App() {

  const { data }  = useLoaderData();

  // to sepreate the nested link from the simple links
  const generateNavBarMneu = useCallback(()=> {
    const navObj = {};

    Object.keys(data).map(key =>{
      if (Array.isArray(data[key]) && data[key].length > 0) {
        navObj[key] = key
      } else if (typeof(data[key]) === "object" && data[key] !== null) {
        navObj[key] = Object.keys(data[key]).map(nestedKey => {
          return nestedKey
        })
      }
    })
    
    return navObj
  },[])

  return (
    <div className="App" >
      <header>
        <NavBar navProps={generateNavBarMneu()} />
      </header>
      <main >
        <Outlet context={data}/>
      </main>
      <Footer /> 
    </div>
  )
}

export default App;



export async function loader() {
  const data = await getData();
  return   { data }
  
}

  
