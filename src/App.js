
import mascot from "./Images/Mascot.jpeg"


import './App.css';
import MyIcon from "./Components/MyIcons/MyIcons.js";



function App() {
  return (
    <div className="App">
       <header className = "title">McGill University Fellow Student Experience</header>

       <img className ="mascot" src={mascot} alt = "" ></img>

       


       <p className = "desc1"> Hello there. As part of the CodeJam Hackothon 2020 and to promote 
         mental wellness, </p>  <p className = "desc2"> we put together a site for people who would like to 
         receive an occasional sweet message :)  </p>

        <MyIcon> </MyIcon>


        
    </div>
  )
}

export default App;
