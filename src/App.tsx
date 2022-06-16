import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/header.components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Aligner } from "./components/Aligner";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Aligner>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Aligner>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
