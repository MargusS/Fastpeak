import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginView from "./components/login/LoginView";
import HomeView from "./components/home/HomeView";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Chat from "./components/chat/Chat";
import NewChat from "./components/new_chat/NewChat";
import RegistrationView from "./components/registration/RegistrationView";
import AccountView from "./components/account/AccountView";
import NewContactView from "./components/new_contact/NewContactView";

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
          <Route path="/newchat/:id" element={< NewChat />} />
          <Route path="/registration" element={< RegistrationView />} />
          <Route path="/account" element={< AccountView />} />
          <Route path="/newcontact" element={< NewContactView />} />
          <Route path="/" element={< LoginView />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
