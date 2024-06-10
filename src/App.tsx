import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreloaderComponent from "./components/PreloaderComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CareerPage from "./pages/CareerPage";
import CompanyPage from "./pages/CompanyPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>
      <Router>
        <PreloaderComponent />
        <HeaderComponent />
        <div className="content-wrapper">
          <div className="content-body">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareerPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
        <ToastContainer pauseOnFocusLoss={false} />
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
