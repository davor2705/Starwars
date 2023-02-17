import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Nav />}>
                <Route path='' element={<Home />} /> 
            </Route>
      </Routes>
    </div>
  );
};

export default App;
