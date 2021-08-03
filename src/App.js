import React,{useState,useEffect}from "react";
import { Route, Switch ,BrowserRouter as Router} from "react-router-dom";
import Menu from "./Components/Menu";
import ProductList from "./Components/ProductList";
export default function App() {
  const [key, setKey] = useState('');
  const onClickHandler=(e)=>{
    setKey(e.target.value);
    console.log(e)
  }


  return (
    <div>
      <div className="main-container">
        <Router>
          
          <Route path="/menu">
                <Menu onClickHandler={onClickHandler}/>
            </Route>
            <Route path='/menu/:productCategory'>
            {key?<ProductList url={key}/>:<></>}
            </Route>
         
        </Router>
      </div>
    </div>
  );
}
