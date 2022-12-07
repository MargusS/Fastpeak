import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./components/login/LoginView";
import HomeView from "./components/home/HomeView";
import { createTheme, ThemeProvider } from "@mui/material";
import Chat from "./components/chat/Chat";
import Registration from "./components/registration/Registration";

const theme = createTheme({
  palette: {
    orange: {
      main: '#CB4B2E',
      contrastText: '#fff'
    },
    darkOrange: {
      main: '#9A3B26',
      contrastText: '#fff'
    },
    blue: {
      main: '#272E4F',
      contrastText: '#fff'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={< LoginView />} />
          <Route path="/home" element={< HomeView />} />
          <Route path="/chat/:id" element={< Chat />} />
          <Route path="/registration" element={< Registration />} />
          <Route path="/" element={< LoginView />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
