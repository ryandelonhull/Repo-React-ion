import './App.css';
import Header from "./components/Header/header";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer";
import {useEffect, useState} from 'react'
import links from './deployedLinks.json';
import About from "./components/About/about"

function App() {

  const [deployedLinks, setDeployedLinks] = useState([])

  useEffect ( ()=>{
    setDeployedLinks(links)
  }, [])
  
  return (
    <div>
      <Header/>
      <div>
      {
        deployedLinks.map( (item, idx) => {
      
          return (
               <Portfolio name={item.name} link={item.link} image={item.image} key={item.id}/>
          );
        })
      }
      
      </div>
        <About/>
     
      <Footer/>
    </div>
  );
}

export default App;
