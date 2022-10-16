import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage'
import BoardPage from './pages/BoardPage'
import PasswordChangePage from './pages/PasswordChangePage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLoginContext } from "./contexts/LoginContext";

function App() {
  const {isLoggedIn} = useLoginContext();
 // index.js de app i provider ile sarmaladigimiz icin burada artik sadece usecontext kullaniyoruz props yok state yok?
  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* simdilik path / sonra /boarda cevrilmeli */}
            <Route path="/" element={<BoardPage />} />
           
            <Route
              path="/password-change"
              element={
                <PasswordChangePage/>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
