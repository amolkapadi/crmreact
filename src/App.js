import './App.css';
import Modules from './Component/Modules/Modules';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Crm from './Component/CRM/Crm';
import NewLead from './Component/NewLead/NewLead';
function App() {
  return (
  
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Modules />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/newlead" element={<NewLead />} />

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
