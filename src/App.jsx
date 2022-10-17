import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BoardPage from "./pages/BoardPage";
import PasswordChangePage from "./pages/PasswordChangePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "./contexts/LoginContext";
import {BoardProvider} from './contexts/BoardContext'

function App() {
  const { isLoggedIn } = useLoginContext();
  // index.js de app i provider ile sarmaladigimiz icin burada artik sadece usecontext kullaniyoruz props yok state yok?
  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/password-change" element={<PasswordChangePage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BoardProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/board" element={<BoardPage />} />
          </Routes>
        </BrowserRouter>
        </BoardProvider>
      )}
    </div>
  );
}

export default App;
