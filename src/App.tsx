import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/Header";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
