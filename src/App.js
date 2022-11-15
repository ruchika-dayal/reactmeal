import React ,{Fragment, useState} from 'react'
import './App.css';
import Header  from './componends/Login/Header';
import Meal from './componends/Meals/Meal';
import Cart from './Card/Card.js'


function App(props) {
  const [showcart ,setshowcart] = useState(false);

  const showcarthandler=()=>{
    setshowcart(true)
  };

  const hidecarthandler=()=>{
    setshowcart(false)
  }

   console.log(props)
  return (<Fragment>

    { showcart && <Cart hidecart={hidecarthandler}/>}
   <Header showcart={showcarthandler}/>
   <Meal/>
  </Fragment>
  );
}

export default App;
