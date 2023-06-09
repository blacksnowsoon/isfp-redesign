import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import "./CSS/App.css";
import { NavBar } from "./Home/NavBar";
import { Outlet, json } from "react-router-dom";
import { Footer } from "./Home/Footer";
import { useLoaderData } from "react-router-dom";
import { getData } from "./API";
import { themeChoosed, userPreferdColor } from "./Utiles/UtilesMethods";

export const AppContext = createContext({
  defaultTheme: "system",
  NavActiveLink: "none",
});
function App() {

  const {NavActiveLink } = useContext(AppContext);
  const [activeNavLink, setActiveNavLink] = useState(NavActiveLink);
  const { data } = useLoaderData();
  

  // to sepreate the nested link from the simple links
  const generateNavBarMneu = useCallback(() => generateNavbarObject(data) , [data]);

  useEffect(()=>{
    userPreferdColor && themeChoosed(userPreferdColor)

    return()=>{
      userPreferdColor && themeChoosed(userPreferdColor)
    }
  },[])
  return (
    <AppContext.Provider
      value={{ activeNavLink, setActiveNavLink }} >
      <div className="App">
        <header>
          <NavBar navProps={generateNavBarMneu()} />
        </header>
        <main>
          <Outlet context={data} />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;

// retrive all the data from the API 
export async function loader() {
  const data = await getData();
  return { data };
}

// this return an object holds the nav bar entites
const generateNavbarObject = (data) =>{
  const navObj = {};
  // itreat over the data and add the absoult key if the its value is an array 
  // else add an array with the keys as a nested menu
  // 
    Object.keys(data).map((key) => {
      if (Array.isArray(data[key]) && data[key].length > 0) {
        navObj[key] = key;
      } else if (typeof data[key] === "object" && data[key] !== null) {
        navObj[key] = Object.keys(data[key]).map((nestedKey) => {
          return nestedKey;
        });
      }
    });

    return navObj;
}