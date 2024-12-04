import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Create from "./pages/Create";
import ThreadDetail from "./pages/ThreadDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
          <Route path="/threads/:thread_id" element={<ThreadDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
