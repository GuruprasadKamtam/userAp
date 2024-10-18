import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
    </Routes>
      
    </>
  )
}

export default App
