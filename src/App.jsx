import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/Services/ServicePage";
import ContactPage from "./pages/Contact/ContactPage";
function App() {
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
    img.setAttribute("loading", "lazy");
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
