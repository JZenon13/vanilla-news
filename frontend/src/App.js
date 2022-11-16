import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TopHeadlines from "./pages/TopHeadlines";
import SearchedTopic from "./pages/SearchedTopic";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/topHeadlines" element={<TopHeadlines />} />
            <Route path="/searched/:result" element={<SearchedTopic />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
