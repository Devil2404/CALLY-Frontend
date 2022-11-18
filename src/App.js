import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from
  "react-router-dom";
import Home from "./components/Home";
import News from './components/News';
import Trash from './components/Trash';
import Resume from './components/Resume';
import Notes from './components/Notes';
import Login from './components/Login';
import Money from './components/Money';
import Type from './components/Type';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/home" || "/"} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/news" element={<News />} />
          <Route path="/type" element={<Type />} />
          <Route path="/money" element={<Money />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
