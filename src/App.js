import logo from './logo.svg';
import './App.css';
import Admin from "./Admin";
import Create from "./Create";
import Data from "./Data";
import NavBar from "./NavBar";
import FbConfig from "./FbConfig";
import SignUp from "./SignUp";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
<BrowserRouter>
<NavBar/>
<Routes>
   <Route path="/Admin" element={<Admin/>}/>
   <Route path="/Create" element={<Create/>}/>
   <Route path="/Data" element={<Data/>}/>
   <Route path="/SignUp" element={<SignUp/>}/>
 </Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
