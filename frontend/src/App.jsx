import { Routes, Route } from "react-router";
import Home from "./components/home.jsx";
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
  );
};
export default App;
