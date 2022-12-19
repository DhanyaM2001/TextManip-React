import "./App.css";
import React, { useState } from 'react';

//import About from "./MyComponents/About";
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import Alert from "./MyComponents/Alert";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btnColor, setbtnColor] = useState('primary');
  //const flag = false;

  const changeColor = (color) =>{
    if(btnColor === 'primary'){
      setbtnColor(color);
    }
    else{
      setbtnColor('primary');
    }
  }

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#082326';
      // document.body.style.color = 'white' #042743
      showAlert("Dark mode enabled", "success");
      document.title = 'TextManip - Dark Mode'
    }
    else{
      setmode('light');
      showAlert('Light mode enabled', 'success')
      // document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white';
      document.title = 'TextManip - Light Mode'
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextManip"  changeColor={changeColor} aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">

      <TextForm btnColor={btnColor}  showAlert={showAlert} heading="Enter the text you want to modify" mode={mode}/>

      <Alert alert={alert}/>

      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
           <TextForm btnColor={btnColor}  showAlert={showAlert} heading="I am heading" mode={mode}/>
          </Route>
        </Switch> */
        
        // <Routes>
        //     <Route exact path="/" element={<TextForm btnColor={btnColor}  showAlert={showAlert} heading="Enter the text you want to modify" mode={mode}/>} />
        //     <Route exact path="/about" element={<About mode={mode}/>} />
        // </Routes>
  } 

  


  
        
       {/* <TextForm btnColor={btnColor}  showAlert={showAlert} heading="I am heading" mode={mode}/> */}
      </div>
      {/* </Router>   */}
    </>
  );
}

export default App;
