import { BrowserRouter, Route, Routes } from "react-router-dom";

import List from "./pages/List";
import AddPage from "./pages/AddPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
