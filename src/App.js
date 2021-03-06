import './App.css';
import Header from "./components/Header/header";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/footer";
import {useEffect, useState} from 'react'
import links from './deployedLinks.json';
import About from "./components/About/about";
// import image from "./components/image/image"

function App() {

  const [deployedLinks, setDeployedLinks] = useState([])

  useEffect ( ()=>{
    setDeployedLinks(links)
  }, [])
  
  return (
    <div className="background">
      <Header/> 
     <div>
      <h2>Potent REPOtables</h2>
      {
        deployedLinks.map( (item, idx) => {
          console.log(item.image);
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
