import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/header.components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Aligner } from "./components/Aligner";
import SobreNos from "./pages/sobre-nos";
import ReservatorioVerificar from "./pages/niveis-de-reservatorio";
import ReservatorioNiveis from "./pages/niveis-de-reservatorio2";
import AlertaInundacao from "./pages/alerta-de-inundacao";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Aligner>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/niveis-de-reservatorio" element={<ReservatorioVerificar />} />
          <Route path="/niveis-de-reservatorio2" element={<ReservatorioNiveis />} />
          <Route path="/alerta-de-inundacao" element={<AlertaInundacao />} />
        </Routes>
        </Aligner>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
