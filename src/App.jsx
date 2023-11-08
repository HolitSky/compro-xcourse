import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
// Pages
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import TermsPage from "./pages/TermsPage";
import TestimoPage from "./pages/TestimoPage";
import FaqComponent from "./components/FaqComponent";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route path="/courses" Component={CoursesPage} />
          <Route path="/terms" Component={TermsPage} />
          <Route path="/testimonial" Component={TestimoPage} />
          <Route path="/faq" Component={FaqComponent} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
