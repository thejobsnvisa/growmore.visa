import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BlogsArtical from "./Pages/BlogsArtical";
import Blogs from "./Pages/Blogs";
import "./App.css";
import WhoWeAre from "./Pages/WhoWeAre";
import ContactUs from "./Pages/ContactUs";
import Brochures from "./Pages/Brochures";
import Policy from "./Pages/Policy";
import Terms from "./Pages/Terms";
import Refund from "./Pages/Refund";
import Al from "./Pages/AI";
import Videos from "./Pages/Videos";
import ScrollToTop from "./Components/ScrollToTop";
import PointsCalculator from "./Pages/PointsCalculator";
import Australia from "./Pages/Australia";
import Uk from "./Pages/Uk";
import USA from "./Pages/USA";
import UAE from "./Pages/UAE";
import Canada from "./Pages/Canada";
import NewZealand from "./Pages/NewZealand";
import France from "./Pages/France";
import Germany from "./Pages/Germany";    
import English from "./Pages/English";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs/:slug" element={<BlogsArtical />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/brochures" element={<Brochures />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-services" element={<Terms />} />
          <Route path="/cancellation-and-refund-policy" element={<Refund />} />
          <Route path="/artificial-intelligence-use-policy" element={<Al/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/Australia-points-calculator" element={<PointsCalculator/>} />
          <Route path="/australia" element={<Australia/>} />
          <Route path="/uk" element={<Uk/>} />
          <Route path="/usa" element={<USA/>} />
          <Route path="/uae" element={<UAE/>} />
          <Route path="/canada" element={<Canada/>} />
          <Route path="/new-zealand" element={<NewZealand/>} />
          <Route path="/france" element={<France/>} />
          <Route path="/germany" element={<Germany/>} />
          <Route path="/english-test" element={<English />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
