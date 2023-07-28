import { Route, Routes } from "react-router-dom";
import "./App.css";
import "typeface-poppins";
import "typeface-heebo";
import Home from "./Components/Home";
import Setting from "./Components/Setting/Setting";
import AllInvoices from "./Components/All-invoice/AllInvoices";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/all-invoice" element={<AllInvoices />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
