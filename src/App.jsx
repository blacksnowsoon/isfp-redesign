import { useCallback, useEffect } from 'react';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { useLoaderData } from 'react-router-dom';
import { getData } from './API';
import { HeroSection } from './Components/HeroSection';
function App() {

  const { data }  = useLoaderData();

  const generateNavBar = useCallback(()=> {
    const navObj = {};
    for(let [key, value] of Object.entries(data)) {
      if(!Array.isArray(value) && value.length !== 0) {
        navObj[key] = Object.getOwnPropertyNames(value)
      } else {
        navObj[key] = key
      }
    }
    return navObj
  },[])
  return (
    <div className="App" >
      <header>
        <NavBar navProps={generateNavBar()} />
        <HeroSection />
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

  
